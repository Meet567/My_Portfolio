import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const NavLinkCSS = ({ isActive }) => {
    return {
      color: isActive ? "orange" : "white",
      backgroundColor: isActive ? "#506270" : "#131921",
      borderRadius: isActive ? "5px" : "0px",
    };
  };

  return (
    <div>
      <div id="home" className="navbar">
        <ul className="nav-item">
          <li>
            <NavLink to="/" className="navbarlink" style={NavLinkCSS}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="about" className="navbarlink" style={NavLinkCSS}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="education" className="navbarlink" style={NavLinkCSS}>
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="skill" className="navbarlink" style={NavLinkCSS}>
              Skill
            </NavLink>
          </li>
          <li>
            <NavLink to="contact" className="navbarlink" style={NavLinkCSS}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
