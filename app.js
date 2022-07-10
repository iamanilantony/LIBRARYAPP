const express = require('express');
const morgan = require('morgan');  
const cookieparser = require('cookie-parser')
const sessions = require('express-session')
const bodyparser = require('body-parser');
const connectDB = require('./server/database/connection')
const sessionstore = require('./server/database/sessionconnection')
const port = process.env.PORT || 3000

const app = express();

//set view
app.set('view engine','ejs');
app.set('views','./views');



//set parser
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

//connect mongoDB
connectDB();

//attach css js
app.use(express.static('./public'))

//setup sessions
const oneday = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret:'thisisasecretkeyanil',
    saveUninitialized:true,
    cookie: {maxAge: oneday},
    resave: false,
    store : sessionstore,

}))

//cookie parser middleware
app.use(cookieparser());

//set router
app.use('/',require('./server/routes/router'),)

//set port
app.listen(port,()=>{
    console.log("server listening to port "+port);
});