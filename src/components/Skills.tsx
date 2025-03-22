
import React from 'react';
import { Code, Brush, Monitor, Server, Database, Palette, Braces, Globe } from 'lucide-react';

interface SkillProps {
  icon: React.ReactNode;
  name: string;
}

const Skill: React.FC<SkillProps> = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-5 glassmorphism rounded-lg card-hover text-center">
      <div className="text-cosmic-accent text-3xl">{icon}</div>
      <p className="text-white font-medium">{name}</p>
    </div>
  );
};

const Skills: React.FC = () => {
  const skills = [
    { icon: <Code size={32} />, name: "Frontend Development" },
    { icon: <Server size={32} />, name: "Backend Development" },
    { icon: <Database size={32} />, name: "Database Management" },
    { icon: <Brush size={32} />, name: "UI/UX Design" },
    { icon: <Monitor size={32} />, name: "Responsive Design" },
    { icon: <Palette size={32} />, name: "Graphic Design" },
    { icon: <Braces size={32} />, name: "API Development" },
    { icon: <Globe size={32} />, name: "Web Technologies" },
  ];

  return (
    <section className="py-16 w-full relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center neon-text">My Skills</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <Skill 
              key={index} 
              icon={skill.icon} 
              name={skill.name} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
