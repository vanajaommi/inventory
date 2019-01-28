var express=require("express");
var app=express();
var db=require("./db");

//var products = require("./routes/products");
var users = require("./routes/users");
var books=require("./routes/books");

var bodyParser=require("body-parser");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"))

//app.use("/api/products", products);
app.use("/api/users",users);
app.use("/api/books",books);

app.listen(8080,()=>{
    console.log("SERVER STARTED")
})