import React, { useState } from 'react';
import './Navbar.css';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
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
            <a href="#contact" className="desktop-contact">CONTACT</a>
            <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="mobile-menu-close" onClick={closeMenu}>✕</button>

            <div className="mobile-menu-links">
              <a href="#expertise" onClick={closeMenu}>EXPERTISE</a>
              <a href="#works" onClick={closeMenu}>WORKS</a>
              <a href="#philosophy" onClick={closeMenu}>PHILOSOPHY</a>
              <a href="#contact" onClick={closeMenu}>CONTACT</a>
            </div>
            
            <div className="mobile-menu-footer">
              <p>LET'S BUILD SOMETHING UNIQUE</p>
              <div className="mobile-socials">
                <a href="#">IG</a>
                <a href="#">GH</a>
                <a href="#">LI</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
