//home page
const User=require("../models/user-model")
const bcrypt = require("bcryptjs");





const home= async(req,res) =>{
    try{
    res
    .status(200)
    .send('Welcome to mern stack by router')

    } catch(error){
        console.log(error)
    }
};


//registeration page

const register=async(req,res) =>{
   try{
    //console.log(req.body)
    const {username,email,phone,password}=req.body

    const userExist =  await User.findOne({email})

    if(userExist){
        return res.status(400).json({message:"email already exists"})
    }
/*
    // hash the password

    const saltRound=10;
    const hash_password=await bcrypt.hash(password,saltRound)  */

    const userCreated=await User.create({
        username,
        email,
        phone,
        password
        //password:hash_password,
    });

    res
    .status(201)
    .json({
        msg:"register suceesfully",    //"regisertayopn sucessfull"  msg:userCreated
        token: await userCreated.generateToken(),
        userId:userCreated._id.toString(),

    })
    //.json({message : req.body})
   }catch(error){
    //console.log(error)
    //res.status(500).json("internal server regist error")
   
    next(error)
   }
};


const login= async(req,res)=> {
    try{
         console.log("BODY:", req.body);
        const {email,password} =req.body;

        const userExist= await User.findOne({email});
        //console.log(userExist)
        console.log("User:", userExist);

        if(!userExist){
            return res.status(400).json({message:"invalid email address "})
        }
/*
        console.log("Comparing password...");
        const isPasswordvalid=await bcrypt.compare(password, userExist.password)
        console.log("Password valid:", isPasswordvalid);  */

        const isPasswordvalid= await userExist.comparePassword(password)

        if(isPasswordvalid){
        res.status(200) .json({
        
       
        msg:"login sucessfully",
        token: await userExist.generateToken(),
        userId:userExist._id.toString(),

    })
        }else{
            res.status(401).json({message:"invalid email or password"})
        }

    } catch(error){
        console.error("Login Error:", error);
        res.status(500).json("internal serval login error")
    }
}


//user logic = to send user data 

const user= async(req,res)=>{
    try{
         const userData=req.user;
         console.log(userData)
         return res.status(200).json({userData})
        //res.status(200).json({msg:"hi user"})

    }catch(error){
        console.log(`error from the user route ${error}`)
    }
}


module.exports={home,register,login,user};









/*

const register=async(req,res) =>{
   try{
    console.log(req.body)
    const data=req.body
     res
    .status(200)
    .json({data})
    //.json({message : req.body})
   }catch(error){
    //console.log(error)
    res
    .status(400)
    .json({msg: "page not found"})
   }
};  */