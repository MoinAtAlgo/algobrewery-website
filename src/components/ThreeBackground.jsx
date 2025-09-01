import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Lazy load Three.js components
    const loadThreeJS = async () => {
      try {
        // Scene setup
        const scene = new THREE.Scene();
        sceneRef.current = scene;
        
        // Camera setup
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.z = 5;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ 
          alpha: true,
          antialias: true 
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        rendererRef.current = renderer;
        
        mountRef.current.appendChild(renderer.domElement);

        // Create particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 200;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 10;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        
        const particlesMaterial = new THREE.PointsMaterial({
          size: 0.02,
          color: 0x4f46e5,
          transparent: true,
          opacity: 0.8,
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Create floating geometric shapes
        const createShape = (geometry, material, x, y, z) => {
          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.set(x, y, z);
          mesh.rotation.x = Math.random() * Math.PI;
          mesh.rotation.y = Math.random() * Math.PI;
          return mesh;
        };

        // Add some geometric shapes
        const boxGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
        const boxMaterial = new THREE.MeshBasicMaterial({ 
          color: 0x8b5cf6, 
          transparent: true, 
          opacity: 0.6,
          wireframe: true 
        });

        const sphereGeometry = new THREE.SphereGeometry(0.2, 16, 16);
        const sphereMaterial = new THREE.MeshBasicMaterial({ 
          color: 0x06b6d4, 
          transparent: true, 
          opacity: 0.5,
          wireframe: true 
        });

        const torusGeometry = new THREE.TorusGeometry(0.15, 0.05, 16, 32);
        const torusMaterial = new THREE.MeshBasicMaterial({ 
          color: 0x10b981, 
          transparent: true, 
          opacity: 0.6,
          wireframe: true 
        });

        // Add shapes to scene
        for (let i = 0; i < 8; i++) {
          const x = (Math.random() - 0.5) * 8;
          const y = (Math.random() - 0.5) * 8;
          const z = (Math.random() - 0.5) * 8;
          
          if (i % 3 === 0) {
            scene.add(createShape(boxGeometry, boxMaterial, x, y, z));
          } else if (i % 3 === 1) {
            scene.add(createShape(sphereGeometry, sphereMaterial, x, y, z));
          } else {
            scene.add(createShape(torusGeometry, torusMaterial, x, y, z));
          }
        }

        // Animation loop
        const animate = () => {
          animationIdRef.current = requestAnimationFrame(animate);
          
          // Rotate particles
          particlesMesh.rotation.x += 0.001;
          particlesMesh.rotation.y += 0.001;
          
          // Rotate shapes
          scene.children.forEach((child, index) => {
            if (index > 0) { // Skip particles
              child.rotation.x += 0.005;
              child.rotation.y += 0.005;
            }
          });
          
          renderer.render(scene, camera);
        };

        animate();
        setIsLoaded(true);

        // Handle window resize
        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      } catch (error) {
        console.error('Error loading Three.js:', error);
      }
    };

    loadThreeJS();

    // Cleanup function
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1,
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out'
      }} 
    />
  );
};

export default ThreeBackground;







