import { useState } from 'react'
import React from 'react'
import { useglobalcontext } from '../context/Globalcontext'

const Forgot = () => {
    const[email,setemail]=useState('')
    const{getpassword}=useglobalcontext()
  return (
    <div><label>enter your mail</label><input type='text' onChange={(e)=>setemail(e.target.value)}></input>
    
    <button onClick={()=>getpassword({email})}>get password</button></div>
  )
}

export default Forgot