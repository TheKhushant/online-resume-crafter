
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

interface HeroProps {
  name: string;
  title: string;
}

const Hero: React.FC<HeroProps> = ({ name }) => {
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  const titles = ["FULLSTACK DEVELOPER", "CODER", "GRAPHIC DESIGNER"];
  const typingRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing timeout on component unmount
    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, []);

  useEffect(() => {
    const title = titles[currentTitleIndex];
    
    if (!isDeleting && displayText === title) {
      // Pause at the end of typing
      typingRef.current = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50); // faster when deleting
      }, 1500);
    } else if (isDeleting && displayText === '') {
      // Move to the next title
      setIsDeleting(false);
      setTypingSpeed(100);
      setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
    } else {
      typingRef.current = setTimeout(() => {
        setDisplayText(prev => {
          if (isDeleting) {
            return prev.slice(0, -1);
          } else {
            return title.slice(0, prev.length + 1);
          }
        });
      }, typingSpeed);
    }
  }, [currentTitleIndex, displayText, isDeleting, titles, typingSpeed]);

  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              <span className="inline-block typing-effect">{displayText}</span>
            </h2>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
              <button 
                onClick={() => navigate('/contact')}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-cosmic-accent to-cosmic-glow text-white font-medium shadow-lg shadow-cosmic-accent/20 hover:shadow-cosmic-accent/40 transition-all duration-300 flex items-center gap-2 hover:-translate-y-1"
              >
                Contact Me
                <ArrowRight size={18} />
              </button>
              
              <button 
                onClick={() => navigate('/work')}
                className="px-6 py-3 rounded-lg glassmorphism text-white font-medium shadow-lg hover:shadow-cosmic-glow/20 transition-all duration-300 hover:-translate-y-1"
              >
                View My Work
              </button>
              
              <button 
                onClick={handleDownloadResume}
                className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white font-medium shadow-lg hover:bg-white/15 transition-all duration-300 flex items-center gap-2 hover:-translate-y-1"
              >
                Download Resume
                <Download size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
