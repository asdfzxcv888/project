import React,{useEffect} from 'react'
import { useglobalcontext } from '../context/Globalcontext'
import Navbar from './Navbar'
import '../assets/products.css'
const Products = () => {
  const{products,user,getmyproducts}=useglobalcontext()
  useEffect(()=>{if(user){getmyproducts()}},[user])
  return (
    <>
        <Navbar/>
        <div className='product-container'>{products.map((item)=><div key={item._id} className='product'>
          <div>name:{item.name}</div>
          <div>price:{item.price}</div>
          <div>discount:{item.discount}</div>
          <div>quantity:{item.quantity}</div>
          <div className='img-container'> <img src={`data:image/gif;base64,${item.image?item.image:''}`}></img>
</div>
          
          



        </div>)}</div>

    </>
  )
}

export default Products