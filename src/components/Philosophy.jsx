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
            "DEVELOPING <span className="text-outline">SCALABLE</span> LOGIC. DESIGNING <span className="text-orange">ENGAGING</span> EXPERIENCES."
          </motion.h3>
          
          <motion.p 
            className="philosophy-desc"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I am a multi-disciplinary creator bridging the gap between technical execution and visual storytelling. Whether building robust MERN stack applications, designing intuitive UI/UX, or producing compelling video and graphic edits, I strive for excellence in every medium.
          </motion.p>
        </div>
        
        <div className="watermark-bg">03</div>
      </div>
    </section>
  );
};

export default Philosophy;
