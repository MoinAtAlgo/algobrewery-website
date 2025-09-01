import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { Users, MapPin, Clock, DollarSign, ArrowRight, Zap, Heart, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// 3D Floating Career Elements Component
const FloatingCareerElements = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      
      <Float speed={1.6} rotationIntensity={0.8} floatIntensity={0.6}>
        <mesh position={[-2.5, 1, 0]} rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#00ff88" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <Float speed={2.1} rotationIntensity={0.6} floatIntensity={0.7}>
        <mesh position={[2.5, -1, 0]} rotation={[-0.3, 0.8, 0.2]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#ff0088" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <Float speed={1.9} rotationIntensity={0.7} floatIntensity={0.5}>
        <mesh position={[0, 2.5, -1]} rotation={[0.2, -0.5, 0.7]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#0088ff" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <Float speed={2.3} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh position={[-1.8, -2, 0]} rotation={[0.8, -0.2, 0.4]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#ffaa00" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <Float speed={1.7} rotationIntensity={0.9} floatIntensity={0.4}>
        <mesh position={[1.8, -2, 0]} rotation={[-0.6, 0.3, 0.9]}>
          <boxGeometry args={[0.35, 0.35, 0.35]} />
          <meshStandardMaterial color="#00ccff" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
    </Canvas>
  );
};

const CareersPage = () => {
  // const openPositions = [
  //   {
  //     title: "Senior Full-Stack Developer",
  //     department: "Engineering",
  //     location: "Remote / San Francisco",
  //     type: "Full-time",
  //     salary: "$120k - $180k",
  //     description: "Join our engineering team to build scalable web applications and innovative software solutions.",
  //     requirements: [
  //       "5+ years of experience in full-stack development",
  //       "Expertise in React, Node.js, and cloud technologies",
  //       "Experience with microservices architecture",
  //       "Strong problem-solving and communication skills"
  //     ]
  //   },
  //   {
  //     title: "AI/ML Engineer",
  //     department: "AI Research",
  //     location: "Remote / New York",
  //     type: "Full-time",
  //     salary: "$130k - $200k",
  //     description: "Help us develop cutting-edge AI solutions that transform how businesses operate.",
  //     requirements: [
  //       "3+ years of experience in machine learning",
  //       "Proficiency in Python, TensorFlow, and PyTorch",
  //       "Experience with neural networks and deep learning",
  //       "Background in computer science or related field"
  //     ]
  //   },
  //   {
  //     title: "UX/UI Designer",
  //     department: "Design",
  //     location: "Remote / Austin",
  //     type: "Full-time",
  //     salary: "$90k - $140k",
  //     description: "Create beautiful and intuitive user experiences that delight our customers.",
  //     requirements: [
  //       "4+ years of experience in UX/UI design",
  //       "Proficiency in Figma, Sketch, and design tools",
  //       "Strong portfolio showcasing user-centered design",
  //       "Experience with design systems and prototyping"
  //     ]
  //   },
  //   {
  //     title: "DevOps Engineer",
  //     department: "Infrastructure",
  //     location: "Remote / Seattle",
  //     type: "Full-time",
  //     salary: "$110k - $160k",
  //     description: "Build and maintain our cloud infrastructure and deployment pipelines.",
  //     requirements: [
  //       "3+ years of experience in DevOps or SRE",
  //       "Expertise in AWS, Docker, and Kubernetes",
  //       "Experience with CI/CD pipelines",
  //       "Knowledge of infrastructure as code"
  //     ]
  //   },
  //   {
  //     title: "Product Manager",
  //     department: "Product",
  //     location: "Remote / Boston",
  //     type: "Full-time",
  //     salary: "$100k - $150k",
  //     description: "Drive product strategy and lead cross-functional teams to deliver exceptional products.",
  //     requirements: [
  //       "4+ years of experience in product management",
  //       "Experience with agile methodologies",
  //       "Strong analytical and strategic thinking",
  //       "Excellent communication and leadership skills"
  //     ]
  //   },
  //   {
  //     title: "Sales Engineer",
  //     department: "Sales",
  //     location: "Remote / Chicago",
  //     type: "Full-time",
  //     salary: "$80k - $130k",
  //     description: "Bridge the gap between technical solutions and business needs for our clients.",
  //     requirements: [
  //       "3+ years of experience in sales engineering",
  //       "Technical background in software development",
  //       "Strong presentation and communication skills",
  //       "Experience with enterprise sales cycles"
  //     ]
  //   }
  // ];

  const openPositions = [];

  const benefits = [
    {
      icon: <Globe size={32} />,
      title: "Hybrid & Remote",
      description: "Flexibility to work from anywhere or collaborate in person — your choice, your flow."
    },
    {
      icon: <Zap size={32} />,
      title: "Learning & Growth",
      description: "Workshops, mentorship, and career development programs to help you level up continuously."
    },
    {
      icon: <Users size={32} />,
      title: "Team Culture",
      description: "An open, supportive, and collaborative environment where every voice is heard and valued."
    },
    {
      icon: <Heart size={32} />,
      title: "Work-Life Balance",
      description: "Flexible schedules and time-off policies designed to help you recharge and stay inspired."
    },
    {
      icon: <ArrowRight size={32} />,
      title: "Impactful Work",
      description: "Contribute to products and solutions that truly make a difference for businesses and communities."
    }
  ];

  return (
    <div className="careers-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="ai-hero">
        <div className="hero-background">
          <FloatingCareerElements />
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
            <Users size={24} />
            <span>Careers</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Let's Brew the Future
            <span className="title-highlight"> Together</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            We’re crafting innovations that redefine how businesses work. Every line of code, every design, and every idea is a chance to shape something bigger. If you’re passionate about pushing boundaries, collaborating with bold thinkers, and brewing impact that lasts, this is the place for you.
          </motion.p>
          
          {/* <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="stat-item">
              <span className="stat-number">25+</span>
              <span className="stat-label">Team Members</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">6</span>
              <span className="stat-label">Open Positions</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Remote</span>
            </div>
          </motion.div> */}
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Why Work With Us</h2>
            <p>We believe in taking care of our team so they can do their best work</p>
          </motion.div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="positions-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Open Positions</h2>
            <p>Find your next opportunity to make an impact</p>
          </motion.div>

          <div className="positions-grid">
            {openPositions.length > 0 ? (
              openPositions.map((position, index) => (
                <motion.div 
                  key={index}
                  className="position-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="position-header">
                    <h3>{position.title}</h3>
                    <span className="position-department">{position.department}</span>
                  </div>
                  
                  <div className="position-meta">
                    <div className="meta-item">
                      <MapPin size={16} />
                      <span>{position.location}</span>
                    </div>
                    <div className="meta-item">
                      <Clock size={16} />
                      <span>{position.type}</span>
                    </div>
                    <div className="meta-item">
                      <DollarSign size={16} />
                      <span>{position.salary}</span>
                    </div>
                  </div>
                  
                  <p className="position-description">{position.description}</p>
                  
                  <div className="position-requirements">
                    <h4>Requirements:</h4>
                    <ul>
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="apply-btn">
                    <span>Apply Now</span>
                    <ArrowRight size={20} />
                  </button>
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="no-positions-message"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="no-positions-icon">
                  <Users size={64} />
                </div>
                <h3>No Current Open Positions</h3>
                <p>We're not actively hiring at the moment, but we're always looking for exceptional talent to join our team.</p>
                <p>Feel free to reach out to us at <strong>hr@algobrewery.com</strong> with your resume and a cover letter explaining why you'd like to join us.</p>
                <p>We'll keep your information on file for future opportunities!</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="culture-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Culture</h2>
            <p>We're building more than just software - we're building a community</p>
          </motion.div>

          <div className="culture-content">
            <motion.div 
              className="culture-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p>
                At Algobrewery, we believe that great software comes from great teams. 
                We foster a culture of collaboration, innovation, and continuous learning 
                where every team member has a voice and can make a real impact.
              </p>
              <p>
                We value diversity, creativity, and passion for technology. Our team 
                members come from all walks of life, bringing unique perspectives and 
                experiences that make our solutions better and our company stronger.
              </p>
              <p>
                We're committed to creating an inclusive environment where everyone 
                feels welcome, supported, and empowered to reach their full potential.
              </p>
            </motion.div>

            <motion.div 
              className="culture-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="visual-element">
                <Users size={64} />
              </div>
            </motion.div>
          </div>
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
            <h2>Don't See the Right Fit?</h2>
            <p>We're always looking for talented individuals to join our team. Even if you don't see a specific role that matches your skills, we'd love to hear from you!</p>
            <p>Send your resume to <strong>hr@algobrewery.com</strong> with a cover letter explaining your background, skills, and why you'd like to join Algobrewery. We'll review your application and reach out if there's a potential fit for future opportunities.</p>
            <p>Your talent might be exactly what we need for upcoming journey!</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
