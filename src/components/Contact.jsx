import React, { useState } from 'react';
import './Contact.css';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mqakppov', { // Replace with your Formspree ID later
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

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
            <a href="mailto:nisalshiranda001@gmail.com" className="email-link">hello@nisal.me</a>
          </div>

          <div className="contact-phone fade-up">
            <span>+94711543730 | +94721523730</span>
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
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                key="success"
                className="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <h3>THANK YOU!</h3>
                <p>Your message has been sent successfully. I'll get back to you shortly.</p>
                <button className="reset-btn" onClick={() => setStatus('')}>SEND ANOTHER</button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                className="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="form-group">
                  <label htmlFor="name">YOUR NAME</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">PROJECT DETAILS</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    placeholder="Tell me about your project..." 
                    required 
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="error-text">Something went wrong. Please try again.</p>
                )}

                <button 
                  type="submit" 
                  className="submit-btn" 
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
