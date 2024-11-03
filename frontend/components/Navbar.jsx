// src/components/Navbar.jsx
// import React from 'react';
import '../css/Navbar.css'; // Import the CSS file for styling
import homeIcon from '../assets/home_icon.svg'; // Adjust the path to your home icon

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#hi" className="nav-link home-link">
        <img src={homeIcon} alt="Home" className="home-icon" />
      </a>
      <a href="#about" className="nav-link">About</a>
      <a href="#education" className="nav-link">Education</a>
      <a href="#experience" className="nav-link">Experience</a>
      <a href="#projects" className="nav-link">Projects</a>
      <a href="#resume" className="nav-link">Resume</a>
      <a href="#contact" className="nav-link">Contact Me</a>
    </nav>
  );
};

export default Navbar;
