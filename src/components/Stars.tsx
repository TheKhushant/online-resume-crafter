import React, { useEffect, useState } from "react";

interface Star {
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    animationDuration: number;
}

const Stars: React.FC = () => {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        const generateStars = () => {
            const starCount =
                Math.floor((window.innerWidth * window.innerHeight) / 10000) +
                50;
            const newStars: Star[] = [];

            for (let i = 0; i < starCount; i++) {
                newStars.push({
                    id: i,
                    size: Math.random() * 2 + 1,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    opacity: Math.random() * 0.7 + 0.3,
                    animationDuration: Math.random() * 8 + 2,
                });
            }

            setStars(newStars);
        };

        generateStars();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-twinkle"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default Stars;
