const errorhandler=(err,req,res,next)=>{
    console.log('err middleware');
    console.log(err)
    res.json({msg:err.message})
    next()
}

export default errorhandler