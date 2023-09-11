const mongoose= require("mongoose");

const  employSchema= new  mongoose.Schema({
name:{
    type:String,
    required:true,
},
lastName:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
},
mobileNo:{
    type:Number,
    required:true,
},
password:{
    type:String,
    required:true,
},
address:{
    villge:{type:String},
    dis:{type:String},
    pinCode:{type:Number},
},
role:{
    type:String,
    required:true,
    default:"employ",
}
});

module.exports=mongoose.model("employ",employSchema);