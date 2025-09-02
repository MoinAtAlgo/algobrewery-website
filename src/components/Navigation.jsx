import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import algobreweryLogo from '../assets/algobreweryLogo_NoBg.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleNavigation = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Culture', path: '/about-us' },
    // { name: 'Products', path: '/product' },
    { name: 'Services', path: '/services' },
    { name: 'Resources', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Let\'s Brew', path: '/contact-us' }
  ];

  return (
    <motion.nav
      className={`navigation ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={handleNavigation}>
          <img 
            src={algobreweryLogo} 
            alt="Algobrewery Logo" 
            className="nav-logo-img" 
            loading="lazy"
            decoding="async"
            fetchpriority="low"
          />
          <span>ALGOBREWERY</span>
        </Link>

        <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <div key={item.name} className="nav-item">
              <Link
                to={item.path}
                className="nav-link"
                onClick={handleNavigation}
              >
                {item.name}
              </Link>
            </div>
          ))}
          
          <Link to="/product" className="nav-cta" onClick={handleNavigation}>
            <span>Explore Product</span>
          </Link>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;


