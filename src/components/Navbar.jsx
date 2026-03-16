import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          NS.
        </div>
        <div className="nav-links">
          <a href="#expertise">EXPERTISE</a>
          <a href="#works">WORKS</a>
          <a href="#philosophy">PHILOSOPHY</a>
        </div>
        <div className="nav-contact">
          <a href="#contact">CONTACT</a>
          <div className="menu-icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
