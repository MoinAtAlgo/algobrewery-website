import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { Code, Brain, MessageSquare, Zap, Cloud, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// 3D Floating Service Icons Component
const FloatingServiceIcons = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.6}>
        <mesh position={[-2.5, 1, 0]} rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#00ff88" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.7}>
        <mesh position={[2.5, -1, 0]} rotation={[-0.3, 0.8, 0.2]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#ff0088" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.7} floatIntensity={0.5}>
        <mesh position={[0, 2.5, -1]} rotation={[0.2, -0.5, 0.7]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#0088ff" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <Float speed={2.2} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh position={[-1.5, -2, 0]} rotation={[0.8, -0.2, 0.4]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#ffaa00" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
    </Canvas>
  );
};

const ServicesPage = () => {
  const services = [
    {
      icon: <Brain size={32} />,
      title: "AI Agents & Orchestration",
      description: "Custom-built autonomous agents that connect to your workflows.",
      features: [
        "LangChain & LlamaIndex based AI Agents",
        "RAG (Retrieval-Augmented Generation) Pipelines",
        "n8n / Temporal for Workflow Automation",
        "Multi-Agent Systems with Memory"
      ],
      color: "#00ff88"
    },
    {
      icon: <Code size={32} />,
      title: "Model Engineering",
      description: "Optimize, fine-tune, and deploy models tailored for your business.",
      features: [
        "LLM Fine-tuning (OpenAI, LLaMA, Falcon, Mistral)",
        "LoRA & QLoRA Training",
        "Vector Databases (Pinecone, Weaviate, FAISS)",
        "FastAPI + gRPC model serving"
      ],
      color: "#ff0088"
    },
    {
      icon: <MessageSquare size={32} />,
      title: "Conversational AI & Chatbots",
      description: "Deploy production-ready conversational systems.",
      features: [
        "GPT/Anthropic/Claude Bot Integrations",
        "Custom Knowledge Base Chatbots (Docs, PDFs, APIs)",
        "Voice + Chat Interfaces (Twilio, WebRTC, ElevenLabs)",
        "Multi-channel Deployment (Slack, WhatsApp, Web)"
      ],
      color: "#0088ff"
    },
    {
      icon: <Zap size={32} />,
      title: "Interactive Web & 3D Experiences",
      description: "Next-gen frontend + backend stacks for immersive apps.",
      features: [
        "Three.js / Babylon.js Interactive Websites",
        "Next.js 14 + React Server Components",
        "WebSockets & GraphQL Subscriptions",
        "TailwindCSS + Framer Motion UI"
      ],
      color: "#ffaa00"
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud-Native & Data Infra",
      description: "Scalable, production-grade cloud deployments.",
      features: [
        "Docker & Kubernetes (EKS, GKE, AKS)",
        "Serverless (AWS Lambda, Cloudflare Workers)",
        "Event Streaming (Kafka, Redpanda)",
        "Data Pipelines with Airflow & dbt"
      ],
      color: "#00ccff"
    },
    {
      icon: <Globe size={32} />,
      title: "Web/Mobile Applications",
      description: "Modern, responsive applications for all platforms.",
      features: [
        "React Native & Flutter Mobile Apps",
        "Progressive Web Applications (PWA)",
        "Cross-platform Desktop Applications",
        "Responsive Web Design & UI/UX"
      ],
      color: "#ff66cc"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We begin by understanding your business, workflows, and goals — identifying where custom solutions or our taskflow platform can create the most impact."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Our team designs a clear technical roadmap, whether it's bespoke software, AI-driven automation, or leveraging our in-house platform for faster deployment."
    },
    {
      step: "03",
      title: "Development",
      description: "We build using cutting-edge technologies — from scalable full-stack apps to microservices and AI models — while continuously integrating our product capabilities where relevant."
    },
    {
      step: "04",
      title: "Launch & Beyond",
      description: "We deploy, optimize, and support your solution. Alongside this, our taskflow management product evolves to offer clients even more powerful ways to streamline operations."
    }
  ];

  return (
    <div className="services-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="ai-hero">
        <div className="hero-background">
          <FloatingServiceIcons />
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
            <Zap size={24} />
            <span>Services</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Comprehensive
            <span className="title-highlight"> Digital Solutions</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
           We specialize in AI models, LLMs, and custom software from web apps, chatbots, and AI agents to cloud solutions and workflow automation including our flagship product for streamlined operations.
          </motion.p>
          
          {/* <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Service Areas</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </motion.div> */}
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>What We Offer</h2>
            <p>Comprehensive solutions designed to meet your every digital need</p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-header">
                  <div className="service-icon" style={{ color: service.color }}>
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Process</h2>
            <p>How we work with you to deliver exceptional results</p>
          </motion.div>

          <div className="process-grid">
            {process.map((step, index) => (
              <motion.div 
                key={index}
                className="process-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="process-step">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
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
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how our services can help you achieve your digital transformation goals.</p>
            <div className="cta-buttons">
              <Link to="/contact-us" className="cta-button primary large">
                <span>Let's Brew</span>
                <Zap size={24} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
