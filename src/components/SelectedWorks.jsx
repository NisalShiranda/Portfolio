import React from 'react';
import './SelectedWorks.css';
import { motion } from 'framer-motion';

const SelectedWorks = () => {
  const projects = [
    { id: 1, title: 'NOTJECT 1', subtitle: 'WEB DESIGN • FIGMA', class: 'card-wide' },
    { id: 2, title: 'PROJECT 2', subtitle: 'BRAND IDENTITY', class: 'card-tall' },
    { id: 3, title: 'AETHER OS', subtitle: 'REACT JS • FRAMER MOTION • WEBGL', class: 'card-tall' },
    { id: 4, title: 'VOID ANALYTICS', subtitle: 'UI/UX • DASHBOARD • POSTGRES', class: 'card-wide' },
  ];

  return (
    <section className="works" id="works">
      <div className="container works-container">
        <h2 className="section-title fade-up text-primary">
          <span className="section-number">02 /</span> SELECTED WORKS
        </h2>

        <div className="works-filter">
          <button className="active">ALL</button>
          <button>UI/UX</button>
          <button>WEB</button>
          <button>SYSTEMS</button>
          <button>LOGOS</button>
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
