import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">NS.</div>
        <div className="footer-copy">
          © 2026 NISAL SHIRANDA. ALL RIGHTS RESERVED.
        </div>
        <div className="footer-status">
          <span className="status-dot"></span> AVAILABLE FOR WORK
        </div>
      </div>
    </footer>
  );
};

export default Footer;
