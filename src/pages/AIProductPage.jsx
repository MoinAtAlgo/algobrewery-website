import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Sphere } from '@react-three/drei';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Zap, Cpu, Eye, BarChart3, Play, Pause, RotateCcw } from 'lucide-react';
import Footer from '../components/Footer';

// 3D Neural Network Component
const NeuralNetwork = () => {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    // Generate neural network nodes
    const nodeCount = 15;
    const newNodes = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4
      ],
      color: i < 5 ? '#00ff88' : i < 10 ? '#ff0088' : '#0088ff'
    }));
    setNodes(newNodes);

    // Generate connections between nodes
    const newConnections = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (Math.random() > 0.7) {
          newConnections.push([i, j]);
        }
      }
    }
    setConnections(newConnections);
  }, []);

  return (
    <group>
      {/* Nodes */}
      {nodes.map((node) => (
        <Float key={node.id} speed={2} rotationIntensity={1} floatIntensity={0.5}>
          <Sphere args={[0.1, 16, 16]} position={node.position}>
            <meshStandardMaterial 
              color={node.color} 
              emissive={node.color} 
              emissiveIntensity={0.3}
            />
          </Sphere>
        </Float>
      ))}
      
      {/* Connections */}
      {connections.map((connection, index) => {
        const startNode = nodes[connection[0]];
        const endNode = nodes[connection[1]];
        if (!startNode || !endNode) return null;
        
        const start = startNode.position;
        const end = endNode.position;
        const mid = [
          (start[0] + end[0]) / 2,
          (start[1] + end[1]) / 2,
          (start[2] + end[2]) / 2
        ];
        
        return (
          <group key={index}>
            <mesh position={mid}>
              <cylinderGeometry args={[0.01, 0.01, 0.1]} />
              <meshStandardMaterial color="#ffffff" transparent opacity={0.6} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};

// 3D Scene Component
const AIScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      
      <NeuralNetwork />
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  );
};

const AIProductPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const features = [
    {
      title: "Intelligent Automation",
      description: "Our AI system learns from your workflows and automates repetitive tasks with unprecedented accuracy.",
      icon: <Zap size={32} />,
      color: "#00ff88"
    },
    {
      title: "Predictive Analytics",
      description: "Advanced machine learning algorithms that forecast trends and identify opportunities before they happen.",
      icon: <BarChart3 size={32} />,
      color: "#ff0088"
    },
    {
      title: "Natural Language Processing",
      description: "Understand and process human language with context awareness and semantic understanding.",
      icon: <Brain size={32} />,
      color: "#0088ff"
    },
    {
      title: "Computer Vision",
      description: "Analyze images and videos to extract meaningful insights and automate visual tasks.",
      icon: <Eye size={32} />,
      color: "#ffaa00"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, features.length]);

  return (
    <div className="ai-product-page">
      {/* Navigation */}
      <nav className="ai-nav">
        <div className="container">
          <Link to="/" className="nav-back">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <div className="nav-controls">
            <button 
              className="control-btn"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button 
              className="control-btn"
              onClick={() => setActiveFeature(0)}
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="ai-hero">
        <div className="hero-background">
          <AIScene />
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
            <Brain size={24} />
            <span>AI Product</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            The Future of
            <span className="title-highlight"> AI</span>
            <br />
            is Here
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Experience the next generation of artificial intelligence that transforms how you work, 
            think, and create. Coming soon to revolutionize your digital experience.
          </motion.p>
          
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="stat-item">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Accuracy</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10x</span>
              <span className="stat-label">Faster</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Available</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="ai-features">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Revolutionary Features</h2>
            <p>Discover what makes our AI product truly exceptional</p>
          </motion.div>

          <div className="features-showcase">
            <div className="feature-display">
              <motion.div 
                className="feature-content"
                key={activeFeature}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="feature-icon" style={{ color: features[activeFeature].color }}>
                  {features[activeFeature].icon}
                </div>
                <h3>{features[activeFeature].title}</h3>
                <p>{features[activeFeature].description}</p>
              </motion.div>
            </div>

            <div className="feature-indicators">
              {features.map((_, index) => (
                <motion.button
                  key={index}
                  className={`indicator ${index === activeFeature ? 'active' : ''}`}
                  onClick={() => setActiveFeature(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="ai-technology">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Cutting-Edge Technology</h2>
            <p>Built with the latest advancements in AI and machine learning</p>
          </motion.div>

          <div className="tech-grid">
            <motion.div 
              className="tech-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="tech-icon">
                <Cpu size={40} />
              </div>
              <h3>Deep Learning</h3>
              <p>State-of-the-art neural networks that continuously improve and adapt to your needs.</p>
            </motion.div>

            <motion.div 
              className="tech-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="tech-icon">
                <Brain size={40} />
              </div>
              <h3>Natural Intelligence</h3>
              <p>Advanced algorithms that understand context, intent, and human behavior patterns.</p>
            </motion.div>

            <motion.div 
              className="tech-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="tech-icon">
                <Zap size={40} />
              </div>
              <h3>Real-time Processing</h3>
              <p>Lightning-fast computation that delivers instant results and insights.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="coming-soon">
        <div className="container">
          <motion.div 
            className="coming-soon-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="coming-soon-badge"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Brain size={48} />
            </motion.div>
            
            <h2>Coming Soon</h2>
            <p>We're brewing something extraordinary. Join the waitlist to be among the first to experience the future of AI.</p>
            
            <div className="waitlist-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="email-input"
              />
              <button className="join-waitlist-btn">
                Join Waitlist
              </button>
            </div>
            
            <div className="social-proof">
              <p>Join 10,000+ innovators already on the waitlist</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIProductPage;
