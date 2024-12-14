import '../navbar.css';
import MyImage from '../assets/images/newlogo.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={MyImage} alt="logo-image" className="logo-image" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-links-container ${isOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
          <li><Link to="/Home" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/Skills" onClick={closeMenu}>Skills</Link></li>
          <li><Link to="/Projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/Testimonials" onClick={closeMenu}>Testimonials</Link></li>
          <li><Link to="/Contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
