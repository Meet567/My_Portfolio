import React from "react";
import "./Navbar.css";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Skill from "./Skill";
import Contact from "./Contact";
import Footer from "./Footer";

function Navbar() {
  return (
    <div>
      <div id="home" className="navbar">
        <ul className="nav-item">
          <li>
            <a href="#home"> Home </a>
          </li>
          <li>
            <a href="#about"> About </a>
          </li>
          <li>
            <a href="#education"> Education </a>
          </li>
          <li>
            <a href="#skill">Skill</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <Home />
      <AboutMe />
      <Education />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}
export default Navbar;
