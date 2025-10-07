import React, { useState } from 'react';
import { Code, Globe, BookOpen, Users, ChevronDown, ChevronUp } from 'lucide-react';

const activitiesData = [
  {
    id: 2,
    title: 'Tech Community Engagement',
    description: 'Regular speaker at local meetups and online communities, sharing knowledge on modern web development practices.',
    icon: <Users className="w-8 h-8 text-white" />,
    color: "from-cyan-400 to-blue-500",
    details: [
      "Participated in local tech meetups and workshops",
      "Shared knowledge on modern web development",
      "Networked with industry professionals",
      "Stayed updated with latest tech trends"
    ]
  },
  {
    id: 3,
    title: 'Intercollegiate PPT Competition',
    description: 'Led a winning team and secured 2nd place among 50+ teams. Presented innovative ideas. Engaged effectively with judges and audience.',
    icon: <BookOpen className="w-8 h-8 text-white" />,
    color: "from-green-400 to-emerald-500",
    details: [
      "Secured 2nd place among 50+ competing teams",
      "Led and coordinated team presentations",
      "Developed innovative project ideas",
      "Effectively communicated with judges and audience"
    ]
  },
  {
    id: 4,
    title: 'Hackathon Participation',
    description: 'Regularly participate in hackathons to challenge myself, learn new technologies, and network with other developers.',
    icon: <Globe className="w-8 h-8 text-white" />,
    color: "from-purple-400 to-pink-500",
    details: [
      "Participated in multiple 24-hour hackathons",
      "Developed innovative solutions under time constraints",
      "Collaborated with diverse teams",
      "Learned new technologies and frameworks"
    ]
  },
];

const ActivitiesSection: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const isExpanded = (index: number) => expandedItems.includes(index);

  return (
    <section className="py-16 w-full relative overflow-hidden" id="activities">
      {/* Background Elements - Same as Skills Section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            data-scroll
            data-scroll-speed="0.5"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            My <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Activities</span>
          </h2>
          <p 
            data-scroll
            data-scroll-speed="0.3"
            className="text-white/70 text-lg"
          >
            Professional and personal activities that keep me engaged and growing
          </p>
        </div>

        {/* Activities Grid */}
        <div 
          data-scroll
          data-scroll-speed="0.8"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {activitiesData.map((activity, index) => (
            <div 
              key={activity.id}
              className="relative group"
            >
              {/* Activity Card */}
              <div 
                className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer h-full"
                onClick={() => toggleItem(index)}
              >
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.color} flex items-center justify-center shadow-lg mb-4 mx-auto`}>
                  {activity.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white text-center mb-3">
                  {activity.title}
                </h3>
                
                <p className="text-white/80 text-sm text-center leading-relaxed mb-4">
                  {activity.description}
                </p>

                {/* Expand/Collapse Button */}
                <div className="flex justify-center">
                  <button className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-1 text-sm">
                    {isExpanded(index) ? (
                      <>
                        <span>Show Less</span>
                        <ChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        <span>Learn More</span>
                        <ChevronDown size={16} />
                      </>
                    )}
                  </button>
                </div>

                {/* Additional Details - Expandable */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  isExpanded(index) ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-white font-medium mb-3 flex items-center gap-2 text-sm justify-center">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {activity.details.map((detail, idx) => (
                        <li 
                          key={idx}
                          className="text-white/70 text-sm flex items-start gap-2 transition-all duration-300 hover:text-white/90"
                        >
                          <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover Gradient Background */}
                <div 
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                />
              </div>

              {/* Floating Effect */}
              <div 
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-10 blur-sm transition-all duration-500 -z-10"
                style={{
                  transform: 'translateY(0) scale(1)'
                }}
              />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div 
          data-scroll
          data-scroll-speed="0.3"
          className="text-center mt-12"
        >
          <p className="text-white/60 text-sm">
            Continuously engaging in activities that enhance my skills and professional network
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .group {
          animation: fadeInUp 0.6s ease-out forwards;
          animation-delay: calc(var(--index, 0) * 0.1s);
        }

        /* Smooth transitions for reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .group {
            animation: none;
          }
          * {
            transition-duration: 0.1s !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ActivitiesSection;