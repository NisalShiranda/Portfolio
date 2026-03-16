import React from 'react';
import './SelectedWorks.css';
import { motion } from 'framer-motion';

const SelectedWorks = () => {
  const projects = [
    { id: 1, title: 'E-COMMERCE PLATFORM', subtitle: 'MERN STACK • REDUX', class: 'card-wide' },
    { id: 2, title: 'BRAND REDESIGN', subtitle: 'UI/UX • GRAPHIC DESIGN', class: 'card-tall' },
    { id: 3, title: 'PROMO CAMPAIGN', subtitle: 'VIDEO EDITING • AFTER EFFECTS', class: 'card-tall' },
    { id: 4, title: 'ANALYTICS DASHBOARD', subtitle: 'REACT.JS • TAILWIND CSS', class: 'card-wide' },
  ];

  return (
    <section className="works" id="works">
      <div className="container works-container">
        <h2 className="section-title fade-up text-primary">
          <span className="section-number">02 /</span> SELECTED WORKS
        </h2>

        <div className="works-filter">
          <button className="active">ALL</button>
          <button>MERN STACK</button>
          <button>UI/UX</button>
          <button>GRAPHICS</button>
          <button>VIDEO</button>
        </div>

        <div className="works-grid">
          {projects.map((project, index) => (
            <motion.div 
              className={`work-card ${project.class}`} 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="work-image-placeholder">
                <span className="image-number">{project.id}</span>
              </div>
              <div className="work-info">
                <div>
                  <h3 className="work-title">{project.title}</h3>
                  <p className="work-subtitle">{project.subtitle}</p>
                </div>
                <button className="work-btn">→</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
