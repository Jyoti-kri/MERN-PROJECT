import { useState } from "react";
import { useAuth } from "../store/auth";
import { serverURL } from "../main";

export const Contact=()=>{

    const deafultContactForm={
        username:"",
        email:"",
        message:"",
    }


    /*const[contact, setContact]=useState({
        username:"",
        email:"",
        message:" ",
    }) */


    const[contact, setContact]=useState(deafultContactForm)


    const [userData, setuserData]=useState(true);


    const {user}=useAuth()

    if(userData && user){
        setContact({
            username:user.username,
            email:user.email,
            message:"",
        })

        setuserData(false);
    }

    const handleInput = (e) =>{
        const name=e.target.name;
        const value=e.target.value;

        setContact({
            ...contact,
            [name]:value,
        })
    }
       // we can also use this  to store previous data
    // setContact((prev) =>({
    //     ...prev,
    //     [name]:value,
    // }))

     const handleSubmit=async(e)=>{
        e.preventDefault();
        //alert(user)
        //console.log(contact)

        try{
            const res=await fetch(`${serverURL}/api/form/contact`,
                {
                    method:"POST",
                    headers:{
                        'Content-Type': "application/json"
                    },
                    body:JSON.stringify(contact),
                }
            )
            if(res.ok){
                setContact(deafultContactForm)
                const data=await res.json();
                console.log(data);
                alert("message sent successfully")
            }

        }catch(error){
            console.log(error)
        }
    }


    return (
        <>
        <section className="sec-contact">
            <div className="contact-content container">
                <h1 className="main-heading">Contact Us</h1>
            </div>

            <div className="container grid grid-two-cols">
                <div className="contact-img">
                    <img src="/images/contact.png" alt="We are always ready to help"  height="400"/>
                </div>
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
                             value={contact.username}
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
                             value={contact.email}
                             onChange={handleInput}
                             />
                        </div>

                        <div>
                            <label htmlFor="message">message</label>
                            <textarea
                             name="message"
                             id="message"
                             cols="30"
                             rows="6"
                             autoComplete="off"
                             required
                             value={contact.message}
                             onChange={handleInput}
                             ></textarea>
                        </div>
                        <div>
                            <button type="submit">submit</button>
                        </div>
                    </form>
                </section>
            </div>

            <section className="mb-3">
                <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.8025992319986!2d88.42144030000001!3d22.5864852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275bf8e8198df%3A0x23a3aed5f933f870!2sKarunamoyee%20Metro%20Station%2C%20Bidhannagar%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1750657140894!5m2!1sen!2sin"
                 width="100%"
                 height="450"
                 
                 allowfullscreen=""
                 loading="lazy"
                 referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

        </section>
        </>
    )
};