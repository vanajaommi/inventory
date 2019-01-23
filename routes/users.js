var express = require('express')
var router = express.Router()
var db = require('../db');
var dotEnv=require("dotenv");
dotEnv.load();




router.get("/api/users/get",(req,res)=>{
    db.User.find({},function(err,users){
        if(err) res.send(err)
        res.send(users)
    })
})


router.post("/api/users/post",(req,res)=>{
    var newUser=new db.User(req.body);
    newUser.save(function(err,users){
        if(err) res.send(err)

        res.send(users)
    })
})
router.put("/api/users/update/:id",(req,res)=>{
    db.Product.findByIdAndUpdate(req.params.id,function(err,products){
        if(err) res.send(err)
        res.send(products)
    
    })
})
     
router.delete("/api/users/delete/:id",(req,res)=>{
    db.User.findByIdAndDelete(req.params.id,function(err,products){
        if(err) res.send(err)
        res.send(users)
    
    })
  
    })
module.exports=router;