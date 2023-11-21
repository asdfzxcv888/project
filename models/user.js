import mongoose from "mongoose";

const userschema=new mongoose.Schema({
name:{type:String},
email:{type:String},
phone:{type:Number},
dateofbirth:{type:Date},
// profileimage:{type:Image},
password:{type:String},

})



export default mongoose.model('user',userschema)