import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/login.css'
import { useglobalcontext } from '../context/Globalcontext'
const Login = () => {
  const navigate=useNavigate()
    const {toggleisuser,login,user,getallproducts,msg}=useglobalcontext()
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')

    useEffect(()=>{if(user){
      navigate('/products')}},[user])




    
  return (
    <div className='form-container'>


    <form> 
    <div className='row'><label>email</label><input type='text' onChange={(e)=>setemail(e.target.value)}></input></div>
    <div className='row'><label>password</label><input type='password' onChange={(e)=>setpassword(e.target.value)}></input></div>

    <div className="button-container">

    <button type='button' onClick={()=>login({email,password})}>Login</button>
    <button type='button' onClick={toggleisuser}>not a user yet?</button>
    <div>{msg}</div>
    </div>

    



</form>





    </div>

  )
}

export default Login