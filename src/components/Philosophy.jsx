import React from 'react';
import './Philosophy.css';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section className="philosophy" id="philosophy">
      <div className="container philosophy-container">
        <h2 className="section-title fade-up">
          <span className="section-number">03 /</span> PHILOSOPHY
        </h2>
        
        <div className="philosophy-content">
          <motion.h3 
            className="philosophy-quote"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            "GOOD DESIGN IS <span className="text-outline">INVISIBLE.</span> GREAT CODE IS <span className="text-orange">INDISTINGUISHABLE</span> FROM MAGIC."
          </motion.h3>
          
          <motion.p 
            className="philosophy-desc"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I bridge the gap between imagination and execution. My work lives at the intersection of aesthetic precision and technical excellence, ensuring that every pixel has a purpose and every line of code serves the user.
          </motion.p>
        </div>
        
        <div className="watermark-bg">03</div>
      </div>
    </section>
  );
};

export default Philosophy;
