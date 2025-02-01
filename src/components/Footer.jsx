import { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    
  return (
    <footer>
      <NavLink to="/" className="logo">
        <img src="/images/logo.png" alt="LOLFS logo"/>
      </NavLink>

      <h5>LOLFS is an online catalog of security tools.</h5>
      
      <ul className={`nav-links`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <hr/>
      
      <h5>© 2025 LOLFS. All Rights Reserved.</h5>
    </footer>
  );
}

export default Footer
