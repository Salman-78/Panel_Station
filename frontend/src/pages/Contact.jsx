import { useState } from "react";
import "./style/contact.css";
import { toast, Bounce } from "react-toastify";
import { useAuth } from "../store/auth";

const defaultForm={
  username:"",
  email:"",
  message:"",
}

export const Contact = () => {
  const URL = "http://localhost:5000/contact";
  const [contact, setContact] = useState(defaultForm);
  const [userData, setUserData]= useState(true);

  const {user}=useAuth();
  if(user && userData){
    setContact({
      username:user.username,
      email: user.email,
      message:"",
    })
    setUserData(false);
  }

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      })
      if (!response.ok) {
        toast.error("error is contact.jsx", {
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
        setContact(defaultForm);
        const responseData = await response.json();
        console.log(responseData);
        // alert("Message send successfully");
        toast.success("Message send successfully", {
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
  };
  return (
    <>
      <section>
        <main>
          <div className="section-contact">
            <div className="container grid grid-two-cols">
              <div className="contact-image">
                <img
                  src="/images/support.png"
                  alt="img"
                  width="500px"
                  height="500px"
                />
              </div>

              <div className="contact-form">
                <h1 className="main-heading">Contact Us</h1>
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
                      value={contact.username}
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
                      value={contact.email}
                      onChange={handleInput}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message">Message : </label>
                    <input
                      type="message"
                      name="message"
                      placeholder="Write your query"
                      id="message"
                      required
                      value={contact.message}
                      onChange={handleInput}
                      cols="30"
                      rows="6"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Submit Now
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
