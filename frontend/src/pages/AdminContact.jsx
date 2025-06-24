/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import "./style/AdminContact.css"
import { Bounce, toast } from "react-toastify";

export const AdminContact = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken } = useAuth();
  const URL = "http://localhost:5000/admin/contact";
  const getAllContacts = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log(data);
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactById= async(id)=>{
    try {
      const response = await fetch(`http://localhost:5000/admin/contact/delete/${id}`, {
        method:"DELETE",
        headers:{
          Authorization:authorizationToken,
        },
      })
      if(response.ok){
        getAllContacts();
        toast.success("Deleted successful", {
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
      }
      else{
        toast.error("error is AdminContact.jsx", {
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
      }
    } 
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllContacts();
  }, []);
  return (
    <>
      <section className="cls01">
        <h1 className="cls02">Contact Data</h1>
        <div className="cls03">
          {contactData.map((currEle, idx) => {
            const { username, email, message, _id } = currEle;
            return (
              <>
                <div key={idx} className="cls04">
                  <p className="cls05">{username}</p>
                  <p className="cls05">{email}</p>
                  <p className="cls05">{message}</p>
                  <button className="cls06" onClick={()=> deleteContactById(_id)}>Delete</button>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
