
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const navLinks = [
    { name: 'Home', section: 'home' },
    { name: 'Journey', section: 'journey' },
    { name: 'Certificates', section: 'certificates' },
    { name: 'Activities', section: 'activities' },
    { name: 'Work', section: 'work' },
    { name: 'Contact', section: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background when scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.section);
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the element is near the top of the viewport, set it as active
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'glassmorphism py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className={`text-xl md:text-2xl font-mono font-bold transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-85'}`}
        >
          <span className="hidden sm:inline text-white">Good</span>
          <TimeBasedGreeting />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.section}
              href={`#${link.section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.section);
              }}
              className={`nav-link ${activeSection === link.section ? 'active' : ''}`}
            >
              {link.name}
            </a>
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
            <a
              key={link.section}
              href={`#${link.section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.section);
              }}
              className={`text-lg ${activeSection === link.section ? 'text-cosmic-accent' : 'text-white'} hover:text-cosmic-accent transition-colors`}
            >
              {link.name}
            </a>
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
