import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Sphere } from '@react-three/drei';
import { Brain } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// 3D Neural Network Component
const NeuralNetwork = () => {
  // Generate neural network nodes
  const nodeCount = 15;
  const nodes = Array.from({ length: nodeCount }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 4
    ],
    color: i < 5 ? '#00ff88' : i < 10 ? '#ff0088' : '#0088ff'
  }));

  // Generate connections between nodes
  const connections = [];
  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
      if (Math.random() > 0.7) {
        connections.push([i, j]);
      }
    }
  }

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

const ProductPage = () => {

  return (
    <div className="ai-product-page">
            <Navigation />
      
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
            <span>Explore Product</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            The Only  
            <span className="title-highlight"> Workflow Tool</span>
            <br />
            You’ll Ever Need.
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Building a platform that simplifies operations, streamlines workflows, and empowers teams to achieve more effortlessly.
          </motion.p>
          
          {/* <motion.div 
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
          </motion.div> */}
        </motion.div>
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
              className="coming-soon-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="coming-soon-label"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Coming Soon
              </motion.span>
            </motion.div>
            
            <motion.div 
              className="coming-soon-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p>Something extraordinary is brewing...</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductPage;
