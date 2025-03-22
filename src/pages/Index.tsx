
import React from 'react';
import Stars from '../components/Stars';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import { ThemeProvider } from '../components/ThemeProvider';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Stars />
      <ThemeProvider>
        <NavBar />
      </ThemeProvider>
      <Hero 
        name="Your Name" 
        title="FULLSTACK DEVELOPER"
      />
      <Skills />
    </div>
  );
};

export default Index;
