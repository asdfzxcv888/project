import mongoose from "mongoose";

const productimage=new mongoose.Schema({
    data: Buffer,
    contentType: String,
    productname:{type:String}
  });
  
  export default mongoose.model('Image', productimage);
