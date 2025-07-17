import { useState } from "react";   // curly bracket only when we use export at initial
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify"
import { serverURL } from "../main";




export const Login=()=>{ 

    const[user,setUser]=useState({
        email:"",
        password:"",
    });

    const navigate=useNavigate();
    const {storetokenInLS}=useAuth();

    const handleInput=(e)=>{
        let name=e.target.name
        let value=e.target.value


        setUser({
            ...user,
            [name]:value,
        })
    }


    const handleSubmit= async (e) =>{
        e.preventDefault();
        console.log(user)

        //connect to backend

        try{

            const res= await fetch(`${serverURL}/api/auth/login`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user),
        })
         
        console.log("login form",res)

        const res_data=await res.json();
        if(res.ok){
           // alert("login successful")
            //const res_data=await res.json();
            storetokenInLS(res_data.token);
           
            setUser({ email:"",password:""})
            toast.success("login successfulll")
        
            navigate("/")
        }else{
            //alert("invalid credential")
            //alert(res_data.extraDetails?res_data.extraDetails:res_data.message);
            //console.log("Invalid credentials");

            //to use toast
            toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);
        }

        //console.log(res);

        }catch(error){
            
            console.log("lognnn",error)
        }

    }

    return(
     <>
    <section>
        <main>
            <div className="sec-regis">
                <div className="container grid grid-two-cols">
                    <div className="reg-img">
                        <img
                         src="/images/login.png"
                         alt="lets fill the login form"
                         width="300"
                         height="300"
                          />
                    </div>
                    <div className="regis-form">
                        <h1 className="main-heading mb-3">Login form</h1>
                        <br />
                        <form onSubmit={handleSubmit}>
                            
                                <div>
                                <label htmlFor="email">email</label>
                                <input
                                 type="email"
                                 name="email"
                                 
                                 placeholder="enter your email"
                                 id="email"
                                 required
                                 autoComplete="off"
                                 value={user.email}
                                 onChange={handleInput}
                                />
                            
                            </div>
                            
                            <div>
                                <label htmlFor="password">password</label>
                                <input
                                 type="password"
                                 name="password"
                                 
                                 placeholder="password"
                                 id="password"
                                 required
                                 autoComplete="off"
                                 value={user.password}
                                 onChange={handleInput}
                                />
                            
                            </div>
                            <br />
                            <button type="submit" className="btn-submit">
                                logged in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
    )
};