
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Journey', path: '/journey' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Activities', path: '/activities' },
    { name: 'Work Experiences', path: '/work' },
    { name: 'Contact Me', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'glassmorphism py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className={`text-xl md:text-2xl font-mono font-bold transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-85'}`}
        >
          <span className="hidden sm:inline text-white">Good</span>
          <TimeBasedGreeting />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-cosmic-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden glassmorphism absolute w-full transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'} overflow-hidden`}>
        <nav className="flex flex-col items-center space-y-4 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg ${location.pathname === link.path ? 'text-cosmic-accent' : 'text-white'} hover:text-cosmic-accent transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

// Dynamic greeting based on time
const TimeBasedGreeting: React.FC = () => {
  const [greeting, setGreeting] = useState("");
  
  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      let newGreeting;
      
      if (hour >= 5 && hour < 12) {
        newGreeting = "Morning";
      } else if (hour >= 12 && hour < 17) {
        newGreeting = "Afternoon";
      } else if (hour >= 17 && hour < 21) {
        newGreeting = "Evening";
      } else {
        newGreeting = "Night";
      }
      
      setGreeting(newGreeting);
    };
    
    updateGreeting();
    const interval = setInterval(updateGreeting, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);
  
  return <span className="neon-text"> {greeting}</span>;
};

export default NavBar;
