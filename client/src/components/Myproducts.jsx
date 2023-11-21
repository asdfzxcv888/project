import React from 'react'
import { useglobalcontext } from '../context/Globalcontext'
import { useNavigate,Navigate } from 'react-router-dom'
import Navbar from './Navbar'


const Myproducts = () => {
    const{user,myproducts,seteditproduct}=useglobalcontext()
    const navigate=useNavigate()
    if(user){

  return (<>
   <div>Myproducts</div>
    <Navbar/>
    <div className='product-container'>{myproducts.map((item,index)=><div key={index} className='product'>
    <div>name:{item.name}</div>
          <div>price:{item.price}</div>
          <div>discount:{item.discount}</div>
          <div>quantity:{item.quantity}</div>
          <div className='img-container'> <img src={`data:image/gif;base64,${item.image?item.image:''}`}></img>
</div>

    <div><button onClick={()=>{seteditproduct(index)
    navigate('/edit')
    }}>edit</button></div>
          <div><button onClick={()=>{
            seteditproduct(index)
            navigate('/imageupload')}}>upload</button></div>
         

    </div>)}<button onClick={()=>navigate('/add')}>Add-product</button></div>
     </>
  )}

  else{
    return <Navigate to='/'></Navigate>

  }
}

export default Myproducts