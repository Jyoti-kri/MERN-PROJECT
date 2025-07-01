//to verify json web token 

const jwt=require('jsonwebtoken')
const user=require("../models/user-model")

const authMiddleware=async(req,res,next)=>{
    const token=req.header('Authorization');

     if(!token){
        return res.status(401).json({message:"unauthorized HTTP, Token not provided heree"})
    }


    //console.log("token from auth middleware",token)
    const jwtToken=token.replace('Bearer','').trim();
    console.log("token from auth middleware",jwtToken)

    try{
         console.log("Secret Key:", process.env.JWT_SECRET_KEY); // Check if it's undefined
        const isVerified=  jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)
        console.log(" token verified",isVerified);

        const userData=await user.findOne({email:isVerified.email}).
        select({
            password:0,
        });
        console.log("user data are :",userData)

        req.user=userData;
        req.token=token;
        req.userID=userData._id;

        next();

    }catch(error){
         console.error("JWT verification error:", error.message);
        return res.status(401).json({message:"unauthorized Invalid token"})
    }

    
}


module.exports=authMiddleware;