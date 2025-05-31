
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Swiggy Clone',
    description: 'A full-stack food delivery application with user authentication.',
    technologies: ['React.js', 'Tailwind Css', 'Custom API', 'Node.js'],
    image: ["img/swi.png"],
    github: 'https://github.com/TheKhushant/Swiggy-CLone-Practice',
    liveDemo: 'https://swiggy-c-lone-practice-psi.vercel.app/'
  },
  {
    id: 2,
    title: 'Image Filter Website',
    description: 'A web application that applies various filters to images.',
    technologies: ['Html - CSS','Javascript', 'Python', 'OpenCV (cv2)',' NumPy', 'Flask'],
    image: ["img/IP.png"],
    github: 'https://github.com/TheKhushant/Image_Filter',
    liveDemo: 'https://image-filter-4pce.onrender.com/'
  },
  {
    id: 3,
    title: 'Portfolio Website (current)',
    description: 'A responsive, animated portfolio website to showcase skills and projects.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: ["img/port.png"],
    github: 'https://github.com/TheKhushant/online-resume-crafter',
    liveDemo: 'https://portfolionew-orcin-pi.vercel.app/'
  },
  {
    id: 4,
    title: 'Railway Employee Management System (Upcoming)',
    description: 'A Advanced Feature system for managing railway employee Duty, auto scheduling, and many more.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB','APIs', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Socket.io', 'Redux'],
    image: ["img/rail.jpg"],
    github: '#',
    liveDemo: '#'
  },

  // {
  //   id: 4,
  //   title: 'Weather Dashboard',
  //   description: 'A weather application providing real-time forecasts, historical data, and location-based weather information.',
  //   technologies: ['React', 'OpenWeatherMap API', 'Chart.js'],
  //   image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
  //   github: '#',
  //   liveDemo: '#'
  // },
  // {
  //   id: 5,
  //   title: 'Task Management App',
  //   description: 'A collaborative task management tool with real-time updates, task assignment, and progress tracking.',
  //   technologies: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
  //   image: ['img/task.png'],
  //   github: '#',
  //   liveDemo: '#'
  // }
];

const WorkSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-cosmic-dark">
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="neon-text">Work</span>
            </h1>
            <p className="text-white/70 text-lg">
              Selected projects that showcase my skills and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <div 
                key={project.id}
                className="glassmorphism rounded-xl overflow-hidden card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-cosmic-accent/40 text-pink-200 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
