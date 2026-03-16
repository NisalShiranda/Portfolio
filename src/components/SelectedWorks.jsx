import React, { useState } from 'react';
import './SelectedWorks.css';
import { motion, AnimatePresence } from 'framer-motion';

const SelectedWorks = () => {
  const [filter, setFilter] = useState('UI/UX');

  const projects = [
    // UI/UX
    { id: 1, title: 'BRAND REDESIGN', subtitle: 'UI/UX • GRAPHIC DESIGN', category: 'UI/UX' },
    { id: 2, title: 'MOBILE APP UI', subtitle: 'UI/UX • FIGMA PROTOTYPING', category: 'UI/UX' },
    { id: 3, title: 'FINTECH DASHBOARD', subtitle: 'UI/UX • USER RESEARCH', category: 'UI/UX' },
    { id: 4, title: 'HEALTHCARE PORTAL', subtitle: 'WIREFRAMES • FIGMA', category: 'UI/UX' },
    { id: 5, title: 'SAAS ONBOARDING', subtitle: 'UX FLOW • PROTOPIE', category: 'UI/UX' },
    { id: 6, title: 'BOOKING PLATFORM', subtitle: 'HIGH-FIDELITY • UIKIT', category: 'UI/UX' },
    // WEB
    { id: 7, title: 'E-COMMERCE PLATFORM', subtitle: 'MERN STACK • REDUX', category: 'WEB' },
    { id: 8, title: 'ANALYTICS DASHBOARD', subtitle: 'REACT.JS • TAILWIND CSS', category: 'WEB' },
    { id: 9, title: 'REAL ESTATE PORTAL', subtitle: 'NEXT.JS • POSTGRESQL', category: 'WEB' },
    { id: 10, title: 'AGENCY WEBSITE', subtitle: 'VUE.JS • GSAP ANIMATIONS', category: 'WEB' },
    { id: 11, title: 'CRYPTO TRACKER', subtitle: 'REACT • WEBSOCKETS', category: 'WEB' },
    { id: 12, title: 'SAAS LANDING PAGE', subtitle: 'ASTRO • TAILWIND CSS', category: 'WEB' },
    // GRAPHICS
    { id: 13, title: 'CORPORATE BRANDING', subtitle: 'GRAPHIC DESIGN • ILLUSTRATOR', category: 'GRAPHICS' },
    { id: 14, title: 'SOCIAL MEDIA KIT', subtitle: 'PHOTOSHOP • ASSETS', category: 'GRAPHICS' },
    { id: 15, title: 'EVENT POSTERS', subtitle: 'TYPOGRAPHY • DESIGN', category: 'GRAPHICS' },
    { id: 16, title: '3D PRODUCT RENDER', subtitle: 'BLENDER • 3D MODELING', category: 'GRAPHICS' },
    { id: 17, title: 'PACKAGING DESIGN', subtitle: 'PRINT READY • PACKAGING', category: 'GRAPHICS' },
    { id: 18, title: 'LOGO COLLECTION', subtitle: 'VECTORS • ILLUSTRATOR', category: 'GRAPHICS' },
    // VIDEO
    { id: 19, title: 'PROMO CAMPAIGN', subtitle: 'VIDEO EDITING • AFTER EFFECTS', category: 'VIDEO' },
    { id: 20, title: 'MOTION REEL', subtitle: 'PREMIERE PRO • MOTION', category: 'VIDEO' },
    { id: 21, title: 'PRODUCT TEASER', subtitle: 'CINEMATOGRAPHY • COLOR', category: 'VIDEO' },
    { id: 22, title: 'EXPLAINER ANIMATION', subtitle: 'AFTER EFFECTS • 2D ANIMATION', category: 'VIDEO' },
    { id: 23, title: 'DOCUMENTARY SHORT', subtitle: 'COLOR GRADING • DAVINCI', category: 'VIDEO' },
    { id: 24, title: 'SOCIAL SHORTS', subtitle: 'TIKTOK/REELS • CAPCUT PRO', category: 'VIDEO' },
  ];

  const categories = ['UI/UX', 'WEB', 'GRAPHICS', 'VIDEO'];

  const filteredProjects = projects.filter(project => project.category === filter);

  return (
    <section className="works" id="works">
      <div className="container works-container">
        <h2 className="section-title fade-up text-primary">
          <span className="section-number">02 /</span> SELECTED WORKS
        </h2>

        <div className="works-filter">
          {categories.map(cat => (
            <button 
              key={cat}
              className={filter === cat ? "active" : ""}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="works-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                className="work-card"
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
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
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWorks;
