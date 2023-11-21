import mongoose from "mongoose";

const productschema=new mongoose.Schema({
    name:{type:String},
    quantity:{type:Number},
    price:{type:Number},
    discount:{type:String},
    thumbnail:{type:String},
    createdby:{type:String}


})

export default mongoose.model('productmodel',productschema)