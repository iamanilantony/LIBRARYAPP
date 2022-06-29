const axios = require('axios');

//Get request for Homepage
exports.homeroute = (req,res) => {
    res.render('index',{
        nav : [{'links':'/author','title':'Auhtor'},{'links':'/books','title':'Books'},{'links':'/AddBook','title':'AddBook'}],
        title : 'Library'
    })
}
