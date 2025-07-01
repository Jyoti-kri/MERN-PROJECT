const {z}=require("zod")

//to validate the login which was not validated before
const loginSchema=z.object({
    email: z
    .string({required_error:"email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3, { message: "email atleast of 3 characters"})
    .max(255, { message:"email not for than 255 characters"}),

     password: z
    .string({required_error:"Name is required"})
    .min(7, { message: "password atleast of 6 characters"})
    .max(1024, { message:"password not for than 1024 characters"}),


})  


//creating  an object schema 

//loginSchema.extend  in place of z.object if we cutt the email and password part but here we didn't cutt

const signupSchema=loginSchema.extend({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3, { message: "name atleast of 3 characters"})
    .max(255, { message:"name not for than 255 characters"}),

    /*email: z
    .string({required_error:"email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3, { message: "email atleast of 3 characters"}) 
    .max(255, { message:"email not for than 255 characters"}), */

    phone: z
    .string({required_error:"Name is required"})
    .trim()
    .min(10, { message: "phone atleast of 10 characters"})
    .max(20, { message:"phone not for than 20 characters"}),

    /*password: z
    .string({required_error:"Name is required"})
    .min(7, { message: "password atleast of 6 characters"})
    .max(1024, { message:"password not for than 1024 characters"}),  */
})

module.exports={signupSchema,loginSchema};
//module.exports=signupSchema;