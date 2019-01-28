var express = require('express')
var router = express.Router()
var db = require('../db');




router.route("/")
.get((req,res)=>{
    db.Book.find({},function(err,books){
        if(err) res.send(err)
        res.send(books)
    })
})


router.route("/")
.post((req,res)=>{
    var newBook=new db.Book(req.body);
    newBook.save(function(err,books){
        if(err) res.send(err)

        res.send(books)
    })
})
router.route("/:id")
.put((req,res)=>{
    db.Book.findByIdAndUpdate(req.params.id,req.body,function(err,books){
        if(err) res.send(err)
        res.send(books)
    
    })
})
     
router.route("/:id")
.delete((req,res)=>{
    db.Book.findByIdAndDelete(req.params.id,function(err,books){
        if(err) res.send(err)
        res.send(books)
    
    })
  
    })
module.exports=router;