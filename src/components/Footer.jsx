import { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    
  return (
    <footer>
      <NavLink to="/" className="logo">
        LOLFS
      </NavLink>
      <ul className={`nav-links`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </footer>
  );
}

export default Footer
