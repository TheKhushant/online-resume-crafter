
import React from 'react';
import Stars from '../components/Stars';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import JourneySection from '../components/JourneySection';
import CertificatesSection from '../components/CertificatesSection';
import ActivitiesSection from '../components/ActivitiesSection';
import WorkSection from '../components/WorkSection';
import ContactSection from '../components/ContactSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-cosmic-dark relative">
      <Stars />
      <NavBar />
      <div id="home">
        <Hero 
          name="Your Name" 
          title="FULLSTACK DEVELOPER"
        />
      </div>
      <div id="journey">
        <JourneySection />
      </div>
      <div id="certificates">
        <CertificatesSection />
      </div>
      <div id="activities">
        <ActivitiesSection />
      </div>
      <div id="work">
        <WorkSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
