/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import "./style/registration.css";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

    const navigate = useNavigate();
  const params = useParams();
  const { authorizationToken } = useAuth();

  // ✅ Fetch single user data
  const getSingleUserData = async () => {
    try {
      const response = await fetch(`https://panel-station-backend.onrender.com/admin/user/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const userData = await response.json();
      setData(userData);
    } 
    catch (error) {
      toast.error("Error fetching user data", {
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
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://panel-station-backend.onrender.com/admin/user/update/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        // console.log("response from server : ", responseData);
        navigate("/admin/user");
        toast.success("User updated successfully", {
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
      } else {
        throw new Error("Update failed");
      }
    } 
    catch (error) {
      toast.error("Error during update", {
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
  };

  // ✅ Fetch user data on mount
  useEffect(() => {
    getSingleUserData();
  }, []);

  // ✅ Input handler
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img
                src="/images/register.png"
                alt="img"
                width="500px"
                height="500px"
              />
            </div>

            <div className="registration-form">
              <h1 className="main-heading">Update User Data</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username : </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter the username"
                    id="username"
                    required
                    value={data.username}
                    onChange={handleInput}
                  />
                </div>

                <div>
                  <label htmlFor="email">Email : </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    id="email"
                    required
                    value={data.email}
                    onChange={handleInput}
                  />
                </div>

                <div>
                  <label htmlFor="phone">Phone : </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Enter your phone number"
                    id="phone"
                    required
                    value={data.phone}
                    onChange={handleInput}
                  />
                </div>

                <br />
                <button type="submit" className="btn btn-submit">
                  Update Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
