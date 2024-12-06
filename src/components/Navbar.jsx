import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] =useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? 'auto' : 'hidden'; 
    }
    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    };
    
    return (
        <>
          <nav className={`navbar ${isOpen ? "menu-open" : ""}`}>
            <NavLink to="/" className="logo">
              LOLFS
            </NavLink>
            <div className="menu-icon" onClick={toggleMenu}>
              <div className={`bar bar1 ${isOpen ? "toggle" : ""}`}></div>
              <div className={`bar bar2 ${isOpen ? "toggle" : ""}`}></div>
              <div className={`bar bar3 ${isOpen ? "toggle" : ""}`}></div>
            </div>
            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
              <li>
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            {isOpen && <div className="overlay" onClick={closeMenu}></div>}
          </nav>
        </>
      );
}

export default Navbar
