import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Service } from "./pages/Service"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import { Navbar } from "./components/Navbar"
import { Error } from "./pages/Error"
import { Footer } from "./components/Footer"
import { Logout } from "./pages/Logout"
import { AdminLayout } from "./components/layouts/Admin-Layout"
import { AdminUsers } from "./pages/Admin-Users"
import { AdminContacts } from "./pages/Admin-Contacts"
import { AdminUpdate } from "./pages/Admin-Update"

const App=()=>{
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="*" element={<Error/>} />
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="users" element={<AdminUsers/>}/>
          <Route path="users/:id/edit" element={<AdminUpdate />} />
          <Route path="contacts" element={<AdminContacts/>}/>
          
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  )

}



export default App

























































/*

const App=()=>{
  return <h1> this is  functiona; page</h1>
  }


function App() {
  

  return (
    <>
      <h1> this is our main page </h1>
    </>
  )
}


*/

