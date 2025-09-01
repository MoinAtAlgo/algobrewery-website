import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Users, Brain, Zap, ChevronDown, Cloud, MessageSquare, Link as LinkIcon, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// 3D Floating Cube Component
const FloatingCube = ({ position, rotation, color, size }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={position} rotation={rotation}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </mesh>
    </Float>
  );
};

// 3D Scene Component
const Scene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <FloatingCube 
        position={[-2, 1, 0]} 
        rotation={[0.5, 0.5, 0]} 
        color="#00ff88" 
        size={0.5} 
      />
      <FloatingCube 
        position={[2, -1, 0]} 
        rotation={[-0.3, 0.8, 0.2]} 
        color="#ff0088" 
        size={0.3} 
      />
      <FloatingCube 
        position={[0, 2, -1]} 
        rotation={[0.2, -0.5, 0.7]} 
        color="#0088ff" 
        size={0.4} 
      />
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <Scene3D />
        </div>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="title-main">ALGO</span>
            <span className="title-brewery">BREWERY</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
           Brewing the perfect blend of AI, software, and cloud solutions
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Link to="/product" className="cta-button primary">
              <span>Explore Product</span>
              <ArrowRight size={20} />
            </Link>
            <Link to="/services" className="cta-button secondary">
              Our Services
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>About Algobrewery</h2>
            <p>At Algobrewery, we don't just write code- we engineer intelligent systems. Our craft lies at the intersection of AI, automation, and next-gen web experiences, blending deep technical expertise with real world impact.</p>
            <br/><p>From building LangChain-powered AI Agents and n8n workflow automation, to deploying fine-tuned LLMs with FastAPI + gRPC backends, we specialize in production-ready solutions that scale. Whether it's Three.js interactive websites, Kafka event streaming, or cloud-native infrastructure with Kubernetes and serverless stacks, our focus is always on shipping high-performance, future-proof systems.</p>
            <br/>
            <p><strong>But we're not stopping there. </strong><br /><span>We're currently brewing our own product, designed to push the boundaries of <span className="future-text">AI-driven operational Taskflows</span></span> — <span className="coming-soon-text" style={{fontSize:'2rem'}}>Coming soon...</span></p>
          </motion.div>
{/* 
          <div className="features-grid">
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <Code size={32} />
              </div>
              <h3>Custom Development</h3>
              <p>Tailored software solutions that transform your business processes and drive innovation.</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3>Strategic Consulting</h3>
              <p>Expert guidance to navigate digital transformation and optimize your technology stack.</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <Brain size={32} />
              </div>
              <h3>AI Innovation</h3>
              <p>Cutting-edge AI solutions that automate, optimize, and revolutionize your operations.</p>
            </motion.div>
          </div> */}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Services</h2>
            <p>Comprehensive solutions for the digital age</p>
          </motion.div>

          <div className="services-grid">
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-header">
                <div className="service-icon">
                  <Brain size={32} />
                </div>
                <h3>AI Agents & Orchestration</h3>
              </div>
              <p>Custom-built autonomous agents that connect to your workflows.</p>
              <ul>
                <li>LangChain & LlamaIndex based AI Agents</li>
                <li>RAG (Retrieval-Augmented Generation) Pipelines</li>
                <li>n8n / Temporal for Workflow Automation</li>
                <li>Multi-Agent Systems with Memory</li>
              </ul>
            </motion.div>

            <motion.div 
              className="service-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-header">
                <div className="service-icon">
                  <Code size={32} />
                </div>
                <h3>Model Engineering</h3>
              </div>
              <p>Optimize, fine-tune, and deploy models tailored for your business.</p>
              <ul>
                <li>LLM Fine-tuning (OpenAI, LLaMA, Falcon, Mistral)</li>
                <li>LoRA & QLoRA Training</li>
                <li>Vector Databases (Pinecone, Weaviate, FAISS)</li>
                <li>FastAPI + gRPC model serving</li>
              </ul>
            </motion.div>

            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="service-header">
                <div className="service-icon">
                  <MessageSquare size={32} />
                </div>
                <h3>Conversational AI & Chatbots</h3>
              </div>
              <p>Deploy production-ready conversational systems.</p>
              <ul>
                <li>GPT/Anthropic/Claude Bot Integrations</li>
                <li>Custom Knowledge Base Chatbots (Docs, PDFs, APIs)</li>
                <li>Voice + Chat Interfaces (Twilio, WebRTC, ElevenLabs)</li>
                <li>Multi-channel Deployment (Slack, WhatsApp, Web)</li>
              </ul>
            </motion.div>

            <motion.div 
              className="service-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="service-header">
                <div className="service-icon">
                  <Zap size={32} />
                </div>
                <h3>Interactive Web & 3D Experiences</h3>
              </div>
              <p>Next-gen frontend + backend stacks for immersive apps.</p>
              <ul>
                <li>Three.js / Babylon.js Interactive Websites</li>
                <li>Next.js 14 + React Server Components</li>
                <li>WebSockets & GraphQL Subscriptions</li>
                <li>TailwindCSS + Framer Motion UI</li>
              </ul>
            </motion.div>

            <motion.div 
              className="service-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="service-header">
                <div className="service-icon">
                  <Cloud size={32} />
                </div>
                <h3>Cloud-Native & Data Infra</h3>
              </div>
              <p>Scalable, production-grade cloud deployments.</p>
              <ul>
                <li>Docker & Kubernetes (EKS, GKE, AKS)</li>
                <li>Serverless (AWS Lambda, Cloudflare Workers)</li>
                <li>Event Streaming (Kafka, Redpanda)</li>
                <li>Data Pipelines with Airflow & dbt</li>
              </ul>
            </motion.div>

            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="service-header">
                <div className="service-icon">
                  <Globe size={32} />
                </div>
                <h3>Web/Mobile Applications</h3>
              </div>
              <p>Modern, responsive applications for all platforms.</p>
              <ul>
                <li>React Native & Flutter Mobile Apps</li>
                <li>Progressive Web Applications (PWA)</li>
                <li>Cross-platform Desktop Applications</li>
                <li>Responsive Web Design & UI/UX</li>
              </ul>
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
            <h2>Ready to Brew Something Amazing?</h2>
            <p>Let's discuss how we can transform your business with cutting-edge technology.</p>
            <div className="cta-buttons">
              <Link to="/product" className="cta-button primary large">
                <span>Explore Our AI Product</span>
                <ArrowRight size={24} />
              </Link>
              <Link to="/contact-us" className="cta-button secondary large">
                Let's Brew
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
