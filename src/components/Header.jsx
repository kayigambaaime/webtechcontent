import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* Notification or banner */}
      <div className="banner">Welcome to the CMS</div>

      {/* Navigation */}
      <nav>
        {/* Logo / Branding */}
        <div id="logo">
          <span>CMS</span> {/* CMS branding */}
        </div>

        {/* Main Navigation Links */}
        <ul className="navigation-menu">
          <li>
            <Link to="/">Dashboard</Link> {/* Links to the dashboard */}
          </li>
          <li>
            <Link to="/aboutus">About</Link> {/* Links to user management */}
          </li>
          <li>
            <Link to="/products">Manage Content</Link> {/* Links to content management */}
          </li>
          <li>
            <Link to="/contact">Contact</Link> {/* Links to settings */}
          </li>
        </ul>

        {/* Utility Buttons */}
        <div id="utility">
          <span className="user-info">Hello</span> {/* Display user info */}
          <Link to="/login" className="link-no-underline">
            <button className="/login">login</button> {/* Profile button */}
          </Link>
          <Link to="/register" className="link-no-underline">
            <button className="/register">Register</button> {/* Logout button */}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
