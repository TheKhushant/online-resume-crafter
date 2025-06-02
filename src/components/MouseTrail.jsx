import { useEffect, useRef, useState } from 'react';

const TRAIL_COUNT = 10;
const TRAIL_FADE_DELAY = 50; // Delay before trail starts fading
const TRAIL_FADE_SPEED = 0.3; // Lerp factor (0 = no motion, 1 = instant)

const MouseTrail = () => {
  const [positions, setPositions] = useState(
    Array(TRAIL_COUNT).fill({ x: 0, y: 0 })
  );

  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef();
  const lastMoveTimeRef = useRef(Date.now());

  // Linear interpolation helper
  const lerp = (a, b, t) => a + (b - a) * t;

  const animate = () => {
    setPositions((prevPositions) => {
      const newPositions = [...prevPositions];

      // First one follows the cursor directly
      newPositions[0] = {
        x: lerp(prevPositions[0].x, mouseRef.current.x, TRAIL_FADE_SPEED),
        y: lerp(prevPositions[0].y, mouseRef.current.y, TRAIL_FADE_SPEED),
      };

      // Each dot follows the one before it
      for (let i = 1; i < TRAIL_COUNT; i++) {
        newPositions[i] = {
          x: lerp(prevPositions[i].x, prevPositions[i - 1].x, TRAIL_FADE_SPEED),
          y: lerp(prevPositions[i].y, prevPositions[i - 1].y, TRAIL_FADE_SPEED),
        };
      }

      return newPositions;
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleMouseMove = (e) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
    lastMoveTimeRef.current = Date.now();
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <>
      {positions.map((pos, i) => {
        const opacity = 1 - i / TRAIL_COUNT;
        const size = 12 - i * 0.3;

        return (
          <div
            key={i}
            className="fixed pointer-events-none z-50 rounded-full"
            style={{
              left: pos.x - size / 2,
              top: pos.y - size / 2,
              width: size,
              height: size,
              opacity,
              backgroundColor: 'orange',
              transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
              transform: `translate3d(0, 0, 0)`, // force GPU acceleration
            }}
          />
        );
      })}
    </>
  );
};

export default MouseTrail;
