const LibrarySchema = require('../model/model') 
const AuthorSchema = require('../model/authmodel') 

exports.addbook=(req,res) => {
    if(Object.entries(req.body).length === 0){
        res.status(400).send(`Cannot Insert Empty value ${req.query}`);
        return ;
    }
   var book = new LibrarySchema({
        title: req.query.title,
        author: req.query.author,
        img: req.query.img,
        desc: req.query.desc,
   })

   book
        .save()
        .then(data => {
            res.send("Data updated")
        })
        .catch(e=>{
            res.send('Error updating'+e)
        })
}
exports.updatebook=(req,res) => {
if(Object.entries(req.body).length === 0){
        res.status(500).send(req.body);
        return;
    }
    var id = req.params.id;
    LibrarySchema.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.send('User Does not exist')
                return;
            }
            else{
                res.send(data)
            }
        })
        .catch(err => {
            res.status(400).send({message:'No such user'})
        })
    }

exports.findbook=(req,res) => {
    if(req.params.id){
        const vid = req.params.id;
        LibrarySchema.findById(vid)
            .then(data=>{
                if(!data){
                    res.send('Id not found')
                }
                else{
                    res.send(data)
                }
            })
            .catch(err=>{
                res.send(err + vid)
                // res.send('Error finding unique Id')
            })
    }
    else{
        LibrarySchema.find()
            .then(data=>{
                    res.send(data)
                })
            .catch(err=>{
                res.send('Error findng all data')
            })
            }
        }

exports.deletebook=(req,res) => {
        var id = req.params.id;
        LibrarySchema.findByIdAndDelete(id)
            .then(data=>{
                if(!data){
                    res.send('User Does not exist')
                    return;
                }
                res.send('data got deleted successfully')
            })
            .catch(err => {
                res.status(400).send({message:'No such user'})
            })
        }

exports.addauthor = (req,res) => {
    if(Object.entries(req.query).length === 0){
        res.status(400).send(`Cannot Insert Empty value ${req.query}`);
        return ;
    }
    let author = new AuthorSchema ({
        name : req.query.name,
        books :req.query.books,
        Age : req.query.age,
        img : req.query.img,
        desc : req.query.desc,
    })

    author
        .save()
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(400).send('Error Adding data to db')
        })
}

exports.updateauthor = (req,res) => {
    if(!req.body){
        res.status(400).send(`Cannot update Empty value ${req.query.data}`);
        console.log(req.query.data);
        res.send(req.body)
        return ;
    }
    let id = req.params.id;
    AuthorSchema.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.send('Id not found '+data)
                return;
            }
            else{
                res.send('Data updated succesfuly'+data)
            }
        })
        .catch(err=>{
            res.send('Could not update data'+err)
        })
}
exports.deleteauthor = (req,res) => {
    let id = req.params.id;
    AuthorSchema.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.send('Id not found')
            return;
        }
        else{
            res.send('data deleted'+data);
            // next()
        }
    })
    .catch(err=>{
        res.send('Error deleting data'+err)
    })
}
exports.findauthor = (req,res) => {
    if(req.params.id){
        let id = req.params.id;
        AuthorSchema.findById(id)
            .then(data=>{
                if(!data){
                    res.send('Id not found')
                    return;
                }
                else{
                    res.send(data)
                }
            })
            .catch(err=>{
                res.send('Error fetching single user data'+err)
            })
    }
    else{
        AuthorSchema.find()
            .then(data=>{
                    res.send(data)
            })
            .catch(err=>{
                res.send('Error fetching data'+err)
            })

    }
}
