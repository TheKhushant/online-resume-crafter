import React, { useState, useEffect } from "react";
import { ArrowRight, Contact, Download, Phone } from "lucide-react";

interface HeroProps {
    name: string;
    title: string;
}

const Hero: React.FC<HeroProps> = ({ name, title }) => {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [displayTitle, setDisplayTitle] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    // Typewriter effect logic
    useEffect(() => {
        const titles = ["PROGRAMMER", "TECH ENTHUSIAST", "CODER", "STUDENT"];
        const currentTitle = titles[currentTitleIndex];

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    // Adding characters
                    if (displayTitle.length < currentTitle.length) {
                        setDisplayTitle(
                            currentTitle.substring(0, displayTitle.length + 1)
                        );
                    } else {
                        // Wait a bit before starting to delete
                        setTimeout(() => setIsDeleting(true), 1500);
                    }
                } else {
                    // Removing characters
                    if (displayTitle.length > 0) {
                        setDisplayTitle(
                            displayTitle.substring(0, displayTitle.length - 1)
                        );
                    } else {
                        setIsDeleting(false);
                        setCurrentTitleIndex(
                            (prevIndex) => (prevIndex + 1) % titles.length
                        );
                    }
                }
            },
            isDeleting ? 50 : 100
        ); // Faster deletion, slower typing

        return () => clearTimeout(timeout);
    }, [displayTitle, isDeleting, currentTitleIndex]);

    // Blinking cursor
    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="min-h-screen w-full flex items-center justify-center pt-16 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                    {/* Profile Image */}
                    <div
                        data-scroll
                        data-scroll-speed="5"
                        data-scroll-class="fade-in"
                        data-scroll-repeat
                        className="w-full lg:w-5/12 flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-xl overflow-hidden border-opacity-20 shadow-xl animate-float">
                                <img
                                    src="/img/PNG.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cosmic-glow to-cosmic-accent opacity-30 blur-sm -z-10"></div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-7/12 text-center lg:text-left space-y-6 lg:space-y-8">
                        <h1
                            data-scroll
                            data-scroll-speed="3"
                            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
                        >
                            <span className="neon-text uppercase">{name}</span>
                        </h1>

                        <h2
                            data-scroll
                            data-scroll-speed="3"
                            className="text-xl sm:text-2xl md:text-3xl text-white font-mono mt-4"
                        >
                            <span className="inline-block">I'M THE</span>{" "}
                            <span className="inline-block">{displayTitle}</span>
                            {showCursor && (
                                <span className="animate-cursor-blink">|</span>
                            )}
                        </h2>
                        {/* buttons after Typewriter */}
                        <div
                            data-scroll
                            data-scroll-speed="3"
                            className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8"
                        >
                            <div className="hidden md:flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
                                <button
                                    onClick={() => scrollToSection("contact")}
                                    className="px-6 py-3 h-12 rounded-lg bg-gradient-to-r from-yellow-500 via-green-400 to-blue-500 text-white font-medium shadow-lg shadow-cosmic-accent/20 hover:shadow-cosmic-accent/40 transition-all duration-300 flex items-center gap-2 hover:-translate-y-1"
                                >
                                    Contact Me
                                    <Phone size={18} />
                                </button>

                                <button
                                    onClick={() => scrollToSection("work")}
                                    className="px-6 py-3 h-12 rounded-lg glassmorphism text-white font-medium shadow-lg hover:shadow-cosmic-glow/20 transition-all duration-300 hover:-translate-y-1"
                                >
                                    View My Work
                                </button>
                                <a
                                    href="https://drive.google.com/file/d/1ctS8cDLXQExxi2gkK8xWWEs-Dw3ZZRKO/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 h-12 rounded-lg bg-gradient-to-r from-cosmic-blue to-cosmic-purple text-white font-medium shadow-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 hover:-translate-y-1"
                                >
                                    Download CV
                                    <Download size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
