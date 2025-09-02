import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import algobreweryLogo from '../assets/algobreweryLogo_NoBg.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <img src={algobreweryLogo} alt="Algobrewery Logo" className="footer-logo-img" loading="lazy" decoding="async" />
              <span>ALGOBREWERY</span>
            </div>
            <p className="footer-description">
            At Algobrewery, we design and deliver intelligent systems that combine AI, automation, and modern web applications.<br/>
            Our focus is on building scalable, high-performance solutions that turn complex problems into seamless digital experiences. From smart AI agents and automated workflows to immersive web platforms and cloud-native infrastructure, we craft technology that’s both future ready and impactful.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>Services</h3>
            <ul className="footer-links">
              <li><Link to="/#services">AI Agents & Orchestration</Link></li>
              <li><Link to="/#services">Model Engineering</Link></li>
              <li><Link to="/#services">Conversational AI & Chatbots</Link></li>
              <li><Link to="/#services">Interactive Web & 3D Experiences</Link></li>
              <li><Link to="/#services">Cloud-Native & Data Infra</Link></li>
              <li><Link to="/#services">Web/Mobile Applications</Link></li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Company</h3>
            <ul className="footer-links">
              <li><Link to="/about-us">Culture</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Resources</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact-us">Let's Brew</Link></li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>hr@algobrewery.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 9618466316</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Algobrewery. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;


