import React from 'react';
import './Expertise.css';
import { motion } from 'framer-motion';

const Expertise = () => {
  const skills = [
    {
      title: "UI/UX & Web Dev",
      desc: "Creating intuitive, responsive web interfaces and seamless user experiences matching modern designs.",
      items: ["FIGMA / ADOBE XD", "HTML / CSS / JS", "TAILWIND / BOOTSTRAP"],
    },
    {
      title: "MERN Stack",
      desc: "Developing robust full-stack applications with high performance, secure APIs, and scalable databases.",
      items: ["MONGODB", "EXPRESS.JS", "REACT.JS / NODE.JS"],
    },
    {
      title: "Creative Design",
      desc: "Producing high-quality graphic assets and engaging video content to elevate brand identity and storytelling.",
      items: ["GRAPHIC DESIGN", "VIDEO EDITING", "ADOBE CREATIVE CLOUD"],
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
