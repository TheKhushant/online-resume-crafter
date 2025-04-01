
import React from 'react';
import { Code, Globe, BookOpen, Users } from 'lucide-react';

const activitiesData = [
  {
    id: 1,
    title: 'Open Source Contributions',
    description: 'Active contributor to several open-source projects, including React libraries and developer tools.',
    icon: <Code className="w-12 h-12 text-cosmic-glow" />,
  },
  {
    id: 2,
    title: 'Tech Community Engagement',
    description: 'Regular speaker at local meetups and online communities, sharing knowledge on modern web development practices.',
    icon: <Users className="w-12 h-12 text-cosmic-glow" />,
  },
  {
    id: 3,
    title: 'PPt comp',
    description: 'Writing articles and tutorials on web development, helping others learn new technologies and best practices.',
    icon: <BookOpen className="w-12 h-12 text-cosmic-glow" />,
  },
  {
    id: 4,
    title: 'Hackathon Participation',
    description: 'Regularly participate in hackathons to challenge myself, learn new technologies, and network with other developers.',
    icon: <Globe className="w-12 h-12 text-cosmic-glow" />,
  },
];

const ActivitiesSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-cosmic-dark">
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="neon-text">Activities</span>
            </h1>
            <p className="text-white/70 text-lg">
              Professional and personal activities that keep me engaged and growing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activitiesData.map((activity) => (
              <div 
                key={activity.id}
                className="glassmorphism rounded-xl p-8 card-hover relative overflow-hidden group"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cosmic-accent/0 to-cosmic-glow/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                    {activity.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{activity.title}</h3>
                  <p className="text-white/80">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
