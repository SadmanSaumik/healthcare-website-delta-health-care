import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import "./Header.css";

const Header = () => {
  const { handleLogOut, user } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink to="/home" className="items">
          <img
            src="https://i.ibb.co/Tq2rYqw/medilab-logo-1024x241.png"
            alt=""
            width="180"
            height="auto"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <NavLink to="/home" className="items">
              <li>Home</li>
            </NavLink>
            <NavLink to="/telehelp" className="items">
              <li>Tele Help</li>
            </NavLink>
            <NavLink to="/appointment" className="items">
              <li>Appointment</li>
            </NavLink>
            <NavLink to="/register" className="items">
              <li>Register</li>
            </NavLink>
            {user.email ? (
              <li onClick={handleLogOut} className="items">
                Logout
              </li>
            ) : (
              <NavLink to="/login" className="items">
                <li>Login</li>
              </NavLink>
            )}
          </ul>
          <span className="navbar-text">{user?.email}</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
