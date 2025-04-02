import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "c83b3feb-a103-4a39-9f69-7fb221807243");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (response.success) {
      setStatus("Message sent successfully!");
      e.currentTarget.reset();
    } else {
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-cosmic-dark">
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact <span className="neon-text">Me</span>
            </h1>
            <p className="text-white/70 text-lg">
              Get in touch for collaborations or inquiries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glassmorphism rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-cosmic-accent mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <a href="mailto:wankhedekhushant57@gmail.com" className="text-white/70 hover:text-cosmic-accent transition-colors">
                      wankhedekhushant57@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-cosmic-accent mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Phone</h3>
                    <a href="tel:+918007307435" className="text-white/70 hover:text-cosmic-accent transition-colors">
                      +91 8007307435
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-cosmic-accent mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Location</h3>
                    <p className="text-white/70">Nandanvan, Nagpur, India - 440 024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glassmorphism rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input type="text" name="name" className="w-full p-3 bg-cosmic-dark border border-white/20 rounded-lg focus:border-cosmic-accent focus:outline-none text-white" placeholder="Your Name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input type="email" name="email" className="w-full p-3 bg-cosmic-dark border border-white/20 rounded-lg focus:border-cosmic-accent focus:outline-none text-white" placeholder="Your Email" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea name="message" rows={4} className="w-full p-3 bg-cosmic-dark border border-white/20 rounded-lg focus:border-cosmic-accent focus:outline-none text-white resize-none" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="px-6 py-3 rounded-lg bg-gradient-to-r from-cosmic-accent to-cosmic-glow text-white font-medium shadow-lg shadow-cosmic-accent/20 hover:shadow-cosmic-accent/40 transition-all duration-300 flex items-center gap-2 hover:-translate-y-1">
                  Send Message <Send size={18} />
                </button>
                {status && <p className="text-white mt-4">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
