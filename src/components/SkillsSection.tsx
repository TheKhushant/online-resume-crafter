import React from "react";
import { Code, Database, Globe, Palette, PenTool, Laptop } from "lucide-react";

const SkillsSection: React.FC = () => {
    const skills = [
        {
            category: "Frontend",
            icon: <Globe className="w-6 h-6 text-cosmic-accent" />,
            items: [
                "React", "Tailwind CSS", "HTML5/CSS3", "Bootstrap", "JavaScript",
            ], //"TypeScript",
        },
        // {
        //     category: "Backend",
        //     icon: <Database className="w-6 h-6 text-cosmic-glow" />,
        //     items: [
        //         "NODE.js",
        //         "Express",
        //         "Python",
        //         "OpenAI",
        //         "Gemini API",
        //         "Postman",
        //         "N8N",
        //     ],
        // },
        {
            category: "Programming",
            icon: <Code className="w-6 h-6 text-sky-400" />,
            items: ["JavaScript", "Java", "C++", "C"], //"TypeScript", "Python",
        },
        {
            category: "Design",
            icon: <Palette className="w-6 h-6 text-purple-400" />,
            items: ["Adobe Photoshop", "CoralDraw"], //"Figma", "UI/UX Design", "Canva"
        },
        {
            category: "Tools",
            icon: <Laptop className="w-6 h-6 text-green-400" />,
            items: ["Git", "VS Code", "GitHub", "Postman"], //"npm", "AWS",  "N8N",
        },
        // {
        //     category: "DataBase",
        //     icon: <PenTool className="w-6 h-6 text-orange-400" />,
        //     // items: ["Responsive Design", "Performance Optimization", "Excel"]
        //     items: ["MongoDB", "MySQL"],
        // },
        {
            category: "Operating Systems",
            icon: <PenTool className="w-6 h-6 text-orange-400" />,
            items: ["Windows", "Linux", "Ubuntu"],
        },
    ];

    return (
        <section id="skills" className="py-20 w-full relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-10">
                    <h2
                        data-scroll
                        data-scroll-speed="2"
                        data-scroll-class="fade-in"
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        My <span className="neon-text">Skills</span>
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Here's a comprehensive overview of my technical
                        expertise and professional capabilities
                    </p>
                </div>

                <div
                    data-scroll
                    data-scroll-speed="5"
                    data-scroll-class="fade-in"
                    data-scroll-repeat
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
                >
                    {skills.map((skillGroup, index) => (
                        <div
                            key={index}
                            className="glassmorphism rounded-xl p-6 card-hover"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-cosmic-accent/10 flex items-center justify-center">
                                    {skillGroup.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">
                                    {skillGroup.category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {skillGroup.items.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white hover:bg-gradient-to-r hover:from-cosmic-accent hover:to-cosmic-glow transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
