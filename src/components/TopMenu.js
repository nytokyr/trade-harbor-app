import React from "react";
import { Link } from "react-router-dom";

const TopMenu = ({ userName }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Trade Harbor
        </Link>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <a href="/logout" className="nav-link">
                Logout
              </a>
            </li>
          </ul>
        </div>

        {/* User Name Container */}
        {userName && (
          <div className="ml-auto">
            <span className="navbar-text username">{userName}</span>
          </div>
        )}
       
      </div>
    </nav>
  );
};

export default TopMenu;
