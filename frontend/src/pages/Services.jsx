import { NavLink } from "react-router-dom";
import "./style/services.css";

export const Services = () => {
  return (
    <main>
      <section className="services-section-hero">
        <div className="services-container grid grid-two-cols">
          <div className="services-hero-content">
            <h1>Our Services</h1>
            <p>
              We offer a wide range of IT services tailored to meet your
              business needs. Whether you need software development, IT
              infrastructure management, or consulting, we have the expertise
              to help you succeed.
            </p>
            <div className="services-btn-group">
              <NavLink to="/contact">
                <button className="primary-btn">Get in Touch</button>
              </NavLink>
            </div>
          </div>

          <div className="services-hero-image">
            <img src="/images/services.png" alt="services" width="500" height="500" />
          </div>
        </div>
      </section>

      <section className="services-list">
        <div className="services-container grid grid-three-cols">
          <div className="service-item">
            <h2>Software Development</h2>
            <p>
              Custom software solutions to streamline your business processes
              and enhance productivity. We create scalable and robust applications
              tailored to your needs.
            </p>
          </div>

          <div className="service-item">
            <h2>IT Infrastructure</h2>
            <p>
              Ensure your IT infrastructure is secure and optimized. From server
              management to network security, we handle it all.
            </p>
          </div>

          <div className="service-item">
            <h2>Consulting</h2>
            <p>
              Expert consulting services to help you make the right technology
              decisions and improve your overall business strategy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
