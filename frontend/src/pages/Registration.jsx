import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import "./style/registration.css";
import { toast, Bounce } from "react-toastify";

export const Registration = () => {
  const URL="https://panel-station-backend.onrender.com/registration";
  const [user, setUer] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const {storeTokenInLS} = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUer({
      ...user,
      [name]: value,
    });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      // console.log("Response data : ", response);
      if (!response.ok) {
        toast.error("error is registration.jsx", {
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
      if (response.ok) {
        const responseData = await response.json();
        // console.log("response from server : ", responseData);
        storeTokenInLS(responseData.token);
        setUer({ username: "", email: "", phone: "", password: "" });
        // navigate("/login");
        navigate("/");
        toast.success("registration successful", {
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
    } catch (error) {
      console.error("Register Error ", error);
    }
  };
  return (
    <>
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
                <h1 className="main-heading">Registration form</h1>
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
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Email : </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your email"
                      id="email"
                      required
                      value={user.email}
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
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">Password : </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter the password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};


