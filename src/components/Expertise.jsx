import React from 'react';
import './Expertise.css';
import { motion } from 'framer-motion';

const Expertise = () => {
  const skills = [
    {
      title: "UI/UX Design",
      desc: "Crafting immersive digital experiences with focus on user psychology, minimalist aesthetics, and fluid interactions.",
      items: ["FIGMA MASTERY", "MOTION DESIGN", "BRAND SYSTEM"],
    },
    {
      title: "Frontend",
      desc: "Translating design mockups into pixel-perfect, high-performance web applications using modern frameworks.",
      items: ["REACT / NEXT.JS", "TAILWIND CSS", "THREE.JS / WEBGL"],
    },
    {
      title: "Backend",
      desc: "Building robust architecture & database layout to power seamless user experiences with scalability and security.",
      items: ["NODE.JS / GO", "POSTGRESQL", "GRAPHQL APIs"],
    }
  ];

  return (
    <section className="expertise bg-dark" id="expertise">
      <div className="container expertise-container">
        <h2 className="section-title text-light fade-up">
          <span className="section-number">01 /</span> EXPERTISE
        </h2>
        
        <div className="watermark">01</div>
        
        <div className="expertise-grid">
          {skills.map((skill, index) => (
            <motion.div 
              className="expertise-card" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
              <ul className="skill-list">
                {skill.items.map((item, idx) => (
                  <li key={idx}><span className="bullet"></span> {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
