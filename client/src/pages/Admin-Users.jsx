import { useEffect } from "react"
import { useAuth } from "../store/auth"
import { useState } from "react";
import {Link} from "react-router-dom"
import { serverURL } from "../main";

export const AdminUsers=()=>{
    const[users,setUsers]=useState([])

    const {authorizationToken}=useAuth();


    const getAllusers=async()=>{
        try{
            const response=await fetch(`${serverURL}/api/admin/users`,{
                method:"GET",
                headers:{
                    Authorization:authorizationToken,
                },
            })
                
            const data=await response.json();
            console.log(`users ${data}`)
            setUsers(data)
        }catch(error){
            console.log(error)
        }
    }

    // delete the user

    const deleteUser=async(id)=>{
       // console.log(id)
       try{
        const response=await fetch(`${serverURL}/api/admin/users/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:authorizationToken,
                },
            })
            const data=await response.json();
            console.log(`users after delete ${data}`)

            // to prevent from refreshing the page we use dependency of useEffect
            if(response.ok){
                getAllusers();
            }
       }catch(error){
        console.log(error)
       }
    }


    //edit the users

    useEffect(()=>{
        getAllusers();
    },[]);
    return<>
    <section className="admin-users-section">  
        <div className="container">
            <h1>Admin User Data</h1>
        </div>
        <div className="container admin-users">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((curUser,idx)=>{
                        return <tr key={idx}>
                            <td>{curUser.username}</td>
                            <td>{curUser.email}</td>
                            <td>{curUser.phone}</td>
                            <td>
                                <Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link>
                            </td>
                            <td>
                                <button onClick={()=> deleteUser(curUser._id)}>Delete</button>
                            </td>  
                        </tr>;//<h2 key={idx}>{curUser.username}</h2> ;
                })}
                </tbody>
            </table>
            

        </div>
    </section>
    
    </>
}