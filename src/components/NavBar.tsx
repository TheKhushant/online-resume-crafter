
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavBarProps {
  onNavigate: (ref: React.RefObject<HTMLDivElement>) => void;
  journeyRef: React.RefObject<HTMLDivElement>;
  certificatesRef: React.RefObject<HTMLDivElement>;
  activitiesRef: React.RefObject<HTMLDivElement>;
  workRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const NavBar: React.FC<NavBarProps> = ({ 
  onNavigate, 
  journeyRef, 
  certificatesRef, 
  activitiesRef, 
  workRef, 
  contactRef 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const navLinks = [
    { name: 'Home', id: 'home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: 'Journey', id: 'journey', action: () => onNavigate(journeyRef) },
    { name: 'Certificates', id: 'certificates', action: () => onNavigate(certificatesRef) },
    { name: 'Activities', id: 'activities', action: () => onNavigate(activitiesRef) },
    { name: 'Work Experiences', id: 'work', action: () => onNavigate(workRef) },
    { name: 'Contact Me', id: 'contact', action: () => onNavigate(contactRef) },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine which section is in view
      const scrollPosition = window.scrollY + 100;
      
      if (scrollPosition < journeyRef.current?.offsetTop || !journeyRef.current) {
        setActiveSection('home');
      } else if (scrollPosition < certificatesRef.current?.offsetTop || !certificatesRef.current) {
        setActiveSection('journey');
      } else if (scrollPosition < activitiesRef.current?.offsetTop || !activitiesRef.current) {
        setActiveSection('certificates');
      } else if (scrollPosition < workRef.current?.offsetTop || !workRef.current) {
        setActiveSection('activities');
      } else if (scrollPosition < contactRef.current?.offsetTop || !contactRef.current) {
        setActiveSection('work');
      } else {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [journeyRef, certificatesRef, activitiesRef, workRef, contactRef]);

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'glassmorphism py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`text-xl md:text-2xl font-mono font-bold transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-85'}`}
        >
          <span className="hidden sm:inline text-white">Good</span>
          <TimeBasedGreeting />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={link.action}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.name}
            </button>
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
            <button
              key={link.id}
              onClick={() => {
                link.action();
                setIsOpen(false);
              }}
              className={`text-lg ${activeSection === link.id ? 'text-cosmic-accent' : 'text-white'} hover:text-cosmic-accent transition-colors`}
            >
              {link.name}
            </button>
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
