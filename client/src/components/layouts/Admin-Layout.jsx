import { Navigate, NavLink, Outlet } from "react-router-dom"
import { FaUser } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { SiAmazonsimpleemailservice } from "react-icons/si"
import { IoHome } from "react-icons/io5";
import { useAuth } from "../../store/auth";

export const AdminLayout=()=>{
  const {user, isLoading}=useAuth(); 
  console.log("admin layout",user ) 
 
   if(isLoading){
        return <h1>Loading ....</h1>
    }

  if(!user.isAdmin){  // also block the admin

    return <Navigate to="/" />
  }

    return <>
    <header>
        <div className="container">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/admin/users"><FaUser />users</NavLink></li>
                    <li><NavLink to="/admin/contacts"><IoMdContact />contacts</NavLink></li>
                    <li><NavLink to="/service"><SiAmazonsimpleemailservice />service</NavLink></li>
                    <li><NavLink to="/"><IoHome />home</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
    <Outlet/>
    </>
}