const mongoose=require("mongoose")

//const URI="mongodb://127.0.0.1:27017/mern_admin"
//const URI="mongodb+srv://jyoti628627:jyoti2004@cluster0.5yelpuj.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0"

const URI=process.env.MONGODB_URI;

//mongoose.connect(URI);

const connectDb=async()=>{
    try{
        await mongoose.connect(URI)
        console.log('connection sucessfull to db')
    }
    catch(error){
        console.error("database connection failed ",error.message)
        process.exit(0)
    }
}

module.exports=connectDb