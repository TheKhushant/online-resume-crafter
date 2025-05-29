
import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Youtube, Facebook } from 'lucide-react';

interface SocialIconProps {
  className?: string;
  size?: number;
}

const SocialIcons: React.FC<SocialIconProps> = ({ className = '', size = 24 }) => {
  const socialLinks = [
    { icon: <Github size={size} />, href: 'https://github.com/TheKhushant', label: 'GitHub' },
    { icon: <Linkedin size={size} />, href: 'https://www.linkedin.com/in/khushant-wankhede-b3021824a/', label: 'LinkedIn' },
    { icon: <Twitter size={size} />, href: 'https://x.com/KhushantWnkde57', label: 'Twitter' },
    { icon: <Instagram size={size} />, href: 'https://www.instagram.com/khushantwankhede_/', label: 'Instagram' },
    // { icon: <Facebook size={size} />, href: 'https://facebook.com/', label: 'Facebook' },
    // { icon: <Youtube size={size} />, href: 'https://youtube.com/', label: 'YouTube' },
  ];

  return (
    <div data-scroll data-scroll-speed="2" className={`flex flex-wrap items-center gap-4 ${className}`}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-cosmic-accent/10 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-cosmic-accent hover:to-cosmic-glow transition-all duration-300"
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
