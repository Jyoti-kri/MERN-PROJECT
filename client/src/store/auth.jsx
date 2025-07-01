import {createContext, useContext, useEffect, useState} from "react";

export const AuthContext=createContext();

export const AuthProvider=({children}) =>{

    const [token,setToken]=useState(localStorage.getItem('token'))
    const[user,setuser]=useState("")
    // to secure admin validation
    const[isLoading,setIsLoading]=useState(true)
    const[services,setServices]=useState("");
    const authorizationToken=`Bearer ${token}`;
 
    const storetokenInLS=(serverToken) =>{

        // prevent from regresff
        setToken(serverToken)  //for this part
        return localStorage.setItem('token',serverToken)
        
    };


    let isLoggedIn=!!token;
    console.log("islogginn",isLoggedIn)


    const LogoutUser=()=>{
        setToken("");
        return localStorage.removeItem('token')
    }

    // jwt authentication=to get the user data (curretly logged in user dtaa)

    const userAuthentucation= async() =>{
        try{

            setIsLoading(true);
            const response=await fetch("http://localhost:5000/api/auth/user",
                {
                    method:"GET",
                    headers:{
                        Authorization:authorizationToken,
                    }
            })

            if(response.ok){
                const data=await response.json();
                console.log("user data are:",data.userData)
                setuser(data.userData)
                setIsLoading(false)
            }else{
                console.error("Error fetching user data")
                setIsLoading(false);
            }

        }catch(error){
            console.error("Error fetching user data")
        }
    }


    // to fetch the serces data from database

    const  getServices= async(req,res) =>{
        try{
            const response= await fetch("http://localhost:5000/api/data/service",
                {
                    method:"GET",
                }
            )

            if(response.ok){
                const data=await response.json();
                console.log(data.msg)
                setServices(data.msg)
            }

        }catch(error){
            console.log(`services fronted error; ${error}`)
        }
    }

    useEffect(()=>{

        //for servicies files
        getServices();

        userAuthentucation();
    },[])

    return(
        <AuthContext.Provider value={{isLoggedIn,storetokenInLS,LogoutUser,user,services,authorizationToken,isLoading,}}>
        {children}
    </AuthContext.Provider>
    ) 
}


export const useAuth=()=>{
    const authContextValue= useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider")
    }
    return authContextValue;
}


