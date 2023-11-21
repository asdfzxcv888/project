import React ,{useState} from 'react'
import { useglobalcontext } from '../context/Globalcontext'
import { Navigate,useNavigate } from 'react-router-dom'

const Addproduct = () => {
  const navigate=useNavigate()
  
  const[name,setname]=useState('')
  const[price,setprice]=useState('')

  const[quantity,setquantity]=useState('')

  const[discount,setdiscount]=useState('')
  const{user,addproduct}=useglobalcontext()

  if(!user){return <Navigate to='/'></Navigate>}

  return (
    <div>
        
    <div><label>name</label><input type='text' onChange={(e)=>setname(e.target.value)}></input></div>
    <div><label>quantity</label><input type='text' onChange={(e)=>setquantity(e.target.value)}></input></div>
    <div><label>price</label><input type='text' onChange={(e)=>setprice(e.target.value)}></input></div>
    <div><label>discount</label><input type='text' onChange={(e)=>setdiscount(e.target.value)}></input></div>
    <button onClick={()=>{addproduct({name,price,quantity,discount})
  navigate('/myproducts')
  }} >Add -This</button>
 

</div>
  )
}

export default Addproduct