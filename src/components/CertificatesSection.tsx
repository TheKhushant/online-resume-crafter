import React, { useState } from "react";
import { Award, ExternalLink, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const certificateCategories: {
    [key: string]: {
        description: string;
        images: string[];
    };
} = {
    UI: {
        description:
            "Comprehensive training on UI/UX design, including wireframing, prototyping, and usability testing.",
        images: [
            "Certi/UI/Certi1.png",
            "Certi/UI/Certi2.png",
            "Certi/UI/Certi3.png",
            "Certi/UI/Certi4.png",
            "Certi/UI/Certi5.png",
        ],
    },
    Cyber: {
        description:
        "In-depth courses on cybersecurity fundamentals, encryption, ethical hacking, and secure systems.",
        images: [
            "Certi/Cyber/Certi1.png",
        ],
    },
    Project_Management: {
        description:
            "Comprehensive training on project management methodologies, tools, and best practices.",
        images: [
            "Certi/Project_Management/Certi1.png",
        ],
    },
    Smart_India_Hackathon: {
        description:
            "Participated in the Smart India Hackathon 2024, a nationwide initiative to provide students with a platform to solve real-world problems.",
        images: [
            "Certi/Hackthon/SmartIndia.png",
        ],
    },
    SMACKATHON_24Hrs_Hackathon: {
        description:
            "Participated in the SMACKATHON 24Hrs Hackathon, a 24-hour coding challenge to develop innovative solutions.",
        images: [
            "Certi/Hackthon/SMACKATHON.png",
        ],
    },
    GFG_ICPC: {
        description:
            "Participated in the GFG ICPC 2.0, a competitive programming event focused on algorithmic challenges.",
        images: [
            "Certi/Hackthon/GFG.png",
        ],
    },
    PPT: {
        description:
            "Scored 2nd Rank in the PPT competition organized by KAMLA NEHRU MAHAVIDYALAYA, Nagpur.",
        images: [
            "Certi/Hackthon/PPPT.png",
        ],
    },
    JAVA: {
        description:
            "Hands-on course covering core Java concepts, object-oriented programming, and application development.",
        images: [
            "Certi/Tech/java.png",
        ],
    },
    Frontend: {
        description:
            "Hands-on course covering HTML, CSS, JavaScript, React, and responsive web design.",
        images: [
            "Certi/Tech/Frontend.png",
        ],
    },
};

const certificatesData = [
    {
        id: 1,
        title: "UI/UX Design Certification",
        issuer: "Google, Coursera",
        date: "Dec 2024",
        description: "UI/UX foundational training including prototyping and usability.",
        category: "UI",
    },
    {
        id: 2,
        title: "Cybersecurity Certification",
        issuer: "Microsoft, Coursera",
        date: "Mar 2025",
        description: "Network security, encryption, and ethical hacking.",
        category: "Cyber",
    },
    {
        id: 3,
        title: "Project Management",
        issuer: "Google, Coursera",
        date: "Mar 2025",
        description: "Project management principles and practices.",
        category: "Project_Management",
    },
    {
        id: 4,
        title: "SMART INDIA HACKATHON 2024",
        issuer: "Ramdeobaba College",
        date: "Sep 2024",
        description: "Participated in the Smart India Hackathon 2024, a nationwide initiative to provide students with a platform to solve real-world problems.",
        category: "Smart_India_Hackathon",
    },
    {
        id: 5,
        title: "SMACKATHON 24Hrs Hackathon",
        issuer: "COJAG, YCCE",
        date: "March 2024",
        description: "Participated in the SMACKATHON 24Hrs Hackathon, a 24-hour coding challenge to develop innovative solutions.",
        category: "SMACKATHON_24Hrs_Hackathon",
    },
    {
        id: 6,
        title: "GFG ICPC 2.0",
        issuer: "GeeksforGeeks",
        date: "October 2025",
        description: "Certification for Achievements in the GFG ICPC 2.0 competitive programming event.",
        category: "GFG_ICPC",
    },
    {
        id: 7,
        title: "PPT Completion Certificate",
        issuer: "KAMLA NEHRU MAHAVIDYALAYA",
        date: "June 2022",
        description: "Scored 2nd Rank in the PPT competition organized by KAMLA NEHRU MAHAVIDYALAYA, Nagpur.",
        category: "PPT", 
    },
    {
        id: 8,
        title: "Java Programming Certification",
        issuer: "Disha Computer Institute",
        date: "October 2022",
        description: "Hands-on course covering core Java concepts.",
        category: "JAVA", 
    },
    {
        id: 9,
        title: "Frontend Web Development",
        issuer: "Disha Computer Institute",
        date: "June 2022",
        description: "Training on HTML, CSS, JavaScript, React, and responsive web design.",
        category: "Frontend", 
    },
];

const CertificatesSection: React.FC = () => {
    const [viewMore, setViewMore] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const handleView = (category: string) => {
        setActiveCategory(category);
    };

    const handleClose = () => {
        setActiveCategory(null);
    };

    const certificates = viewMore ? certificatesData : certificatesData.slice(0, 4);

    return (
        <div className="min-h-screen bg-cosmic-dark relative z-0">
            <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            My <span className="neon-text">Certificates</span>
                        </h1>
                        <p className="text-white/70 text-lg">
                            Professional certifications and courses I've completed
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
                                <p className="text-white/80 mb-4 flex-grow">{cert.description}</p>
                                <button
                                    onClick={() => handleView(cert.category)}
                                    className="flex items-center gap-2 text-cosmic-accent hover:text-cosmic-glow transition-colors mt-auto"
                                >
                                    <span>View Certificate</span>
                                    <ExternalLink size={16} />
                                </button>
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

            {/* Modal */}
            {activeCategory && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4">
                    <div className="bg-cosmic-dark rounded-xl shadow-lg max-w-3xl w-full relative overflow-hidden">
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-white hover:text-red-500 z-10"
                        >
                            <X size={24} />
                        </button>
                        <div className="p-6">
                            <h2 className="text-white text-2xl font-bold mb-4">
                                {activeCategory} Certificates
                            </h2>
                            <p className="text-white/80 mb-6">
                                {certificateCategories[activeCategory].description}
                            </p>
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000 }}
                            >
                                {certificateCategories[activeCategory].images.map((img, idx) => (
                                    <SwiperSlide key={idx}>
                                        <img
                                            src={img}
                                            alt={`Certificate ${idx + 1}`}
                                            className="rounded-lg mx-auto max-h-[500px] w-auto"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CertificatesSection;