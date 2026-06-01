import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setLoading(true);
    // Simulate submission API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 relative z-10 max-w-7xl mx-auto w-full">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight m-0 mb-3">
          Get In{' '}
          <span className={`bg-gradient-to-r from-cyber-cyan to-neon-magenta bg-clip-text text-transparent ${
            darkMode ? 'neon-text-cyan' : ''
          }`}>
            Touch With Me
          </span>
        </h2>
        <p className={`text-sm sm:text-base max-w-lg mx-auto ${
          darkMode ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Have an exciting project, code challenge, or full-time opportunity you'd like to discuss? Reach out and let's build together!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Contact Direct Details */}
        <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
          
          <h3 className={`text-2xl font-bold tracking-tight mb-2 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Contact Information
          </h3>
          <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Feel free to contact me via email, phone, or any of the social handles listed above. I usually respond within 24 hours.
          </p>

          <div className="space-y-4">
            {/* Email link */}
            <a
              href="mailto:mangal192004@gmail.com"
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:scale-102 ${
                darkMode 
                  ? 'border-white/5 bg-space-obsidian/30 text-slate-300 hover:border-cyber-cyan hover:shadow-neon-cyan hover:text-white' 
                  : 'border-slate-200 bg-white text-slate-700 hover:border-cyan-600 hover:text-slate-900 shadow-sm'
              }`}
            >
              <div className={`p-2.5 rounded-lg border ${
                darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
              }`}>
                <Mail className="w-5 h-5 text-cyber-cyan" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest block">EMAIL ME</span>
                <span className="text-sm sm:text-base font-semibold">mangal192004@gmail.com</span>
              </div>
            </a>

            {/* Phone link */}
            <a
              href="tel:7004671025"
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:scale-102 ${
                darkMode 
                  ? 'border-white/5 bg-space-obsidian/30 text-slate-300 hover:border-neon-magenta hover:shadow-neon-magenta hover:text-white' 
                  : 'border-slate-200 bg-white text-slate-700 hover:border-pink-600 hover:text-slate-900 shadow-sm'
              }`}
            >
              <div className={`p-2.5 rounded-lg border ${
                darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
              }`}>
                <Phone className="w-5 h-5 text-neon-magenta" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest block">CALL ME</span>
                <span className="text-sm sm:text-base font-semibold">7004671025</span>
              </div>
            </a>

            {/* Location */}
            <div
              className={`flex items-center gap-4 p-4 rounded-xl border ${
                darkMode ? 'border-white/5 bg-space-obsidian/30 text-slate-300' : 'border-slate-200 bg-white text-slate-700 shadow-sm'
              }`}
            >
              <div className={`p-2.5 rounded-lg border ${
                darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
              }`}>
                <MapPin className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest block">LOCATION</span>
                <span className="text-sm sm:text-base font-semibold">India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Contact Interactive Form */}
        <div className="lg:col-span-7">
          <div className={`p-6 sm:p-8 rounded-3xl glass-card border ${
            darkMode ? 'bg-space-obsidian/40 border-white/5 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'
          }`}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 animate-bounce">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h4 className={`text-xl font-bold tracking-tight ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Message Sent Successfully!
                </h4>
                <p className={`text-sm text-center max-w-xs ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Thank you for reaching out. I have received your email and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {/* Name */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className={`text-xs font-bold font-mono uppercase tracking-widest ${
                    darkMode ? 'text-slate-400' : 'text-slate-700'
                  }`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 rounded-xl border font-medium focus:outline-none transition-all duration-300 ${
                      darkMode 
                        ? 'bg-space-obsidian border-white/10 text-white focus:border-cyber-cyan focus:shadow-neon-cyan' 
                        : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-cyan-600 focus:bg-white'
                    }`}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className={`text-xs font-bold font-mono uppercase tracking-widest ${
                    darkMode ? 'text-slate-400' : 'text-slate-700'
                  }`}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 rounded-xl border font-medium focus:outline-none transition-all duration-300 ${
                      darkMode 
                        ? 'bg-space-obsidian border-white/10 text-white focus:border-cyber-cyan focus:shadow-neon-cyan' 
                        : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-cyan-600 focus:bg-white'
                    }`}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="message" className={`text-xs font-bold font-mono uppercase tracking-widest ${
                    darkMode ? 'text-slate-400' : 'text-slate-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-3 rounded-xl border font-medium focus:outline-none transition-all duration-300 resize-none ${
                      darkMode 
                        ? 'bg-space-obsidian border-white/10 text-white focus:border-neon-magenta focus:shadow-neon-magenta' 
                        : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-pink-600 focus:bg-white'
                    }`}
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3.5 rounded-xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-cyber-cyan to-electric-violet hover:from-cyan-400 hover:to-violet-600 hover:scale-102 flex items-center justify-center gap-2 cursor-pointer shadow-neon-cyan ${
                    loading ? 'opacity-80 cursor-wait' : ''
                  }`}
                >
                  {loading ? (
                    <span className="w-5.5 h-5.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4.5 h-4.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
