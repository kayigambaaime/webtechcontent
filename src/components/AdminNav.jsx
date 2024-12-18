import React from "react";
import "../styles/adminstyles.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ active, language, onLanguageChange }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    console.log("Logout");
  };

  return (
    <div className="navbar-wrapper">
      {/* Welcome Admin Message */}
      <div className="welcome-message">
        <span>Welcome to the Admin Dashboard</span>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <Link to="/admin" className="brand">
              <strong>CMS Admin Dashboard</strong>
            </Link>

            <div className="nav-links">
              <Link
                to="/usermgt"
                className={`nav-link ${active === "users" ? "active" : ""}`}
              >
                <i className="fas fa-users"></i>
                <span>Users</span>
              </Link>

              <Link
                to="/admin/notifications"
                className={`nav-link ${active === "notifications" ? "active" : ""}`}
              >
                <i className="fas fa-bell"></i>
                <span>Notifications</span>
              </Link>

              <Link
                to="/admin/user-role-stats"
                className={`nav-link ${active === "analytics" ? "active" : ""}`}
              >
                <i className="fas fa-chart-line"></i>
                <span>Analytics</span>
              </Link>
            </div>
          </div>

          <div className="navbar-right">
            <a className="dropdown-item" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
