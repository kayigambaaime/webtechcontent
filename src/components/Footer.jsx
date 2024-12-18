import React from "react";
import "../styles/styles.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer bg ">
        <p className="footer__text">
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/ashimwe-cedrick"
            target="_blank"
            rel="noopener"
          >
            Kayigamba Dukunde Aime
          </a>{" "}
          &copy; 2024 Your content management system 
        </p>
      </footer>
    </div>
  );
};

export default Footer;
