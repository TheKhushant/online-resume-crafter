import React from "react";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string;
  responsibilities: string[];
}

const experienceData: ExperienceItem[] = [
  {
    year: "May 2024 - July 2024",
    title: "Teaching",
    company: "Disha Computer Institute",
    description:
      "At Disha Computer Institute, I taught various programming languages including C, C++, Java, and frontend technologies like HTML, CSS, Bootstrap. I also trained students in software tools such as CorelDRAW, Photoshop, and AutoCAD, helping them build strong foundations in both coding and design.",
    responsibilities: [
     "Taught C, C++, Java, and frontend technologies: HTML, CSS, Bootstrap",
     "Trained students in software tools: CorelDRAW, Photoshop, AutoCAD",
     "Built and deployed mini-projects to enhance practical knowledge",
     "Conducted hands-on sessions to reinforce learning",
    ],
  },
  {
    year: "Feb 2022 - Dec 2023",
    title: "Website Developer + Video Editor",
    company: "HNK Securities Pvt. Ltd.",
    description:
      "At HNK Securities Pvt. Ltd., I worked as a Website Developer and Video Editor, contributing to the company’s digital presence. My responsibilities included building responsive and reusable front-end components and editing promotional videos for digital marketing campaigns.",
    responsibilities: [
      "Built reusable UI components using React and TailwindCSS",
      "Developed interactive and responsive web pages",
      "Enhanced SEO performance and loading speed",
      "Edited promotional and training videos for company branding",

    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="bg-cosmic-dark py-20" id="experience">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="neon-text">Experience</span>
          </h2>
          <p className="text-white/70 text-lg">Where I put my skills into action</p>
        </div>

        <div className="space-y-10">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="glassmorphism p-6 rounded-xl card-hover border border-white/10"
            >
              <div className="flex items-center gap-3 text-cosmic-glow mb-2">
                <Briefcase className="w-5 h-5" />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <div className="flex items-center gap-3 text-white/70 mb-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-mono">{item.year}</span>
              </div>
              <p className="text-cosmic-purple font-medium mb-3">{item.company}</p>
              <p className="text-white/80 mb-3">{item.description}</p>
              <ul className="list-disc list-inside text-white/70 space-y-1">
                {item.responsibilities.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
