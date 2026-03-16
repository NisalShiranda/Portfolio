import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container contact-container">
        <div className="contact-info">
          <h2 className="section-title fade-up">
            <span className="section-number">04 /</span> LET'S CONNECT
          </h2>
          <p className="contact-desc fade-up">
            Currently available for select freelance opportunities and creative collaborations.
          </p>
          
          <div className="contact-email fade-up">
            <a href="mailto:hello@nisal.me" className="email-link">hello@nisal.me</a>
          </div>
          
          <div className="contact-socials fade-up">
            <a href="#">INSTAGRAM</a>
            <a href="#">GITHUB</a>
            <a href="#">LINKEDIN</a>
          </div>
        </div>
        
        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">YOUR NAME</label>
              <input type="text" id="name" placeholder="John Doe" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input type="email" id="email" placeholder="john@example.com" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">PROJECT DETAILS</label>
              <textarea id="message" rows="4" placeholder="Tell me about your project..."></textarea>
            </div>
            
            <button type="submit" className="submit-btn">SEND MESSAGE</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
