import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        {/* Updated Heading for CMS */}
        <br />
        <h1>Effortless Content Management at Your Fingertips</h1>
        <p>Streamline your content creation, user management, and analytics all in one place.</p>

        {/* Call-to-Actions */}
        <div className="cta-buttons">
          <Link to="/products" className="link-no-underline">
            <button className="button-52">Go to Dashboard</button>
          </Link>
          <Link to="/users" className="link-no-underline">
            <button className="button-52">Manage Users</button>
          </Link>
          <Link to="/content" className="link-no-underline">
            <button className="button-52">Manage Content</button>
          </Link>
        </div>
      </section>
      <br />
      <br /> <br /> <br />
    </div>
   
  );
};

export default Hero;
