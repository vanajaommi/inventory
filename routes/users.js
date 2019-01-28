var express = require('express')
var router = express.Router()
var db = require('../db');




router.get("/",(req,res)=>{
    db.User.find({},function(err,users){
        if(err) res.send(err)
        res.send(users)
    })
})


router.post("/",(req,res)=>{
    var newUser=new db.User(req.body);
    newUser.save(function(err,users){
        if(err) res.send(err)

        res.send(users)
    })
})
router.put("/:id",(req,res)=>{
    db.User.findByIdAndUpdate(req.params.id,req.body,function(err,users){
        if(err) res.send(err)
        res.send(users)
    
    })
})
     
router.delete("/:id",(req,res)=>{
    db.User.findByIdAndDelete(req.params.id,function(err,users){
        if(err) res.send(err)
        res.send(users)
    
    })
  
    })
module.exports=router;