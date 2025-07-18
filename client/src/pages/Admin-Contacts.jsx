import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify";
import { serverURL } from "../main";
//import { deleteContactById } from "../../../server/controllers/admin-controller";

export const AdminContacts=()=>{

    const [contactData, setContactData]=useState([]);

    const {authorizationToken}=useAuth();

    const getContactsData= async() =>{
        try{
            const response =await fetch(`${serverURL}/api/admin/contacts`,{
                method: "GET",
                headers:{
                    Authorization:authorizationToken,
                }
            })
            const data= await response.json();
            console.log("contact data:",data)
            if(response.ok){
               setContactData(data);
            }
        }catch(error){
            console.log(error)
        }
    }


    useEffect(()=>{
        getContactsData();
    },[])

    // function

    const deleteContactById= async(id) =>{
        try{
            const response=await fetch(`${serverURL}/api/admin/contacts/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:authorizationToken,
                }
            })
             if(response.ok){
                
                getContactsData();
                toast.success("deleted successfully")
             }else{
                 toast.error("Not  deleted")
             }
        }
        catch(error){
        console.log(err)
        }
    }

    return (
        <>
         <section className="admin-contacts-section">  

               <h1>Admin Conatct Data</h1>
        
        <div className="container admin-users">
            
                   {contactData.map((curContactData,idx)=>{
                    const {username, email,message,_id}=curContactData;
                    return(
                        <div key={idx}>
                            <p>{username}</p>
                            <p>{email}</p>
                            <p>{message}</p>
                            <button className="btn" onClick={()=> deleteContactById(_id)}>Delete</button>
                        </div>
                    )
                   })}
            

        </div>
    </section>
        
        </>
    )
}


{/*   {contactData.map((curContactData,idx)=>{
            return <p key={idx}>{curContactData.username}</p>
        })} */}