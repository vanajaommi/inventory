var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Registration");
//var dotEnv = require("dotenv");
//dotEnv.load();

//mongoose.Promise = global.Promise;
//mongoose.connect(process.env.DB_URL,{ useNewUrlParser:true });
//Schema
/*var productSchema=mongoose.Schema({
    
    name: String,
    availableQuantity: Number,
    category: String,
    lastModifiedDate: Date,
    isOrganic: Boolean
})
//model
exports.Product=mongoose.model('Product',productSchema,'products');*/

//shema
var userSchema=mongoose.Schema({
    fullname:String,
    lastname:String,
    email:String,
    phonenumber:Number,
    datecreated:{
        type: Date,
        default: Date.now
    },
    img:{
        data:Buffer,
        type:String
    }
})
//model
exports.User=mongoose.model('User',userSchema,'users');
