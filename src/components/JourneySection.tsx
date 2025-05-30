
import React from 'react';
import { Calendar, Briefcase, GraduationCap, Code } from 'lucide-react';

const journeyData = [
    {
      year: '2024 - Present',
      title: 'MCA (AI/ML)',
      company: 'Shree Ramdeobaba University',
      description: '95.66 MCA-CET Score | AI & ML Specialization | Smart India Hackathon Finalist | GFG ICPC 2.0 Participant | Developed Women Safety Web App & AI-Powered Notes Sharing System | Skills: C++, Java, React.js, DSA, Problem-Solving, Leadership',
      icon: <Briefcase className="w-6 h-6 text-cosmic-accent" />
    },
    // {
    //   year: '2024',
    //   title: 'Frontend Developer Intern',
    //   company: 'HNK Securities Pvt. Ltd.',
    //   description: 'Developed a responsive dashboard using React.js | Enhanced UI/UX with modern design principles | Tools: CorelDRAW, Photoshop, Figma | Improved accessibility & performance',
    //   icon: <Briefcase className="w-6 h-6 text-cosmic-accent" />
    // },
    {
      year: '2021 - 2024',
      title: 'BCCA',
      company: 'Kamla Nehru Mahavidyalaya',
      description: 'RTMNU | CGPA: 6.9 | Led & Organized PPT Competition 2023 | Participated in KDK Coding Competitions | Skills: JavaScript, Web Development, Git, HTML/CSS, SQL, Linux, Team Collaboration',
      icon: <Code className="w-6 h-6 text-cosmic-accent" />
    },
    // {
    //   year: '2021',
    //   title: 'Cybersecurity Certification',
    //   company: 'Coursera (Microsoft)',
    //   description: 'Completed with 90% | Hands-on experience with security tools & threat analysis | Developed security-focused mini-projects',
    //   icon: <Code className="w-6 h-6 text-cosmic-accent" />
    // },
    {
      year: '2019 - 2021',
      title: 'HSC (Science)',
      company: 'Dr. Vasantrao Naik Government College',
      description: 'Percentage: 74.5% | Science Stream | Developed a Java-based Library Management System as a school project | Gained foundational programming & database skills',
      icon: <Code className="w-6 h-6 text-cosmic-accent" />
    },
    {
      year: '2019',
      title: 'SSC',
      company: 'Priyadarshani Convent',
      description: 'Percentage: 63.5% | Represented school in Priyadarshani Bhagwati College Science Exhibition | Built a working model for environmental awareness',
      icon: <GraduationCap className="w-6 h-6 text-cosmic-accent" />
    }
  
];

const JourneySection: React.FC = () => {
  return (
    <div className="min-h-screen bg-cosmic-dark">
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

export default JourneySection;
