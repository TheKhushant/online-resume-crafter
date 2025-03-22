import React from 'react';
import { Calendar, Briefcase, GraduationCap, Code } from 'lucide-react';

export const journeyData = [
  {
    year: '2022 - Present',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    description: 'Leading development of enterprise applications using React, Node.js, and AWS.',
    icon: <Briefcase className="w-6 h-6 text-cosmic-accent" />
  },
  {
    year: '2020 - 2022',
    title: 'Frontend Developer',
    company: 'Digital Solutions Ltd.',
    description: 'Developed responsive web applications using React and TypeScript.',
    icon: <Code className="w-6 h-6 text-cosmic-accent" />
  },
  {
    year: '2018 - 2020',
    title: 'Junior Developer',
    company: 'StartUp Tech',
    description: 'Worked on various web development projects using JavaScript and PHP.',
    icon: <Code className="w-6 h-6 text-cosmic-accent" />
  },
  {
    year: '2014 - 2018',
    title: 'BSc Computer Science',
    company: 'University of Technology',
    description: 'Graduated with honors, specializing in software engineering.',
    icon: <GraduationCap className="w-6 h-6 text-cosmic-accent" />
  }
];

const Journey: React.FC = () => {
  return (
    <div className="min-h-screen bg-cosmic-dark">
      <Stars />
      <NavBar />
      
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="neon-text">Journey</span>
            </h1>
            <p className="text-white/70 text-lg">
              The path that led me to where I am today
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-cosmic-accent via-cosmic-glow to-cosmic-blue transform md:-translate-x-1/2"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {journeyData.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-12 h-12 bg-cosmic-dark border-2 border-cosmic-accent rounded-full flex items-center justify-center transform -translate-y-1/2 md:-translate-x-1/2 z-10">
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                  }`}>
                    <div className="glassmorphism p-6 rounded-xl card-hover">
                      <div className="flex items-center mb-3">
                        <Calendar className="w-5 h-5 text-cosmic-glow mr-2" />
                        <span className="text-cosmic-glow font-mono">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-cosmic-purple font-semibold mb-3">{item.company}</p>
                      <p className="text-white/80">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
