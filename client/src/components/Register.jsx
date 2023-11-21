import React,{useEffect, useState} from 'react'
import { useglobalcontext, } from '../context/Globalcontext'
import{useNavigate} from 'react-router-dom'


const Register = () => {
  const navigate=useNavigate()
        const{toggleisuser,otp,register,verifyotp,user,getpassword,msg}=useglobalcontext()
        const[name,setname]=useState('')
        const[email,setemail]=useState('')
        const[password,setpassword]=useState('')

        const[phone,setphone]=useState('')

        const[dateofbirth,setdateofbirth]=useState('')
        const[otpvalue,setotpvalue]=useState('')
  useEffect(()=>{if(user){
    

    navigate('/products')}},[user])

        
  if(otp){
    return (<><div className='row'><label>otp</label><input type='text' onChange={(e)=>setotpvalue(e.target.value)}></input></div>
    <div className='button-container'><button onClick={()=>verifyotp({name,email,password,dateofbirth,phone,otpvalue})}>submit otp</button>
    <div>{msg}</div>

    </div></>)
  }
    


  return (
    <div className='form-container'>
    <form> 
    { <><div className='row'><label>name</label><input type='text' onChange={(e)=>setname(e.target.value)}></input></div>
    <div className='row'><label>email</label><input type='text'  onChange={(e)=>setemail(e.target.value)}></input></div>
    <div className='row'><label>phone</label><input type='text'  onChange={(e)=>setphone(e.target.value)}></input></div>
    <div className='row'><label>password</label><input type='password'  onChange={(e)=>setpassword(e.target.value)}></input></div>
    <div className='row'><label>dateofbirth</label><input type='date'  onChange={(e)=>setdateofbirth(e.target.value)}></input></div>

    <div className="button-container">

    <button type='button' onClick={()=>register({name,email,password,phone,dateofbirth})}>Register</button>
    <button type='button' onClick={toggleisuser}>already a user</button>
    <button type='button' onClick={()=>navigate('/forgot')}>forgot password </button>
    <div>{msg}</div>

    
    </div></>}
    

   



</form></div>
  )
}

export default Register