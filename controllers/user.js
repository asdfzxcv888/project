import usermodel from "../models/user.js";
import nodemailer from "nodemailer";

let token

const createuser = async (req, res) => {
  try {
    


    const { name, email, phone, dateofbirth, password } = { ...req.body };


    if (!name || !email || !password) {
      let str = !name ? `name ` : "";
      str += !email ? `email ` : "";
      str += !password ? `password ` : "";

      str += "cannot be empty";
      res.json({error:str})
    }
    const user= await usermodel.findOne({email}) 
    if(user){return res.json({msg:'user already exists'})}
     token=sendotp(email)
    res.json({msg:'please verify otp'})

    
  } catch (error) {}
};




const login = async (req, res) => {

  const{email,password}={...req.body}
  if(!email ||!password){return res.json({msg:'please provide both values'})}
  const user=await usermodel.findOne({email}) 
 
  if(!user){return res.json({msg:'invalid email id'})}
  if(user.password!==password){return res.json({msg:'invalid password'})}
  res.setHeader('id',user._id)
  const newuser= {}

  newuser.name=user.name
  newuser.email=user.email
  newuser.phone=user.phone
  newuser.dateofbirth=user.dateofbirth


  
  res.json({user:user});
};







const sendotp =  (email) => {
  

  const randomNum = Math.random() * 9000;
  const token = Math.floor(1000 + randomNum);
  console.log(token);
  console.log(email);

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gowthammende7777@gmail.com",
      pass: "jvhk lmyv osom rbab",
    },
  });

  var mailOptions = {
    from: "gowthammende7777@gmail.com",
    to: email,
    subject: "Sending Email using Node.js",
    text: `That was easy! ${token}`,
  };

  const ans = transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  return token
};





const verifyotp=async(req,res)=>{

  const { name, email, phone, dateofbirth, password } = { ...req.body };
  console.log(req.headers);
  const otp=parseInt(req.headers.otp)
  
  console.log(token)
  console.log(otp)
  if(otp==token){
  const user=await usermodel.create({...req.body})

  res.setHeader('id',user._id)

    res.json({user});}
    else{
      res.json({msg:'wrong otp'})
    }
  

}


const getpassword=async(req,res)=>{
  const {email}={...req.body}
  const user=await usermodel.find({email})
  const password=user[0].password
  console.log(user[0].password);
  sendpassword({email,password})
  res.json({user})



}


const sendpassword =  ({email,password}) => {
  

  
  console.log(email);

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gowthammende7777@gmail.com",
      pass: "jvhk lmyv osom rbab",
    },
  });

  var mailOptions = {
    from: "gowthammende7777@gmail.com",
    to: email,
    subject: "Sending Email using Node.js",
    text: `this is  your password! ${password}`,
  };

  const ans = transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  return 
};
export { createuser, login, verifyotp,getpassword };
