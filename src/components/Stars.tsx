
import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: number;
}

const Stars: React.FC = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsRef.current) return;

    // Create stars
    const starCount = Math.min(Math.floor(window.innerWidth * 0.15), 200); // Responsive star count
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 2.5;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const opacity = Math.random() * 0.8 + 0.2;
      const animationDelay = Math.random() * 4 + 's';

      star.className = 'star';
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.opacity = opacity.toString();
      star.style.animationDelay = animationDelay;
      
      // Random twinkling animation
      if (Math.random() > 0.7) {
        star.classList.add('animate-twinkle');
      }

      starsRef.current.appendChild(star);
      stars.push({ x, y, size, opacity, animationDelay });
    }

    // Cleanup
    return () => {
      if (starsRef.current) {
        while (starsRef.current.firstChild) {
          starsRef.current.removeChild(starsRef.current.firstChild);
        }
      }
    };
  }, []);

  return (
    <div 
      ref={starsRef} 
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default Stars;
