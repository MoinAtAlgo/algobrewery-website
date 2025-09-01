import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Globe, Zap } from 'lucide-react';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// 3D Floating Contact Elements Component
const FloatingContactElements = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      
      <Float speed={1.8} rotationIntensity={0.7} floatIntensity={0.6}>
        <mesh position={[-2.5, 1.5, 0]} rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#00ff88" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <Float speed={2.2} rotationIntensity={0.6} floatIntensity={0.7}>
        <mesh position={[2.5, -1.5, 0]} rotation={[-0.3, 0.8, 0.2]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#ff0088" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <Float speed={1.6} rotationIntensity={0.8} floatIntensity={0.5}>
        <mesh position={[0, 2.5, -1]} rotation={[0.2, -0.5, 0.7]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#0088ff" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <Float speed={2.4} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh position={[-1.8, -2, 0]} rotation={[0.8, -0.2, 0.4]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#ffaa00" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <Float speed={1.9} rotationIntensity={0.9} floatIntensity={0.4}>
        <mesh position={[1.8, -2, 0]} rotation={[-0.6, 0.3, 0.9]}>
          <boxGeometry args={[0.35, 0.35, 0.35]} />
          <meshStandardMaterial color="#00ccff" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
    </Canvas>
  );
};

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Remove all non-digit characters and check for exactly 10 digits
    const digitsOnly = phone.replace(/\D/g, '');
    return digitsOnly.length === 10;
  };

  const validateName = (name) => {
    // Only alphabets, spaces, and hyphens allowed
    const nameRegex = /^[a-zA-Z\s\-]+$/;
    return nameRegex.test(name.trim());
  };

  const validateRequired = (value, fieldName) => {
    if (!value || value.trim() === '') {
      return `${fieldName} is required`;
    }
    return null;
  };

  const validateForm = () => {
    const newErrors = {};

    // Required field validations
    const firstNameError = validateRequired(formData.firstName, 'First Name');
    if (firstNameError) {
      newErrors.firstName = firstNameError;
    } else if (!validateName(formData.firstName)) {
      newErrors.firstName = 'First name should only contain alphabets, spaces, and hyphens. Example: John or Mary-Jane';
    }

    const lastNameError = validateRequired(formData.lastName, 'Last Name');
    if (lastNameError) {
      newErrors.lastName = lastNameError;
    } else if (!validateName(formData.lastName)) {
      newErrors.lastName = 'Last name should only contain alphabets, spaces, and hyphens. Example: Smith or O\'Connor';
    }

    const emailError = validateRequired(formData.email, 'Email');
    if (emailError) {
      newErrors.email = emailError;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address. Example: john.doe@company.com';
    }

    const phoneError = validateRequired(formData.phone, 'Phone');
    if (phoneError) {
      newErrors.phone = phoneError;
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits. Example: 9876543210';
    }

    const companyError = validateRequired(formData.company, 'Company');
    if (companyError) newErrors.company = companyError;

    const projectTypeError = validateRequired(formData.projectType, 'Project Type');
    if (projectTypeError) newErrors.projectType = projectTypeError;

    const messageError = validateRequired(formData.message, 'Message');
    if (messageError) newErrors.message = messageError;

    // Message length validation
    if (formData.message && formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const contactMethods = [
    {
      icon: <Mail size={32} />,
      title: "Email Us",
      description: "Send us a message and we'll get back to you within 24 hours.",
      contact: "hr@algobrewery.com",
      action: "Send Email"
    },
    {
      icon: <Phone size={32} />,
      title: "Call Us",
      description: "Speak directly with our team during business hours.",
      contact: "+1 (555) 123-4567",
      action: "Call Now"
    }
  ];

  const officeLocations = [
    {
      city: "Hyderabad",
      address: "HiTech City",
      cityState: "Hyderabad, Telangana",
      phone: "+91 9618466316",
      email: "hr@algobrewery.com"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Google Sheets URL
      const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbyzBAMnOoHGk4RZwEmCZNNcHwj8Fp9ya4HkLIn8oZfOzl0UzZ_ue9NIDOMigV55p9Zh/exec';
      
      // Prepare form data for GET request with query parameters
      const queryParams = new URLSearchParams({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        projectType: formData.projectType,
        message: formData.message,
        timestamp: new Date().toISOString()
      });

      // Send GET request with query parameters (more reliable with Google Apps Script)
      const response = await fetch(`${googleSheetsUrl}?${queryParams}`, {
        method: 'GET'
      });

      // Check if submission was successful
      if (response.ok) {
        setSubmitStatus('success');
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          message: ''
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        // Handle unsuccessful response
        setSubmitStatus('error');
        console.error('Form submission failed:', response.status, response.statusText);
        
        // Clear error message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-us-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="ai-hero">
        <div className="hero-background">
          <FloatingContactElements />
        </div>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <MessageCircle size={24} />
            <span>Let's Brew</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Let's Start a
            <span className="title-highlight"> Conversation</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Ready to transform your business with innovative technology? We're here to help 
            you navigate the digital landscape and achieve your goals.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>How to Reach Us</h2>
            <p>Choose the method that works best for you</p>
          </motion.div>

          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <motion.div 
                key={index}
                className="contact-method-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="method-icon">
                  {method.icon}
                </div>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
                <div className="method-contact">{method.contact}</div>
                <button className="method-action-btn">
                  {method.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="contact-form-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Send Us a Message</h2>
            <p>Tell us about your project and we'll get back to you with a customized solution</p>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div 
                className="form-status success"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="status-icon">✓</div>
                <div className="status-content">
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div 
                className="form-status error"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="status-icon">✗</div>
                <div className="status-content">
                  <h3>Something went wrong</h3>
                  <p>Please try again or contact us directly at hr@algobrewery.com</p>
                </div>
              </motion.div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    placeholder="Enter your first name (alphabets only)"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={errors.firstName ? 'error' : ''}
                    required 
                  />
                  {errors.firstName && <p className="error-message">{errors.firstName}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    placeholder="Enter your last name (alphabets only)"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={errors.lastName ? 'error' : ''}
                    required 
                  />
                  {errors.lastName && <p className="error-message">{errors.lastName}</p>}
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Enter your email address (e.g., john.doe@company.com)"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? 'error' : ''}
                    required 
                  />
                  {errors.email && <p className="error-message">{errors.email}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="Enter 10-digit phone number (e.g., 9876543210)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <p className="error-message">{errors.phone}</p>}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  value={formData.company}
                  onChange={handleInputChange}
                  className={errors.company ? 'error' : ''}
                />
                {errors.company && <p className="error-message">{errors.company}</p>}
              </div>
              
              <div className="form-group">
                <label htmlFor="projectType">Project Type</label>
                <select 
                  id="projectType" 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className={errors.projectType ? 'error' : ''}
                  data-project-type="true"
                >
                  <option value="">Select a project type</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="ai-solution">AI Solution</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
                {errors.projectType && <p className="error-message">{errors.projectType}</p>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="6" 
                  placeholder="Tell us about your project, goals, and requirements..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className={errors.message ? 'error' : ''}
                  required
                ></textarea>
                {errors.message && <p className="error-message">{errors.message}</p>}
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send size={20} />
              </button>
            </form>

            {/* Fallback Contact Information */}
            {/* <motion.div 
              className="fallback-contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="fallback-content">
                <h3>Having trouble with the form?</h3>
                <p>You can also reach us directly:</p>
                <div className="fallback-methods">
                  <div className="fallback-method">
                    <Mail size={20} />
                    <span>Email: hr@algobrewery.com</span>
                  </div>
                  <div className="fallback-method">
                    <Phone size={20} />
                    <span>Phone: +1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="locations-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Offices</h2>
            <p>Visit us at one of our locations or connect remotely</p>
          </motion.div>

          <div className="locations-grid">
            {officeLocations.map((location, index) => (
              <motion.div 
                key={index}
                className="location-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="location-header">
                  <MapPin size={24} />
                  <h3>{location.city}</h3>
                </div>
                <div className="location-details">
                  <p className="address">{location.address}</p>
                  <p className="city-state">{location.cityState}</p>
                  <div className="contact-info">
                    <div className="contact-item">
                      <Phone size={16} />
                      <span>{location.phone}</span>
                    </div>
                    <div className="contact-item">
                      <Mail size={16} />
                      <span>{location.email}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="business-hours-section">
        <div className="container">
          <motion.div 
            className="business-hours-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="hours-header">
              <Clock size={48} />
              <h2>Business Hours</h2>
            </div>
            <div className="hours-grid">
              <div className="hours-item">
                <span className="day">Monday - Friday</span>
                <span className="time">9:00 AM - 6:00 PM IST</span>
              </div>
              <div className="hours-item">
                <span className="day">Saturday</span>
                <span className="time">Closed</span>
              </div>
              <div className="hours-item">
                <span className="day">Sunday</span>
                <span className="time">Closed</span>
              </div>
            </div>
            <p className="hours-note">
              * Emergency support available 24/7 for existing clients
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how we can help transform your business with innovative technology solutions.</p>
            <div className="cta-buttons">
              <button 
                className="cta-button primary large"
                onClick={() => {
                  document.getElementById('contact-form').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                <span>Get in Touch</span>
                <Zap size={24} />
              </button>
              <Link to="/services" className="cta-button secondary large">
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUsPage;
