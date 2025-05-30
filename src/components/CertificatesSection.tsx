import React, { useState } from "react";
import { Award, ExternalLink } from "lucide-react";

const certificatesData = [
    {
        id: 1,
        title: "UI/UX Design Certification",
        issuer: "Coursera",
        date: "May 2023",
        description:
            "Comprehensive training on user interface and experience design, focusing on wireframing, prototyping, and usability testing.",
        link: "#",
    },
    {
        id: 2,
        title: "Cybersecurity Certification",
        issuer: "Microsoft, Coursera",
        date: "January 2023",
        description:
            "Deep dive into network security, ethical hacking, encryption techniques, and best practices for securing applications and data.",
        link: "#",
    },
    {
        id: 3,
        title: "Java Programming Certification",
        issuer: "Disha Computer Institute",
        date: "October 2022",
        description:
            "Hands-on course covering core Java concepts, object-oriented programming, multithreading, and database connectivity using JDBC.",
        link: "#",
    },
    {
        id: 4,
        title: "Frontend Web Development",
        issuer: "Disha Computer Institute",
        date: "June 2022",
        description:
            "Practical training on HTML, CSS, JavaScript, React, and responsive web design for building modern, user-friendly websites.",
        link: "#",
    },
    {
        id: 5,
        title: "Frontend Web Development",
        issuer: "Disha Computer Institute",
        date: "June 2022",
        description:
            "Practical training on HTML, CSS, JavaScript, React, and responsive web design for building modern, user-friendly websites.",
        link: "#",
    },
    {
        id: 6,
        title: "Frontend Web Development",
        issuer: "Disha Computer Institute",
        date: "June 2022",
        description:
            "Practical training on HTML, CSS, JavaScript, React, and responsive web design for building modern, user-friendly websites.",
        link: "#",
    },
    {
        id: 7,
        title: "Frontend Web Development",
        issuer: "Disha Computer Institute",
        date: "June 2022",
        description:
            "Practical training on HTML, CSS, JavaScript, React, and responsive web design for building modern, user-friendly websites.",
        link: "#",
    },
];

const CertificatesSection: React.FC = () => {
    const [viewMore, setViewMore] = useState(false);

    const certificates = viewMore
        ? certificatesData
        : certificatesData.slice(0, 4);

    return (
        <div className="min-h-screen bg-cosmic-dark">
            <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            My <span className="neon-text">Certificates</span>
                        </h1>
                        <p className="text-white/70 text-lg">
                            Professional certifications and courses I've
                            completed
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certificates.map((cert) => (
                            <div
                                key={cert.id}
                                className="glassmorphism rounded-xl p-6 card-hover relative flex flex-col"
                            >
                                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-cosmic-accent to-cosmic-glow rounded-full flex items-center justify-center shadow-lg">
                                    <Award className="w-6 h-6 text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 mt-2">
                                    {cert.title}
                                </h3>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-cosmic-purple font-semibold">
                                        {cert.issuer}
                                    </span>
                                    <span className="text-white/60 text-sm">
                                        {cert.date}
                                    </span>
                                </div>
                                <p className="text-white/80 mb-4 flex-grow">
                                    {cert.description}
                                </p>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-cosmic-accent hover:text-cosmic-glow transition-colors mt-auto"
                                >
                                    <span>View Certificate</span>
                                    <ExternalLink size={16} />
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="text-center py-10">
                        <button
                            onClick={() => setViewMore(!viewMore)}
                            className="px-6 py-3 h-12 rounded-lg glassmorphism text-white font-medium shadow-lg hover:shadow-cosmic-glow/20 transition-all duration-300 hover:-translate-y-1"
                        >
                            {viewMore ? "View Less" : "View More"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificatesSection;
