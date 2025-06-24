import { Navigate, NavLink, Outlet } from "react-router-dom"
import { FaHome } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useAuth } from "../../store/auth";

export const AdminLayout = () => {
  const {user, isLoading}=useAuth();
  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(!user.isAdmin){
    return <Navigate to="/" />;
  }
  
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li>
              <NavLink to="/admin/user"><FaUser/> Users</NavLink>
            </li>
            <li>
              <NavLink to="/admin/contact"><MdContacts/> Contacts</NavLink>
            </li>
            <li>
              <NavLink to="/"><FaHome/> Home</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet/>
    </header>
  )
}

