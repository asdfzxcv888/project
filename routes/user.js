import  express  from "express";
import { createuser,login,verifyotp,getpassword } from "../controllers/user.js";
createuser
const router=express.Router()

router.post('/',createuser)
router.post('/login',login)
router.post('/verify',verifyotp)
router.post('/getpassword',getpassword)



export default router