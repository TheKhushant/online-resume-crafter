import React, { useState, useEffect } from 'react';
import Stars from '../components/Stars';
import NavBar from '../components/NavBar';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';

export const contactInfo = [
  {
    icon: <Mail className="w-5 h-5 text-cosmic-glow" />,
    text: 'email@example.com',
    href: 'mailto:email@example.com'
  },
  {
    icon: <Phone className="w-5 h-5 text-cosmic-glow" />,
    text: '+1 (123) 456-7890',
    href: 'tel:+11234567890'
  },
  {
    icon: <MapPin className="w-5 h-5 text-cosmic-glow" />,
    text: 'New York, NY, USA',
    href: '#'
  }
];

export const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    href: 'https://github.com/',
    label: 'GitHub'
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: 'https://linkedin.com/',
    label: 'LinkedIn'
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    href: 'https://twitter.com/',
    label: 'Twitter'
  }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init("YOUR_USER_ID");
  }, []);

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

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-cosmic-glow" />,
      text: 'email@example.com',
      href: 'mailto:email@example.com'
    },
    {
      icon: <Phone className="w-5 h-5 text-cosmic-glow" />,
      text: '+1 (123) 456-7890',
      href: 'tel:+11234567890'
    },
    {
      icon: <MapPin className="w-5 h-5 text-cosmic-glow" />,
      text: 'New York, NY, USA',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/',
      label: 'LinkedIn'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: 'https://twitter.com/',
      label: 'Twitter'
    }
  ];

  return (
    <div className="min-h-screen bg-cosmic-dark">
      <Stars />
      <NavBar />
      
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
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
    </div>
  );
};

export default Contact;
