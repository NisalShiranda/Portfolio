import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            className="hero-top-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="top-text-col">
              <strong>NS // WORKS</strong>
              <p>FOR AUTHENTICATION OF NS-WORKS DESIGN<br/>SUMMER COLLECTION AND DEVELOPMENT FOR<br/>DEEP WINTER</p>
            </div>
            <div className="top-text-col hidden-mobile">
              <p>FOR AUTHENTICATION OF NS-WORKS DESIGN<br/>SUMMER COLLECTION AND DEVELOPMENT FOR<br/>DEEP WINTER</p>
            </div>
          </motion.div>

          <motion.h1 
            className="hero-logo"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            NS.
          </motion.h1>
          
          <div className="hero-text-block">
            <span className="vertical-text">NS</span>
            <div className="hero-info">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                NISAL SHIRANDA —<br/>LINUX ENGINEER & FULL-<br/>STACK DEVELOPER
              </motion.h2>
              <motion.a 
                href="#works" 
                className="btn-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                VIEW WORK <span className="arrow">↓</span>
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="vertical-right-text">
            <span className="v-bold">NS-LAB</span>
            <span>MATERIALS</span>
            <span>OF CREATION</span>
          </div>

          <motion.div 
            className="orange-overlay"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <img src="/profile_portrait.png" alt="Nisal Shiranda" className="hero-image" />
          <div className="side-text">WEB DEVELOPER & UI DESIGNER</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
