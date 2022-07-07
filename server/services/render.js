const axios = require('axios');

//Get request for Homepage
exports.homeroute = (req,res) => {
    axios.get('http://localhost:5000/api/books')
        .then(response=>{
            res.render('index',{
                title : 'Library',books : response.data, username : req.session.userid 
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
    axios.get('http://localhost:5000/api/users')
        .then(response => {
            res.render('login',{users : response.data})
        })
        .catch(err=> {
            res.send('Could not fetch data' + err);
        })
}

exports.usersvalid = (req,res) => {
    var session;
    if(!req.body){
        res.send('Insert Values');
        return;
    }
    axios.get('http://localhost:5000/api/users')
        .then(response=>{
            for(let i=0;i<response.data.length;i++){
                if (response.data[i].username === req.body.username){
                    if (response.data[i].password === req.body.password){
                        session = req.session;
                        session.userid = req.body.username;
                        console.log(req.session)
                        res.redirect(`/?username=${req.body.username}`) 
                        // res.send('password confirmed')
                    }
                    else{
                        res.redirect('/login')
                        // res.send('Enter right password')
                    }
                }
            }
            res.send('No user Was Found '+response.data)
            
             
        })
}



