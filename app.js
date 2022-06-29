const express = require('express');
const morgan = require('morgan');  
const bodyparser = require('body-parser');
const connectDB = require('./server/database/connection')

const app = express();

//set view
app.set('view engine','ejs');
app.set('views','./views');

app.use(bodyparser.urlencoded({extended:true}))

//connect mongoDB
connectDB();

//attach css js
app.use(express.static('./public'))

//set router
app.use('/',require('./server/routes/router'))

//set port
app.listen(5000);