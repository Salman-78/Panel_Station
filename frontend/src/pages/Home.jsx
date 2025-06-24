import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth"; 
import "./style/Home.css"

export const Home = () => {
  const { user, isLoggedIn } = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {isLoggedIn ? (
                <>
                  <p className="welcome-message">Welcome back, <strong>{user.username}</strong> 👋</p>
                </>
              ) : (
                <p>We are the World Best IT Company</p>
              )}
              <h1>Welcome to MERN Series</h1> 
              <p>
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Thapa Technical,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn">connect now</button>
                </NavLink>
                <NavLink to="/services">
                <button className="btn secondary-btn">learn more</button>
                </NavLink>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="500"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <div className="section-analytics">
        <div className="container grid grid-four-cols">
            <div className="div1">
              <h2>50+</h2>
              <p>Registered Companies</p>
            </div>
            <div className="div1">
              <h2>100,00</h2>
              <p>Happy Clients</p>
            </div>
            <div className="div1">
              <h2>500+</h2>
              <p>Well Known Devloper</p>
            </div>
            <div className="div1">
              <h2>24/7</h2>
              <p>Services</p>
            </div>
        </div>
      </div>
      {/* <Analytics /> */}


      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="500"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              lets discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group">
              <NavLink to="/contact">
                <button className="btn">connect now</button>
              </NavLink>
              <NavLink to="/services">
                <button className="btn secondary-btn">learn more</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};