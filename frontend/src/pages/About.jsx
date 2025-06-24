import { NavLink } from "react-router-dom";
import "./style/About.css"
export const About = () => {
  return (
    <>
      <main>
        <section className="about-section-hero">
          <div className="about-container grid grid-two-cols">
            <div className="about-hero-content">

              <h1>Why Choose Us? </h1>
              <p>
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
              </p>
              <p>
                Customization: We understand that every business is unique.
                Thats why we create solutions that are tailored to your specific
                needs and goals.
              </p>
              <p>
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
              <p>
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p>
                Reliability: Count on us to be there when you need us. We are
                committed to ensuring your IT environment is reliable and
                available 24/7.
              </p>
              <div className="about-btn-group">
                <NavLink to="/contact">
                  <button className="primary-btn"> Connect Now</button>
                </NavLink>
                <NavLink to="/services">
                <button className="secondary-btn">learn more</button>
                </NavLink>
              </div>
            </div>

            <div className="about-hero-image">
              <img
                src="/images/about.png"
                alt="about"
                width="500"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
      <div className="about-section-analytics">
        <div className="about-container grid grid-four-cols">
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
    </>
  );
};