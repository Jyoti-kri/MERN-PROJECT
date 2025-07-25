require("dotenv").config()

const express= require("express");
const cors=require('cors')
const app=express();
const authRoute=require("./router/auth-router");
const contactRoute=require("./router/conatct-router")
const serviceRoute=require("./router/service-router")
const adminRoute=require('./router/admin-router')
const connectDb=require("./utils/db");
const errorMiddleware = require("./error-middleware");


//tackle corse before json
const corsOptions={
    origin:"https://mern-e-commerce-pf2r.onrender.com",
    methods:"GET,POST,DELETE,PATCH,HEAD",
    Credential:true,
}

app.use(cors(corsOptions))
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/form",contactRoute);
app.use("/api/data",serviceRoute);

// admin route 
app.use("/api/admin/", adminRoute)


app.use(errorMiddleware);

const PORT=5000;
connectDb().then(()=>{
    app.listen(PORT,()=>{
    console.log(`server is running at port: ${PORT}`)
});
})


















































/*

// used in server.js without router file 

app.get("/",(req,res)=>{
    res.status(200).send('Welcome to mern stack')
});

app.get("/register",(req,res)=>{
    res.status(200).send('Welcome to registeration page')
});*/
