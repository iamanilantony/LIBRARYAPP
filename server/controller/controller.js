const {LibrarySchema,AuthorSchema} = require('../model/model') 
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
    LibrarySchema.findByIdAndUpdate(id,req.query,{useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.send('User Does not exist')
                return;
            }
            res.send(data)
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

}