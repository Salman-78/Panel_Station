import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  const { isLoggedIn } = useAuth();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Listen for window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
      if (window.innerWidth > 600) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ------------------------------
  // ✅ For Mobile Devices (<=600px)
  // ------------------------------
  if (isMobile) {
    return (
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">MERN_APP</NavLink>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={() => setMenuOpen(false)}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
            </li>

            {isLoggedIn ? (
              <>
                <li>
                  <NavLink to="/logout" onClick={() => setMenuOpen(false)}>
                    Logout
                  </NavLink>
                </li>
                <li>
                  <Link to="/admin/user">
                    <button
                      className="adminBtn"
                      onClick={() => setMenuOpen(false)}
                    >
                      Admin
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/registration"
                    onClick={() => setMenuOpen(false)}
                  >
                    Registration
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>
      </header>
    );
  }

  // ------------------------------
  // ✅ For Desktop Devices (>600px)
  // ------------------------------
  return (
    <header>
      <div className="container">
        <div className="logo-brand">
          <NavLink to="/">MERN_APP</NavLink>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>

            {isLoggedIn ? (
              <>
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
                <Link to="/admin/user">
                  <button className="adminBtn">Admin</button>
                </Link>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/registration">Registration</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>

        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};





// import { Link, NavLink } from "react-router-dom";
// import "./Navbar.css";
// import { useState } from "react";
// import { useAuth } from "../store/auth";

// export const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const { isLoggedIn } = useAuth();

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.body.classList.toggle("dark-mode");
//   };

//   return (
//     <>
//       <header>
//         <div className="container">
//           <div className="logo-brand">
//             <NavLink to="/">MERN_APP</NavLink>
//           </div>

//           <nav>
//             <ul>
//               <li>
//                 <NavLink to="/"> Home </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/about"> About </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/services"> Services </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/contact"> Contact </NavLink>
//               </li>

//               {isLoggedIn ? (
//                 <>
//                   <li>
//                     <NavLink to="/logout"> Logout </NavLink>
//                   </li>
//                   <Link to="/admin/user">
//                     <button className="adminBtn">Admin</button>
//                   </Link>
//                 </>
//               ) : (
//                 <>
//                   <li>
//                     <NavLink to="/registration"> Registration </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/login"> Login </NavLink>
//                   </li>
//                 </>
//               )}
//             </ul>
//           </nav>
//           <button onClick={toggleDarkMode} className="dark-mode-toggle">
//             {darkMode ? "Light Mode" : "Dark Mode"}
//           </button>
//         </div>
//       </header>
//     </>
//   );
// };
