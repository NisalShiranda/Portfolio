import React, { useState } from 'react';
import './SelectedWorks.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Figma, ExternalLink } from 'lucide-react';

// For Behance, we'll use a custom SVG since it's not in standard Lucide
const BehanceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 17.61c-1.15.54-2.39.75-3.6.75-3.37 0-5.49-2.2-5.49-5.18 0-3.08 2.06-5.4 5.39-5.4 3 0 5.16 2.05 5.16 5.25v.75h-7.64c.15 1.54 1.15 2.54 2.89 2.54 1.16 0 2.29-.3 3.31-.92l.3.96zm-5.4-5.69h4.34c-.11-1.39-1.01-2.25-2.2-2.25-1.25 0-2.03.86-2.14 2.25zM7.22 6.01c2.14 0 3.82 1.11 3.82 3.14 0 1.25-.66 2.19-1.81 2.66 1.48.42 2.37 1.51 2.37 3.09 0 2.39-1.89 3.47-4.14 3.47H2V6.01h5.22zm-2.24 4.88h1.99c1.02 0 1.5-.49 1.5-1.25s-.48-1.21-1.5-1.21H4.98v2.46zm0 5.06h2.24c1.16 0 1.76-.51 1.76-1.36 0-.91-.6-1.42-1.76-1.42H4.98v2.78zm13.42-10.45h4.12V6.82h-4.12v1.68z" />
  </svg>
);

