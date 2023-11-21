import express from 'express'
import mongoose from "mongoose";
import router from './routes/user.js';
import errorhandler from './errorhandler.js';
import productrouter from './routes/product.js'
import cors from 'cors'
import multer from 'multer';
import Image from './models/productimages.js'

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const app=express()



app.use(cors({origin:"*",methods:"*",allowedHeaders:"*",exposedHeaders:"*"}))


app.use(express.json())

app.use('/user',router)
app.use('/products',productrouter)

app.post('/upload', upload.single('image'), async (req, res) => {
   try {
     const newImage = new Image({
       data: req.file.buffer,
       contentType: req.file.mimetype,
       productname:req.headers.name

     });
 
     await newImage.save();
     console.log('image uploaded');
     console.log(newImage);
 
     res.status(201).json({ message: 'Image uploaded successfully' });
     
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'Internal Server Error' });
   }
 });







    app.listen(5000,async()=>{
        try {
           await mongoose.connect('mongodb+srv://newuser:newuser123@ttt.2frh5xa.mongodb.net/taskwork?retryWrites=true&w=majority')
           console.log('online')
        } catch (error) {
           console.log(error)
           console.log('failed to boot server')
        }})


