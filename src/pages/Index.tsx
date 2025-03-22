
import React from 'react';
import Stars from '../components/Stars';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';

const Index: React.FC = () => {
  // This component exists for backward compatibility
  // It's no longer used since we've moved to a single page approach
  return (
    <div className="min-h-screen bg-cosmic-dark relative">
      <Stars />
      <NavBar 
        onNavigate={() => {}} 
        journeyRef={{current: null}} 
        certificatesRef={{current: null}} 
        activitiesRef={{current: null}} 
        workRef={{current: null}} 
        contactRef={{current: null}} 
      />
      <Hero 
        name="Your Name" 
        title="FULLSTACK DEVELOPER"
      />
    </div>
  );
};

export default Index;
