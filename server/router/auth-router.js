const express=require("express");
const router=express.Router();
const authController=require('../controllers/auth-controller')
const {signupSchema,loginSchema}=require("../validators/auth-validator")
//const signupSchema=require("../validators/auth-validator")
const validate=require("../middlewares/validate-middleware")
const authMiddleware=require("../middlewares/auth-middleware")

router.route("/").get(authController.home);
router.route('/register').post(validate(signupSchema), authController.register);
router.route('/login').post(validate(loginSchema), authController.login); //



// get the data 

router.route('/user').get(authMiddleware, authController.user)

module.exports=router;




































/*
// this is method used without controller
// post put delete  method used  in chaining way

router.route('/register').get((req,res) =>{
    res
    .status(200)
    .send("this is registeration page  ")
})


*/



/*
router.get("/",(req,res)=>{
    res.status(200).send('Welcome to mern stack by router')
}); */



/*

const {home, register}=require('../controllers/auth-controller')

router.route("/").get(home);

*/

