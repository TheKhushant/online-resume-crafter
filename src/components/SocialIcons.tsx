import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Instagram, Youtube, Facebook, Sparkles } from 'lucide-react';

interface SocialIconProps {
  className?: string;
  size?: number;
}

const SocialIcons: React.FC<SocialIconProps> = ({ className = '', size = 24 }) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const createParticles = (x: number, y: number) => {
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x,
      y,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 1 + 0.5
    }));
    setParticles(prev => [...prev, ...newParticles]);
    
    // Remove particles after animation
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.includes(p)));
    }, 600);
  };

  const socialLinks = [
    { 
      icon: <Github size={size} />, 
      href: 'https://github.com/TheKhushant', 
      label: 'GitHub',
      color: 'from-gray-400 to-white',
      glow: 'hover:shadow-lg hover:shadow-gray-400/30'
    },
    { 
      icon: <Linkedin size={size} />, 
      href: 'https://www.linkedin.com/in/khushant-wankhede-b3021824a/', 
      label: 'LinkedIn',
      color: 'from-blue-400 to-blue-600',
      glow: 'hover:shadow-lg hover:shadow-blue-400/30'
    },
    { 
      icon: <Twitter size={size} />, 
      href: 'https://x.com/KhushantWnkde57', 
      label: 'Twitter',
      color: 'from-sky-400 to-blue-500',
      glow: 'hover:shadow-lg hover:shadow-sky-400/30'
    },
    { 
      icon: <Instagram size={size} />, 
      href: 'https://www.instagram.com/khushantwankhede_/', 
      label: 'Instagram',
      color: 'from-pink-400 to-purple-600',
      glow: 'hover:shadow-lg hover:shadow-pink-400/30'
    },
  ];

  const handleIconHover = (label: string, event: React.MouseEvent) => {
    setHoveredIcon(label);
    const rect = event.currentTarget.getBoundingClientRect();
    createParticles(rect.left + rect.width / 2, rect.top + rect.height / 2);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Animated Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400 pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            animation: `floatAway ${particle.duration}s ease-out forwards`,
          }}
        />
      ))}

      {/* Floating Social Icons Container */}
      <div 
        data-scroll 
        data-scroll-speed="2" 
        className="flex flex-wrap items-center justify-center gap-6 relative z-10"
      >
        {socialLinks.map((social, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={(e) => handleIconHover(social.label, e)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            {/* Orbital Ring */}
            <div 
              className={`absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                social.color.split(' ')[0].replace('from-', 'border-')
              }`}
              style={{
                animation: 'orbit 3s linear infinite',
                animationDelay: `${index * 0.5}s`,
              }}
            />
            
            {/* Main Icon Button */}
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                relative w-16 h-16 rounded-2xl flex items-center justify-center
                bg-gradient-to-br from-cosmic-dark/80 to-cosmic-darker/90
                backdrop-blur-xl border border-white/10
                transition-all duration-500 transform
                group-hover:scale-110 group-hover:-translate-y-2
                ${social.glow}
                hover:border-white/30
                shadow-2xl shadow-black/50
              `}
              aria-label={social.label}
            >
              {/* Background Gradient */}
              <div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />
              
              {/* Animated Sparkle */}
              <div 
                className={`absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 ${
                  social.color.split(' ')[0].replace('from-', 'text-')
                }`}
              >
                <Sparkles size={12} className="animate-pulse" />
              </div>
              
              {/* Icon */}
              <div 
                className={`relative z-10 transition-all duration-500 group-hover:scale-110 ${
                  social.color.split(' ')[0].replace('from-', 'text-')
                }`}
              >
                {social.icon}
              </div>

              {/* Pulsing Ring Effect */}
              <div 
                className={`absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 ${
                  social.color.split(' ')[0].replace('from-', 'border-')
                }`}
                style={{
                  animation: 'pulseRing 2s ease-out infinite',
                }}
              />
            </a>

            {/* Tooltip */}
            <div 
              className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2
                bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg
                text-sm font-medium whitespace-nowrap
                transition-all duration-300
                ${hoveredIcon === social.label ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                pointer-events-none
              `}
            >
              {social.label}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45" />
            </div>

            {/* Connection Line */}
            <div 
              className={`absolute -right-3 top-1/2 transform -translate-y-1/2 w-3 h-0.5
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100
                ${social.color.split(' ')[0].replace('from-', 'bg-')}
              `}
            />
          </div>
        ))}
      </div>

      {/* Ambient Light Effect */}
      <div 
        className="absolute inset-0 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.3), transparent 50%)`,
        }}
      />

      {/* Custom Animations */}
      <style>{`
        @keyframes floatAway {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(
              ${Math.random() * 100 - 50}px,
              ${Math.random() * -80 - 20}px
            ) scale(0);
          }
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(20px) rotate(0deg) scale(1.1);
          }
          50% {
            transform: rotate(180deg) translateX(20px) rotate(-180deg) scale(1.2);
          }
          100% {
            transform: rotate(360deg) translateX(20px) rotate(-360deg) scale(1.1);
          }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        /* Individual floating animations for each icon */
        .group:nth-child(1) { animation: float 6s ease-in-out infinite; }
        .group:nth-child(2) { animation: float 6s ease-in-out infinite 1.5s; }
        .group:nth-child(3) { animation: float 6s ease-in-out infinite 3s; }
        .group:nth-child(4) { animation: float 6s ease-in-out infinite 4.5s; }
      `}</style>
    </div>
  );
};

export default SocialIcons;