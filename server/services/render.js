const axios = require('axios');

//Get request for Homepage
exports.homeroute = (req,res) => {
    axios.get('http://localhost:5000/api/books')
        .then(response=>{
            res.render('index',{
                nav : [{'links':'/author','title':'Auhtor'},{'links':'/books','title':'Books'},{'links':'/AddBook','title':'AddBook'}],
                title : 'Library',books : response.data 
            })
        })
    
}
