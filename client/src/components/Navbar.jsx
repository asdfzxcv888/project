import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useglobalcontext } from '../context/Globalcontext'

const Navbar = () => {
    const navigate=useNavigate()
    const{getfilteredproducts,logout}=useglobalcontext()
    const [search,setsearch]=useState('')


    const searchfun=()=>{
      getfilteredproducts(search)
    }

    useEffect(()=>{
      searchfun()

    },[search])
   
  return (
    <div  className='navbar'>
              <button className='nav-btn' onClick={()=>{navigate('/products')}}>All_PRODUCTS</button>

        <button className='nav-btn' onClick={()=>{logout()
        navigate('/')}}>LOG_OUT</button>
        <button className='nav-btn' onClick={()=>{navigate('/myproducts')}}>MY_PRODUCTS</button>
        <div className='searchdiv'><input type='text' className='searchbar' onChange={(e)=>setsearch(e.target.value)}></input><button className='search-btn'>search</button></div>


    </div>
  )
}

export default Navbar