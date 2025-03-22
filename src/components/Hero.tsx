
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  name: string;
  title: string;
}

const Hero: React.FC<HeroProps> = ({ name, title }) => {
  const [displayTitle, setDisplayTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Typing effect for title
  useEffect(() => {
    if (titleIndex < title.length) {
      const timeout = setTimeout(() => {
        setDisplayTitle(prev => prev + title[titleIndex]);
        setTitleIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // When typing is complete, blink cursor
      const interval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [title, titleIndex]);

  return (
    <section className="min-h-screen w-full flex items-center justify-center pt-16 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Profile Image */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-xl overflow-hidden border-2 border-white border-opacity-20 shadow-xl animate-float">
                <img 
                  src="/lovable-uploads/335aaa96-cef9-437b-9275-2e323285a074.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cosmic-glow to-cosmic-accent opacity-30 blur-sm -z-10"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-7/12 text-center lg:text-left space-y-6 lg:space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
              <span className="neon-text uppercase">{name}</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-mono mt-4">
              <span className="inline-block">I'M THE</span>{" "}
              <span className="inline-block">{displayTitle}</span>
              {showCursor && <span className="animate-cursor-blink">|</span>}
            </h2>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
              <Link 
                to="/contact"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-cosmic-accent to-cosmic-glow text-white font-medium shadow-lg shadow-cosmic-accent/20 hover:shadow-cosmic-accent/40 transition-all duration-300 flex items-center gap-2 hover:-translate-y-1"
              >
                Contact Me
                <ArrowRight size={18} />
              </Link>
              
              <Link 
                to="/work"
                className="px-6 py-3 rounded-lg glassmorphism text-white font-medium shadow-lg hover:shadow-cosmic-glow/20 transition-all duration-300 hover:-translate-y-1"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
