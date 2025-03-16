
import React from 'react';
import Stars from '../components/Stars';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-cosmic-dark relative">
      <Stars />
      <NavBar />
      <Hero 
        name="Your Name" 
        title="FULLSTACK DEVELOPER"
      />
      <Skills />
    </div>
  );
};

export default Index;
