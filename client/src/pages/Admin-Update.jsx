import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify"
import { serverURL } from "../main"


export const AdminUpdate=()=>{

    const[data,setData] =useState({
        username:"",
        email:"",
        phone:"",
    })

    const params=useParams();
    console.log("params single users:",params)
    const {authorizationToken}=useAuth();

    const navigate=useNavigate();

    //get single user data

    const getSingleUserData=async()=>{
        try{

            const response=await fetch(`${serverURL}/api/admin/users/${params.id}`,
                {
                    method:"GET",
                    headers:{
                        Authorization:authorizationToken
                    }
                }
            )
            const data=await response.json();
            console.log("users single data:", data)
            setData(data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getSingleUserData();
    },[])

     const handleInput = (e) =>{
        const name=e.target.name;
        const value=e.target.value;

        setData({
        ...data,
        [name]:value,
     })
    }

     

      const handleSubmit=async(e)=>{
        e.preventDefault();
        //alert(user)
        //console.log(contact)

        try{
            const response=await fetch(`${serverURL}/api/admin/users/update/${params.id}`,
                {
                    method:"PATCH",
                    headers:{
                        'Content-Type': "application/json",
                         Authorization:authorizationToken,
                    },
                    body:JSON.stringify(data),
                }
            )
            if(response.ok){
                toast.success("Updated successfully")
                 navigate("/admin/users");
            }else{
                toast.error("not updated")
            }

        }catch(error){
            console.log(error)
        }
    }


        

    return (
        <section className="sec-contact">
            <div className="contact-content container">
                <h1 className="main-heading">Edit user</h1>
            </div>

            <div className="container grid grid-two-cols">
                
                <section className="sec-form">
                    <form  onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">username</label>
                            <input
                             type="text"
                             name="username"
                             id="username"
                             autoComplete="off"
                             required
                             value={data.username}
                             onChange={handleInput}
                             />
                        </div>

                        <div>
                            <label htmlFor="email">email</label>
                            <input
                             type="email"
                             name="email"
                             id="email"
                             autoComplete="off"
                             required
                             value={data.email}
                             onChange={handleInput}
                             />
                        </div>

                        <div>
                            <label htmlFor="tel">Mobile</label>
                            <input
                             type="phone"
                             name="phone"
                             id="phone"
                             autoComplete="off"
                             required
                             value={data.phone}
                             onChange={handleInput}
                             />
                        </div>
                        <div>
                            <button type="submit">Update</button>
                        </div>
                    </form>
                </section>
            </div>

        </section>
    )
}