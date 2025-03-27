"use client"

import type React from "react"
import { useEffect, useState } from "react"

interface Star {
  id: number
  size: number
  x: number
  y: number
  opacity: number
  animationDuration: number
  moveSpeed: number // Added for vertical movement speed
}

const Stars: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generateStars = () => {
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 10000) + 50
      const newStars: Star[] = []

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 2 + 1,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.7 + 0.3,
          animationDuration: Math.random() * 8 + 2,
          moveSpeed: Math.random() * 15 + 5, // Random speed between 5-20s
        })
      }

      setStars(newStars)
    }

    generateStars()

    const handleResize = () => {
      generateStars()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animation: `twinkle ${star.animationDuration}s ease-in-out infinite, moveUpward ${star.moveSpeed}s linear infinite`,
            position: "absolute",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
      ))}
      {/* jsx */}
      <style>{`   
                @keyframes twinkle {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                }
                
                @keyframes moveUpward {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(-100vh);
                    }
                }
            `}</style>
    </div>
  )
}

export default Stars

