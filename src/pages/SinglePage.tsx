
import React, { useRef } from 'react';
import Stars from '../components/Stars';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import { journeyData } from './Journey';
import { certificatesData } from './Certificates';
import { activitiesData } from './Activities';
import { projectsData } from './Work';
import { contactInfo, socialLinks } from './Contact';
import { useState } from 'react';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';
import { Calendar, Briefcase, GraduationCap, Code, Award, ExternalLink, Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Users, Globe, BookOpen } from 'lucide-react';

const SinglePage: React.FC = () => {
  const journeyRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);
  const activitiesRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams
      );

      toast.success('Message sent successfully!', {
        description: 'I will get back to you as soon as possible.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message', {
        description: 'Please try again later or contact directly via email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cosmic-dark">
      <Stars />
      <NavBar onNavigate={scrollToSection} journeyRef={journeyRef} certificatesRef={certificatesRef} activitiesRef={activitiesRef} workRef={workRef} contactRef={contactRef} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen w-full flex items-center justify-center pt-16 relative">
        <Hero 
          name="Your Name" 
          title="FULLSTACK DEVELOPER"
        />
      </section>

      {/* Journey Section */}
      <section id="journey" ref={journeyRef} className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                My <span className="neon-text">Journey</span>
              </h1>
              <p className="text-white/70 text-lg">
                The path that led me to where I am today
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-cosmic-accent via-cosmic-glow to-cosmic-blue transform md:-translate-x-1/2"></div>
              
              {/* Timeline Items */}
              <div className="space-y-16">
                {journeyData.map((item, index) => (
                  <div 
                    key={index} 
                    className={`relative flex flex-col md:flex-row ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline Icon */}
                    <div className="absolute left-0 md:left-1/2 top-0 w-12 h-12 bg-cosmic-dark border-2 border-cosmic-accent rounded-full flex items-center justify-center transform -translate-y-1/2 md:-translate-x-1/2 z-10">
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <div className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                    }`}>
                      <div className="glassmorphism p-6 rounded-xl card-hover">
                        <div className="flex items-center mb-3">
                          <Calendar className="w-5 h-5 text-cosmic-glow mr-2" />
                          <span className="text-cosmic-glow font-mono">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-cosmic-purple font-semibold mb-3">{item.company}</p>
                        <p className="text-white/80">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" ref={certificatesRef} className="py-20">
        <div className="container mx-auto px-4 md:px-6">
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
              {certificatesData.map((cert) => (
                <div 
                  key={cert.id}
                  className="glassmorphism rounded-xl p-6 card-hover relative flex flex-col"
                >
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-cosmic-accent to-cosmic-glow rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 mt-2">{cert.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cosmic-purple font-semibold">{cert.issuer}</span>
                    <span className="text-white/60 text-sm">{cert.date}</span>
                  </div>
                  <p className="text-white/80 mb-4 flex-grow">{cert.description}</p>
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
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" ref={activitiesRef} className="py-20">
        <div className="container mx-auto px-4 md:px-6">
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
      </section>

      {/* Work Section */}
      <section id="work" ref={workRef} className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                My <span className="neon-text">Work</span>
              </h1>
              <p className="text-white/70 text-lg">
                Selected projects that showcase my skills and expertise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectsData.map((project) => (
                <div 
                  key={project.id}
                  className="glassmorphism rounded-xl overflow-hidden card-hover"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/80 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-cosmic-accent/10 text-cosmic-accent rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-cosmic-accent transition-colors"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                      
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-cosmic-glow transition-colors"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Contact <span className="neon-text">Me</span>
              </h1>
              <p className="text-white/70 text-lg">
                Let's connect and discuss your next project
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glassmorphism rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cosmic-accent/50 text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cosmic-accent/50 text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cosmic-accent/50 text-white"
                      placeholder="Hello, I'd like to discuss a project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-gradient-to-r from-cosmic-accent to-cosmic-glow text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-cosmic-accent/20"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send size={18} />}
                  </button>
                </form>
              </div>
              
              <div className="flex flex-col gap-8">
                <div className="glassmorphism rounded-xl p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center gap-4 text-white hover:text-cosmic-accent transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-cosmic-accent/10 flex items-center justify-center">
                          {info.icon}
                        </div>
                        <span>{info.text}</span>
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="glassmorphism rounded-xl p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Follow Me</h2>
                  
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-cosmic-accent/10 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-cosmic-accent hover:to-cosmic-glow transition-all duration-300"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePage;
