/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import "./style/AdminUser.css";
import { toast, Bounce } from "react-toastify";
import { Link } from "react-router-dom";

export const AdminUser = () => {
  const [users, setUsers] = useState([]);

  // Assuming useAuth returns { token }
  const { authorizationToken } = useAuth();

  const URL = "http://localhost:5000/admin/user";

  const getAllUserData = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log(data);
      setUsers(data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  const deleteUser = async(id)=>{
    try {
      const response = await fetch(`http://localhost:5000/admin/user/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`user deleted: ${data}`)
      toast.success("User Deleted successful", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      if(response.ok){
        getAllUserData();
      }
    } catch (error) {
      console.log("Error deleting user data:", error);
    }
  }

  useEffect(() => {
    getAllUserData();
  }, []);

  return (
    <>
      <section className="admin-user-section">
        <div className="container">
          <h1>Admin User Data</h1>
        </div>
        <div className="container admin-user">
          <table>
            <thead>
              <tr>
                <th>UserName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((currUser, idx) => (
                <tr key={idx}>
                  <td>{currUser.username}</td>
                  <td>{currUser.email}</td>
                  <td>{currUser.phone}</td>

                  <td className="parent-btn">
                    <Link to={`/admin/user/${currUser._id}/edit`} className="edit-link">Edit</Link>
                  </td>
                  <td className="parent-btn"> 
                    <button className="btn" onClick={()=> deleteUser(currUser._id)} >Delete</button> 
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
