import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { Users, Target, Award, Globe, Heart, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// 3D Floating Elements Component
const FloatingElements = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
        <mesh position={[-2, 1, 0]} rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#00ff88" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.6}>
        <mesh position={[2, -1, 0]} rotation={[-0.3, 0.8, 0.2]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#ff0088" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.7}>
        <mesh position={[0, 2, -1]} rotation={[0.2, -0.5, 0.7]}>
          <boxGeometry args={[0.25, 0.25, 0.25]} />
          <meshStandardMaterial color="#0088ff" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  );
};

const AboutUsPage = () => {
  const values = [
    {
      icon: <Target size={32} />,
      title: "Innovation First",
      description: "We push the boundaries of what's possible, always exploring new technologies and approaches."
    },
    {
      icon: <Heart size={32} />,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering solutions that drive real business value."
    },
    {
      icon: <Users size={32} />,
      title: "Collaboration",
      description: "We believe the best solutions come from working together, both with our clients and within our team."
    },
    // {
    //   icon: <Zap size={32} />,
    //   title: "Excellence",
    //   description: "We strive for excellence in everything we do, from code quality to user experience."
    // },
    {
      icon: <Award size={32} />,
      title: "Integrity",
      description: "We uphold transparency, accountability, and trust in everything we do — from our code to our client relationships."
    },
    {
      icon: <Globe size={32} />,
      title: "Growth Mindset",
      description: "We embrace challenges as opportunities, constantly learning and evolving to stay ahead in a fast-changing tech landscape."
    },
    // {
    //   icon: <Zap size={32} />,
    //   title: "Agility",
    //   description: "We move fast, adapt quickly, and deliver value without compromising on quality."
    // },
    {
      icon: <Heart size={32} />,
      title: "Impact",
      description: "We measure success not just by what we build, but by the positive change it creates for our clients, teams, and communities."
    }
  ];

  const team = [
    {
      name: "Akshay Rastogi",
      role: "Co-Founder",
      description: "A detail-oriented leader who translates strategy into actionable project plans and results",
      image: "/team/akshay-rastogi.jpg"
    },
    {
      name: "Shiva Dokula",
      role: "Co-Founder",
      description: "Driving projects from concept to delivery with a focus on execution, timelines, and collaboration.",
      image: "/team/shiva-dokula.jpg"
    },
    {
      name: "Nithin Rajeev",
      role: "Co-Founder",
      description: "Brings structure and clarity to complex initiatives, managing resources and priorities effectively.",
      image: "/team/nithin-rajeev.jpg"
    },
    {
      name: "Sindhu Jinukala",
      role: "Software Development Engineer",
      description: "Crafts scalable APIs, databases, and cloud-native systems that power our applications.",
      image: "/team/sindhu-jinukala.jpg"
    },
    {
      name: "Mohamed Moin Irfan",
      role: "Software Development Engineer",
      description: "Masters the entire stack from pixel perfect UI's to rock solid backends.",
      image: "/team/mohamed-moin-irfan.jpg"
    },
    {
      name: "Vineela Vasana",
      role: "Software Development Engineer",
      description: "End-to-end developer powering complete digital products.",
      image: "/team/vineela-vasana.jpg"
    }
  ];

  return (
    <div className="about-us-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="ai-hero">
        <div className="hero-background">
          <FloatingElements />
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
            <span>Culture</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Engineering Today.
            <span className="title-highlight"> Brewing Tomorrow.</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            At Algobrewery, we craft intelligent systems at the intersection of AI, automation, and modern web experiences. We’re driven by innovation, obsessed with scalability, and passionate about building technology that lasts.
          </motion.p>
          
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {/* <div className="stat-item">
              <span className="stat-label">Building</span>
              <span className="stat-number">AI Agents</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Deploying</span>
              <span className="stat-number">LLMs</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Creating</span>
              <span className="stat-number">3D Experiences</span>
            </div> */}
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Mission</h2>
            <p>At Algobrewery, our mission is to bridge the gap between cutting-edge technology and real-world impact. We aim to empower businesses with AI-driven intelligence, automation, and modern digital platforms that are scalable, reliable, and future-ready. By simplifying complexity, driving innovation, and building solutions that last, we strive to create technology that not only solves today’s challenges but also paves the way for tomorrow’s possibilities.</p>
          </motion.div>

          <div className="mission-content">
            <motion.div 
              className="mission-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p>
               Founded in 2024, Algobrewery emerged from a simple belief: that every business, 
                regardless of size, deserves access to world-class technology solutions. United by our love for 
                innovation and our desire to make a real impact.we craft modern web applications and immersive digital experiences that are fast, scalable, and engaging. From interactive 3D websites and real-time dashboards to enterprise grade platforms, we design products that bring ideas to life with precision and creativity.

Beyond the web, we engineer AI-driven solutions from fine-tuned models and intelligent chatbots to autonomous agents and automated workflows that optimize how businesses operate. Our expertise extends to data engineering, event streaming, and cloud-native infrastructure, ensuring every system we deliver is resilient, scalable, and built for the future.

</p>
              <p>
              But technology is only half the story. What truly defines us is our culture of innovation, collaboration, and excellence. We believe success comes from solving complex problems with clarity, fostering an environment where ideas can grow, and ensuring that both our clients and our teams thrive.

At Algobrewery, we don’t just deliver solutions — we build intelligent systems, strong partnerships, and a work culture that empowers success.</p>
            </motion.div>

            <motion.div 
              className="mission-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="visual-element">
                <Globe size={64} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Meet Our Team</h2>
            <p>The brilliant minds behind our innovative solutions</p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="team-avatar">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="fallback-avatar" style={{ display: 'none' }}>
                    <Users size={40} />
                  </div>
                </div>
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p>{member.description}</p>
              </motion.div>
            ))}
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
            <h2>Ready to Brew Something Amazing?</h2>
            <p>Let's discuss how we can transform your business with cutting-edge technology.</p>
            <div className="cta-buttons">
              <Link to="/contact-us" className="cta-button primary large">
                <span>Let's Brew</span>
                <Zap size={24} />
              </Link>
              <Link to="/services" className="cta-button secondary large">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
