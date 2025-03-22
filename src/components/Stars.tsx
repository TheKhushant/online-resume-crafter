
import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  twinkleDuration: number;
  moveDuration: number;
  moveDirection: number; // 1 to 8 for different directions
}

const Stars: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const starCount = Math.floor(window.innerWidth * window.innerHeight / 10000) + 50;
      const newStars: Star[] = [];

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 2 + 1,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.7 + 0.3,
          twinkleDuration: Math.random() * 8 + 2,
          moveDuration: Math.random() * 40 + 60, // Slow movement
          moveDirection: Math.floor(Math.random() * 8) + 1 // 1-8 for different directions
        });
      }

      setStars(newStars);
    };

    generateStars();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to determine the movement animation based on direction
  const getMovementAnimation = (direction: number) => {
    const distance = '10px'; // Distance to move
    
    switch(direction) {
      case 1: return `translateY(-${distance})`; // Up
      case 2: return `translate(${distance}, -${distance})`; // Up-Right
      case 3: return `translateX(${distance})`; // Right
      case 4: return `translate(${distance}, ${distance})`; // Down-Right
      case 5: return `translateY(${distance})`; // Down
      case 6: return `translate(-${distance}, ${distance})`; // Down-Left
      case 7: return `translateX(-${distance})`; // Left
      case 8: return `translate(-${distance}, -${distance})`; // Up-Left
      default: return 'translateY(0)';
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {stars.map((star) => {
        // Inline styles for each star's animation
        const starStyle = {
          width: `${star.size}px`,
          height: `${star.size}px`,
          left: `${star.x}%`,
          top: `${star.y}%`,
          opacity: star.opacity,
          animation: `twinkle ${star.twinkleDuration}s ease-in-out infinite, move-${star.moveDirection} ${star.moveDuration}s ease-in-out infinite alternate`
        };
        
        return (
          <div
            key={star.id}
            className="star absolute rounded-full bg-white"
            style={starStyle}
          />
        );
      })}
    </div>
  );
};

export default Stars;
