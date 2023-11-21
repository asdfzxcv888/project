import express from 'express'
import { createproduct,getallproducts,getfilteredproducts,getmyproducts,getimage,editproduct } from '../controllers/products.js'

const app=express()

const router=express.Router()

router.post('/create',createproduct)
router.post('/allproducts',getallproducts)
router.post('/filter',getfilteredproducts)
router.post('/myproducts',getmyproducts)
router.post('/getimage',getimage)
router.post('/edit',editproduct)


export default router