const SelectedWorks = () => {
  const [filter, setFilter] = useState('UI/UX');

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    // UI/UX
    { id: 1, title: 'BRAND REDESIGN', subtitle: 'UI/UX • GRAPHIC DESIGN', category: 'UI/UX', image: '/ui1.png', description: 'Comprehensive brand identity redesign focused on minimalist aesthetics and modern typography.', links: { behance: '#', figma: '#', github: '#' } },
    { id: 2, title: 'MOBILE APP UI', subtitle: 'UI/UX • FIGMA PROTOTYPING', category: 'UI/UX', image: '/ui2.png', description: 'User-centric mobile application design with high-fidelity prototypes and fluid interactions.', links: { behance: '#', figma: '#', github: '#' } },
    { id: 3, title: 'FINTECH DASHBOARD', subtitle: 'UI/UX • USER RESEARCH', category: 'UI/UX', image: '/ui3.png', description: 'Data-intensive dashboard design focusing on clarity, accessibility, and intuitive data visualization.', links: { behance: '#', figma: '#', github: '#' } },
    { id: 4, title: 'HEALTHCARE PORTAL', subtitle: 'WIREFRAMES • FIGMA', category: 'UI/UX', image: '/ui4.png', description: 'Patient-facing portal design with a focus on ease of use and secure data management.', links: { behance: '#', figma: '#', github: '#' } },
    { id: 5, title: 'SAAS ONBOARDING', subtitle: 'UX FLOW • PROTOPIE', category: 'UI/UX', image: '/ui5.png', description: 'Optimized user onboarding experience to increase conversion rates and reduce user friction.', links: { behance: '#', figma: '#', github: '#' } },
    { id: 6, title: 'BOOKING PLATFORM', subtitle: 'HIGH-FIDELITY • UIKIT', category: 'UI/UX', image: '/ui6.png', description: 'Modern booking platform with integrated payment gateway and real-time availability tracking.', links: { behance: '#', figma: '#', github: '#' } },
    // WEB
    { id: 7, title: 'E-COMMERCE PLATFORM', subtitle: 'MERN STACK • REDUX', category: 'WEB', image: '/project_placeholder.png', description: 'Full-stack e-commerce solution with dynamic product management, cart functionality, and secure checkout.', links: { behance: '#', figma: '#', github: '#' } },
    { id: 8, title: 'ANALYTICS DASHBOARD', subtitle: 'REACT.JS • TAILWIND CSS', category: 'WEB', image: '/project_placeholder.png', description: 'Real-time analytics tool built with modern web technologies for performance and scalability.', links: { behance: '#', figma: '#', github: '#' } },
    { id: 9, title: 'REAL ESTATE PORTAL', subtitle: 'NEXT.JS • POSTGRESQL', category: 'WEB', image: '/project_placeholder.png', description: 'Advanced property search engine with geographical mapping and lead generation tools.', links: { behance: '#', figma: '#', github: '#' } },
    { id: 10, title: 'AGENCY WEBSITE', subtitle: 'VUE.JS • GSAP ANIMATIONS', category: 'WEB', image: '/project_placeholder.png', description: 'High-performance agency landing page with smooth parallax effects and interactive elements.', links: { behance: '#', figma: '#', github: '#' } },
    { id: 11, title: 'CRYPTO TRACKER', subtitle: 'REACT • WEBSOCKETS', category: 'WEB', image: '/project_placeholder.png', description: 'Live cryptocurrency market tracker with real-time price updates and historical data charts.', links: { behance: '#', figma: '#', github: '#' } },
    { id: 12, title: 'SAAS LANDING PAGE', subtitle: 'ASTRO • TAILWIND CSS', category: 'WEB', image: '/project_placeholder.png', description: 'Conversion-focused landing page for a SaaS platform with SEO optimization and fast load times.', links: { behance: '#', figma: '#', github: '#' } },
    // GRAPHICS
    { id: 13, title: 'CORPORATE BRANDING', subtitle: 'GRAPHIC DESIGN • ILLUSTRATOR', category: 'GRAPHICS', image: '/project_placeholder.png', description: 'Professional corporate identity packages encompassing all visual touchpoints of the brand.', links: { behance: '#', figma: '#', github: '#' } },
    { id: 14, title: 'SOCIAL MEDIA KIT', subtitle: 'PHOTOSHOP • ASSETS', category: 'GRAPHICS', image: '/project_placeholder.png', description: 'Cohesive set of social media templates and assets designed for consistent brand presence.', links: { behance: '#', figma: '#', github: '#' } },
    { id: 15, title: 'EVENT POSTERS', subtitle: 'TYPOGRAPHY • DESIGN', category: 'GRAPHICS', image: '/project_placeholder.png', description: 'Eye-catching event promotional materials with bold typography and creative layouts.', links: { behance: '#', figma: '#', github: '#' } },
    { id: 16, title: '3D PRODUCT RENDER', subtitle: 'BLENDER • 3D MODELING', category: 'GRAPHICS', image: '/project_placeholder.png', description: 'Photorealistic 3D product visualizations for marketing and digital commerce.', links: { behance: '#', figma: '#', github: '#' } },
    { id: 17, title: 'PACKAGING DESIGN', subtitle: 'PRINT READY • PACKAGING', category: 'GRAPHICS', image: '/project_placeholder.png', description: 'Modern packaging solutions that combine functionality with shelf-standout visual appeal.', links: { behance: '#', figma: '#', github: '#' } },
    { id: 18, title: 'LOGO COLLECTION', subtitle: 'VECTORS • ILLUSTRATOR', category: 'GRAPHICS', image: '/project_placeholder.png', description: 'A diverse collection of custom logo designs tailored to various industry sectors.', links: { behance: '#', figma: '#', github: '#' } },
    // VIDEO
    { id: 19, title: 'PROMO CAMPAIGN', subtitle: 'VIDEO EDITING • AFTER EFFECTS', category: 'VIDEO', image: '/project_placeholder.png', description: 'Engaging promotional videos with high-quality editing and dynamic motion graphics.', links: { behance: '#', figma: '#', github: '#' } },
    { id: 20, title: 'MOTION REEL', subtitle: 'PREMIERE PRO • MOTION', category: 'VIDEO', image: '/project_placeholder.png', description: 'Showcase reel featuring professional video editing and innovative transitions.', links: { behance: '#', figma: '#', github: '#' } },
    { id: 21, title: 'PRODUCT TEASER', subtitle: 'CINEMATOGRAPHY • COLOR', category: 'VIDEO', image: '/project_placeholder.png', description: 'High-end product teaser videos focusing on visual storytelling and cinematic atmosphere.', links: { behance: '#', figma: '#', github: '#' } },
    { id: 22, title: 'EXPLAINER ANIMATION', subtitle: 'AFTER EFFECTS • 2D ANIMATION', category: 'VIDEO', image: '/project_placeholder.png', description: 'Informative 2D animations that simplify complex concepts through visual storytelling.', links: { behance: '#', figma: '#', github: '#' } },
    { id: 23, title: 'DOCUMENTARY SHORT', subtitle: 'COLOR GRADING • DAVINCI', category: 'VIDEO', image: '/project_placeholder.png', description: 'Impactful short-form documentaries with professional color grading and sound design.', links: { behance: '#', figma: '#', github: '#' } },
    { id: 24, title: 'SOCIAL SHORTS', subtitle: 'TIKTOK/REELS • CAPCUT PRO', category: 'VIDEO', image: '/project_placeholder.png', description: 'Fast-paced, creative short-form content optimized for mobile social media platforms.', links: { behance: '#', figma: '#', github: '#' } },
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
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="work-img" />
                  ) : (
                    <span className="image-number">{project.id}</span>
                  )}
                </div>
                <div className="work-info">
                  <div>
                    <h3 className="work-title">{project.title}</h3>
                    <p className="work-subtitle">{project.subtitle}</p>
                  </div>
                  <button className="work-btn" onClick={() => setSelectedProject(project)}>→</button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
              <div className="modal-body">
                <div className="modal-image-wrapper">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
                <div className="modal-text">
                  <span className="modal-category">{selectedProject.category}</span>
                  <h2 className="modal-title">{selectedProject.title}</h2>
                  <p className="modal-desc">{selectedProject.description}</p>

                  <div className="modal-links">
                    {selectedProject.links?.behance && (
                      <a href={selectedProject.links.behance} target="_blank" rel="noopener noreferrer" className="modal-link-icon" title="View on Behance">
                        <BehanceIcon />
                      </a>
                    )}
                    {selectedProject.links?.figma && (
                      <a href={selectedProject.links.figma} target="_blank" rel="noopener noreferrer" className="modal-link-icon" title="View Figma Design">
                        <Figma size={20} />
                      </a>
                    )}
                    {selectedProject.links?.github && (
                      <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="modal-link-icon" title="View on GitHub">
                        <Github size={20} />
                      </a>
                    )}
                  </div>

                  <div className="modal-footer">
                    <strong>SUBTITLE // </strong> {selectedProject.subtitle}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SelectedWorks;
