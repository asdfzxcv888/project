const reducer=(state,action)=>{

    if(action.type==='setotp'){
        return {...state,otp:!(state.otp)}
    }
    if(action.type==='setuser'){
        return {...state,user:action.payload}
    }

    if(action.type==='setproducts'){
       return {...state,products:action.payload}
    }

    if(action.type==='setmyproducts'){
        return {...state,myproducts:action.payload}
     }

     if(action.type==='seteditproduct'){
        return {...state,editproduct:action.payload}
     }

     if(action.type==='setmsg'){
        return {...state,msg:action.payload}
     }
     if(action.type==='logout'){
        return {...state,user:null}
     }
 
    return {...state}

}

export default reducer