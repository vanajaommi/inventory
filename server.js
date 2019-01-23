var express=require("express");
var app=express();
var db=require("./db");
//var dotEnv = require("dotenv");
//dotEnv.load();
//var products = require("./routes/products");
//var users = require("./routes/users");
//var port = process.env.PORT || 8000;
var bodyParser=require("body-parser");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"))

//app.use("/api/products", products);
//app.use("/api/users",users);

app.get("/api/users/get",(req,res)=>{
    db.User.find({},function(err,users){
        if(err) res.send(err)
        res.send(users)
    })
})


app.post("/api/users",(req,res)=>{
    var newUser=new db.User(req.body);
    newUser.save(function(err,users){
        if(err) res.send(err)

        res.send(users)
    })
})
app.put("/api/users/update/:id",(req,res)=>{
    db.User.findByIdAndUpdate(req.params.id,req.body,function(err,users){
        if(err) res.send(err)
        res.send(users)
    
        
    })
})
     
app.delete("/api/users/delete/:id",(req,res)=>{
    db.User.findByIdAndUpdate({"_id":objectId},function(err,users){
        if(err) res.send(err)
        res.send(users)
    
    })
  
    })
app.listen(8080,()=>{
    console.log("SERVER STARTED")
})