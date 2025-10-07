import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, User, MessageCircle } from "lucide-react";

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setStatus("Sending...");

  try {
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "c83b3feb-a103-4a39-9f69-7fb221807243");

    // Send request (do NOT set Content-Type header when using FormData)
    const raw = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    // Debugging: inspect HTTP status & headers
    console.log("HTTP status:", raw.status, raw.statusText);

    // Attempt to parse JSON (safe)
    let result: any;
    try {
      result = await raw.json();
    } catch (parseErr) {
      console.error("Failed to parse response JSON:", parseErr);
      console.log("Raw response text:", await raw.text());
      throw new Error("Invalid response from server");
    }

    // Debugging: see exactly what the API returned
    console.log("Web3Forms response JSON:", result);

    // Web3Forms returns { statusCode, success, body: { message } } (see docs)
    const successFlag = result.success === true || raw.status === 200;
    const apiMessage =
      result?.body?.message ?? result?.message ?? "Response received";

    if (successFlag) {
      setStatus((apiMessage || "Message sent successfully! 🎉"));
      form.reset();
    } else {
      // show helpful message containing API message if available
      setStatus(
        `Error sending message. ${apiMessage ? "- " + apiMessage : ""}`
      );
      console.warn("Form submission returned success=false:", result);
    }
  } catch (error: any) {
    console.error("Submission error:", error);
    setStatus(
      error?.message
        ? `Error sending message. ${error.message}`
        : "Error sending message. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section className="py-16 w-full relative overflow-hidden" id="contact">
      {/* Background Elements - Same as Skills Section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            data-scroll
            data-scroll-speed="0.5"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Contact <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Me</span>
          </h2>
          <p 
            data-scroll
            data-scroll-speed="0.3"
            className="text-white/70 text-lg"
          >
            Get in touch for collaborations or inquiries
          </p>
        </div>

        <div 
          data-scroll
          data-scroll-speed="0.8"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* Contact Information */}
          <div className="relative group">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageCircle size={20} className="text-cyan-400" />
                Contact Information
              </h2>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4 group/item">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg flex-shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Email</h3>
                    <a 
                      href="mailto:wankhedekhushant57@gmail.com" 
                      className="text-white/70 hover:text-cyan-300 transition-colors duration-300 text-sm"
                    >
                      wankhedekhushant57@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg flex-shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Phone</h3>
                    <a 
                      href="tel:+918007307435" 
                      className="text-white/70 hover:text-green-300 transition-colors duration-300 text-sm"
                    >
                      +91 8007307435
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Location</h3>
                    <p className="text-white/70 text-sm">
                      Nandanvan, Nagpur, India - 440 024
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative group">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Send size={20} className="text-cyan-400" />
                Send Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-white text-sm font-medium flex items-center gap-2">
                    <User size={14} />
                    Name
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-white/40 text-sm transition-all duration-300"
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-white text-sm font-medium flex items-center gap-2">
                    <Mail size={14} />
                    Email
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-white/40 text-sm transition-all duration-300"
                    placeholder="Your Email" 
                    required 
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="message" className="block text-white text-sm font-medium flex items-center gap-2">
                    <MessageCircle size={14} />
                    Message
                  </label>
                  <textarea 
                    name="message" 
                    rows={4} 
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-white/40 text-sm resize-none transition-all duration-300"
                    placeholder="Your Message" 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                
                {status && (
                  <div className={`text-center text-sm p-3 rounded-lg transition-all duration-300 ${
                    status.includes("successfully") 
                      ? "bg-green-500/20 text-green-300 border border-green-500/30" 
                      : status.includes("Error")
                      ? "bg-red-500/20 text-red-300 border border-red-500/30"
                      : "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  }`}>
                    {status}
                  </div>
                )}
              </form>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div 
          data-scroll
          data-scroll-speed="0.3"
          className="text-center mt-12"
        >
          <p className="text-white/60 text-sm">
            I'll get back to you as soon as possible
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .group {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        /* Input focus effects */
        input:focus, textarea:focus {
          box-shadow: 0 0 0 2px rgba(34, 211, 238, 0.2);
        }

        /* Smooth transitions for reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .group {
            animation: none;
          }
          * {
            transition-duration: 0.1s !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;