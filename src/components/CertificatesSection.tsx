
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certificatesData = [
  {
    id: 1,
    title: 'Advanced React & Redux',
    issuer: 'Udemy',
    date: 'May 2023',
    description: 'In-depth training on advanced React patterns, Redux architecture, and performance optimization techniques.',
    link: '#'
  },
  {
    id: 2,
    title: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    date: 'January 2023',
    description: 'Professional certification validating expertise in developing, deploying, and debugging cloud-based applications using AWS.',
    link: '#'
  },
  {
    id: 3,
    title: 'TypeScript Masterclass',
    issuer: 'Frontend Masters',
    date: 'October 2022',
    description: 'Comprehensive course on TypeScript type systems, interfaces, generics, and advanced patterns.',
    link: '#'
  },
  {
    id: 4,
    title: 'Fullstack Development Bootcamp',
    issuer: 'Coding Academy',
    date: 'June 2022',
    description: 'Intensive bootcamp covering modern web development including Node.js, Express, React, and MongoDB.',
    link: '#'
  }
];

const CertificatesSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-cosmic-dark">
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="neon-text">Certificates</span>
            </h1>
            <p className="text-white/70 text-lg">
              Professional certifications and courses I've completed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificatesData.map((cert) => (
              <div 
                key={cert.id}
                className="glassmorphism rounded-xl p-6 card-hover relative flex flex-col"
              >
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-cosmic-accent to-cosmic-glow rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 mt-2">{cert.title}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cosmic-purple font-semibold">{cert.issuer}</span>
                  <span className="text-white/60 text-sm">{cert.date}</span>
                </div>
                <p className="text-white/80 mb-4 flex-grow">{cert.description}</p>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cosmic-accent hover:text-cosmic-glow transition-colors mt-auto"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesSection;
