import React from "react";
import Stars from "../components/Stars";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import JourneySection from "../components/JourneySection";
import CertificatesSection from "../components/CertificatesSection";
import ActivitiesSection from "../components/ActivitiesSection";
import WorkSection from "../components/WorkSection";
import ContactSection from "../components/ContactSection";
import SkillsSection from "../components/SkillsSection";
import SocialIcons from "../components/SocialIcons";
import ExperienceSection from "@/components/ExperienceSection";
const Index: React.FC = () => {
    return (
        <div className="min-h-screen bg-cosmic-dark relative">
            <Stars />
            <NavBar />
            <div id="home" className="relative">
                <Hero name="KHUSHANT WANKHEDE" title="FULLSTACK DEVELOPER" />
                <div className="md:absolute bottom-12 left-0 right-0 flex justify-center">
                    <SocialIcons />
                </div>
            </div>
            <div id="skills">
                <SkillsSection />
            </div>
            <div id="experience">
                <ExperienceSection />
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
