import  { createContext,useContext,useReducer,useState,useEffect} from "react";

import reducer from "./reducer";
import axios from "axios"

const appcontext=createContext()

const Appprovider=({children})=>{
    const[isuser,setisuser]=useState(false)
    
    const initialstate={
        user:'',
        otp:false,
        products:[],
        myproducts:[],
        editproduct:null,
        msg:''
      
    }

    
    
    const [state,dispatch]=useReducer(reducer,initialstate)
    const toggleisuser=()=>{
        setisuser(!isuser)
    }
    const setotp=()=>{
        dispatch({type:'setotp'})
    }

    const register=async({name,email,password,phone,dateofbirth})=>{
        try {
            const response=await axios.post('http://localhost:5000/user',{name,email,password,phone,dateofbirth})
            console.log(response);
            const data=await response.data
            console.log(data)

            if(data.msg!=='please verify otp'){dispatch({type:'setmsg',payload:data.msg})
        return
        }
            
            setotp()
            getallproducts()
        } catch (error) {
                console.log(error);
        }

        

    }


    const verifyotp=async({name,email,password,phone,dateofbirth,otpvalue})=>{


        try {
            console.log('whatever');
            const response=await axios.post('http://localhost:5000/user/verify',{name,email,password,phone,dateofbirth},{headers:{'otp':`${otpvalue}`}})
            console.log(response);
            const data=await response.data
            console.log(data)
            if(data.msg){dispatch({type:'setmsg',payload:data.msg})
            return
            }
             
            
            if(data.user){
                dispatch({type:'setuser',payload:data.user})
            }
        } catch (error) {
                console.log(error);
        }

    }

    const login=async({email,password})=>{
        const response=await axios.post('http://localhost:5000/user/login',{email,password})
        const data=response.data
        console.log(data)
        if(data.user){
            dispatch({type:'setuser',payload:data.user})
        }
        if(data.msg){dispatch({type:'setmsg',payload:data.msg})}
        getallproducts()
    } 

    const getallproducts=async()=>{

        const response=await await axios.post('http://localhost:5000/products/allproducts')
        const data=response.data
        console.log(data);
        if(data.allproducts){dispatch({type:'setproducts',payload:data.allproducts})}
        

    }

    const getmyproducts=async()=>{

        const response= await axios.post('http://localhost:5000/products/myproducts',{id:state.user._id})
        const data=response.data
        console.log(data);
        if(data.myproducts){dispatch({type:'setmyproducts',payload:data.myproducts})}

        
    }

    const getfilteredproducts=async(arg)=>{
        console.log(arg);
        const response= await axios.post('http://localhost:5000/products/filter',{name:arg})
        const data=response.data
        console.log(data);
        if(data.filteredproducts){dispatch({type:'setproducts',payload:data.filteredproducts})}


    }

    const seteditproduct=(arg)=>{
        dispatch({type:'seteditproduct',payload:state.myproducts[arg]})
    }

    const addproduct=async({name,price,discount,quantity})=>{
        console.log('add fun');
        const response= await axios.post('http://localhost:5000/products/create',{name,price,discount,quantity},{headers:{'id':state.user._id}})
        const data=response.data
        console.log(data);
        getmyproducts()
        getallproducts()

0
    }
    const updateproduct=async({name,price,discount,quantity})=>{
        const response= await axios.post('http://localhost:5000/products/edit',{name,price,discount,quantity,id:state.editproduct._id})
        const data=response.data
        console.log(data);
        getmyproducts()

        getallproducts()
    }

    const getpassword=async({email})=>{
        const response= await axios.post('http://localhost:5000/user/getpassword',{email})
        const data=response.data
        console.log(data);

        
    }

    const logout=()=>{
        console.log('logout called');
        dispatch({type:'logout'})
    }

    useEffect(()=>{
    
    },[])

    



    


    

    return <appcontext.Provider value={{...state,logout,getpassword,toggleisuser,isuser,register,verifyotp,login,getmyproducts,getallproducts,getfilteredproducts,seteditproduct,addproduct,updateproduct}}>{children}</appcontext.Provider>

}

const useglobalcontext=()=>{
    return useContext(appcontext)
}

export {Appprovider,useglobalcontext}