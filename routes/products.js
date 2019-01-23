var express = require('express')
var router = express.Router()
var db = require('../db');
var dotEnv=require("dotenv");
dotEnv.load();




    router.route("/products")
    .get((req,res)=>{
        db.Product.findById(req.params.id)
        console.log(JSON.stringify(products)+"products")
       .then((products)=>{
            res.status(200).send(products);
        })
        .catch((err)=>{
            res.status(500).send({
                message:"Unable to retrieve user" + JSON.stringify(err)
            });
        })
    })
    
    router.route("/api/products")
    .post((req,res)=>{
        var newProduct=new db.Product(req.body);
        newProduct.save(function(err,products){
            if(err) res.send(err)
    
            res.send(product)
        })
    })

module.exports=router;