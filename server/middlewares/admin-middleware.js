const adminMiddleware = async (req,res,next) =>{
    try{

        //console.log(req.user)
        const adminRole=req.user.isAdmin;
        console.log(adminRole)
        if(!adminRole){
            return res.status(403).json({message:"Access denied . user is nnot an admin"})
        } 
       // res.status(200).json({msg:req.user.isAdmin})

       next();
    }catch(error){
        next(error)
    }
}

module.exports=adminMiddleware;