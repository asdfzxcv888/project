import React,{useState} from 'react'
import { useglobalcontext } from '../context/Globalcontext'
import {Navigate,useNavigate} from 'react-router-dom'

const Editproduct = ({id}) => {
    const{editproduct,updateproduct}=useglobalcontext()
    const navigate=useNavigate()
    if(!editproduct){
        return <Navigate to='/myproducts'></Navigate>
    }

    const[name,setname]=useState(editproduct.name)
  const[price,setprice]=useState(editproduct.price)

  const[quantity,setquantity]=useState(editproduct.quantity)

  const[discount,setdiscount]=useState(editproduct.discount)

  
  return (
   <> <div><label>name</label><input placeholder={editproduct.name} onChange={(e)=>setname(e.target.value)}></input></div>
       <div><label>quantity</label><input placeholder={editproduct.quantity} onChange={(e)=>setquantity(e.target.value)}></input></div>
       <div><label>price</label><input placeholder={editproduct.price} onChange={(e)=>setprice(e.target.value)}></input></div>
       <div><label>discount</label><input placeholder={editproduct.discount} onChange={(e)=>setdiscount(e.target.value)}></input></div>
       <button onClick={()=>{updateproduct({name,price,discount,quantity})
       navigate('/myproducts')
       
    
    
    }}>edit</button>
    




   
   
   
   </>
  )
}

export default Editproduct