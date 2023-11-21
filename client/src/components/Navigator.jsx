import React from 'react'
import { useglobalcontext } from '../context/Globalcontext'
import Login from './Login'
import Register from './Register'
const Navigator = () => {
    const{isuser}=useglobalcontext()

  return (
    <><div></div>
    {isuser && <Login/>}

    <div></div>
    {!isuser && <Register/>}
    
    </>
  )
}

export default Navigator