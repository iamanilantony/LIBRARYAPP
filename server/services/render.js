const axios = require('axios');

//Get request for Homepage
exports.homeroute = (req,res) => {
    axios.get('http://localhost:5000/api/books')
        .then(response=>{
            res.render('index',{
                title : 'Library',books : response.data 
            })
        })
        .catch(err=>{
            res.status(400).send({message:'error retreiving data books'+err})
        })
    
}
exports.singlebook = (req,res)=>{
    const id = req.params.id;
    axios.get(`http://localhost:5000/api/books/${id}`)
        .then(response=>{
            res.render('singlebook',{book : response.data})
        })
        .catch(err=>{
            res.status(400).send({message:'error retreiving data single book'+err})
        })
}
exports.authors = (req,res) => {
    axios.get('http://localhost:5000/api/author')
        .then(response=>{
            res.render('authors',{authors : response.data})
        })
        .catch(err=>{
            res.status(400).send({message:'error retreiving data authors'+err})
        })
}

exports.singleauthor = (req,res) => {
    const id = req.params.id;
    axios.get(`http://localhost:5000/api/author/${id}`)
        .then(response=>{
            res.render('singleauthor',{author : response.data})
        })
        .catch(err=>{
            res.status(400).send({message:'error retreiving single author '+err})
        })
}

exports.login = (req,res) => {
    res.render('login')
}