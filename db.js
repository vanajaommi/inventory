var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/backend");

var bookSchema=mongoose.Schema({
    title: String,
    author: String,
    category:String,
    datepublished:Date
})

//Create modal
exports.Book=mongoose.model('Book',bookSchema,'books');


var userSchema=mongoose.Schema({
    username: String,
    password: String,
    email:String,
    phonenumber:Number
})

//Create modal
exports.User=mongoose.model('User',userSchema,'users');

//Define schema
var employeeSchema=mongoose.Schema({
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    email: String,
    isAdmin: {
        type:Boolean,
        default: false
    },
    employeeId:Number,
    joiningDate:Date,
    hobbies:[String]
})

//Create modal
exports.Employee=mongoose.model('Employee', employeeSchema,'employees')

//Create skill schema
var skillSchema=mongoose.Schema({
    name: String,
    description: String,
    employees:[mongoose.Schema.Types.ObjectId]
})

//Create modal
exports.Skill=mongoose.model('Skill',skillSchema,'skills');

