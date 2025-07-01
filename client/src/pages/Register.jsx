import { useReducer, useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

// cors helps to run at same domain 5173 5000

export const Register=()=>{


    const [user, setUser]=useState({
        username:"",
        email:"",
        phone:"",
        password:"",
    });

   


    const navigate=useNavigate();

    const {storetokenInLS}=useAuth();

    const handleInput=(e)=>{
        console.log(e)
        let name=e.target.name;
        let value=e.target.value;

        setUser({
            ...user,
            [name]:value,
        })
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();
        //alert(user)
        console.log(user)

        //connect to mongoDb and backend
        try{

            const response= await fetch(`http://localhost:5000/api/auth/register`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user),
        })


        const res_data=await response.json();
        console.log('res from server',res_data.extraDetails);

        //console.log(response);

        if(response.ok){
            // const res_data=await response.json();
            // console.log('res from server',res_data);
            storetokenInLS(res_data.token);
            //localStorage.setItem("token",res_data)
            setUser({username:"", email:"",phone:"",password:"",})

            toast.success("registeration successfulll")
        
            //navigate("/login")
            navigate('/')
        
        

        }else{
           // alert("not a valid registerartion")
           // alert(res_data.extraDetails?res_data.extraDetails:res_data.message);
           toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);
        }

        // console.log(response);

        }catch(error){
            console.log("register",error)
        }
        
    }




    return (
     <>
    <section>
        <main>
            <div className="sec-regis">
                <div className="ccontainer grid grid-two-cols">
                    <div className="reg-img">
                        <img
                         src="/images/regi.png"
                         alt="trying to fill registeration ppage"
                         width="300"
                         height="400"
                          />
                    </div>
                    <div className="regis-form">
                        <h1 className="main-heading mb-3">registeration form</h1>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input
                                 type="text"
                                 name="username"
                                 placeholder="username"
                                 id="username"
                                 required
                                 autoComplete="off"
                                 value={user.username}
                                 onChange={handleInput}
                                />
                            </div>
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
                                <label htmlFor="phone">phone</label>
                                <input
                                 type="number"
                                 name="phone"
                                 
                                 placeholder="phone"
                                 id="phone"
                                 required
                                 autoComplete="off"
                                 value={user.phone}
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
                                Register Now
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











//return <h1> hello this is register page</h1>