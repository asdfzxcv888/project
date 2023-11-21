import Image from "../models/productimages.js";
import products from "../models/products.js";
import usermodel from "../models/user.js";




const createproduct=async(req,res)=>{
    const id=req.headers.id
    const userexists=await usermodel.findOne({_id:id})
    if(!userexists){
        return res.json({msg:'please login before you can access this link'})

    }
    
    let {name,quantity,price,discount,createdby}={...req.body}
    console.log(quantity);
    quantity=parseInt(quantity)
    price=parseInt(price)
    console.log(quantity);

    const product=await products.create({name,quantity,price,discount,createdby:id})
        res.json({product})
   // res.send('hi')
   

}

const getallproducts=async(req,res)=>{
    const allproducts=await products.find({})
    let newallproducts=allproducts.map((item)=>{const obj={}
obj._id=item._id
obj.name=item.name
obj.price=item.price
obj.discount=item.discount
obj.createdby=item.createdby
obj.quantity=item.quantity
return obj
})

    newallproducts=await Promise.all( newallproducts.map(async(item)=>{const image=await getimage(item._id)
    return{...item,image}
    }))
    console.log(newallproducts);


    newallproducts=newallproducts.map((item)=>{  return{...item,image :item.image?item.image.data.toString('base64'):null}
})
    
    console.log(newallproducts);

    res.json({allproducts:newallproducts})
}

const getfilteredproducts=async(req,res)=>{

    const {name}={...req.body}
    const re = new RegExp(name,"i");

    const filteredproducts=await products.find({name:re})
    res.json({filteredproducts})
    
}

const getmyproducts=async(req,res)=>{
    const{id}={...req.body}
    if(!id){return res.json({msg:'you cant access before login'})}
    const myproducts=await products.find({createdby:id})

    return res.json({myproducts})

}


const getimage=async(name)=>{
   const img= await Image.findOne({productname:name})
   return img
}


const editproduct=async(req,res)=>{
    const{id,name,quantity,price,discount}={...req.body}
    const product=await products.findOneAndUpdate({_id:id},{name,quantity,price,discount},{returnOriginal:false})
 
    res.json({product})
}


export {createproduct,getallproducts,getfilteredproducts,getmyproducts,getimage,editproduct}