"use client";

import { Send, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative z-20 bg-[#121212] py-32 px-6">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Info */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Contact
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl font-light max-w-md mb-12">
              Interested in collaborating on a project or just want to say hi? Drop me a message below.
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:shahwaiznew001@gmail.com" 
                className="flex items-center gap-4 text-neutral-300 hover:text-blue-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-400/10 group-hover:border-blue-400/30 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-light tracking-wide">shahwaiznew001@gmail.com</span>
              </a>

              <a 
                href="tel:+923251107406" 
                className="flex items-center gap-4 text-neutral-300 hover:text-blue-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-400/10 group-hover:border-blue-400/30 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg font-light tracking-wide">+92 325 1107406</span>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="glass-card p-8 md:p-10">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-mono text-neutral-400 uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-4 px-6 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-mono text-neutral-400 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your Email" 
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-4 px-6 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-mono text-neutral-400 uppercase tracking-widest">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="Your Message..." 
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-4 px-6 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="mt-4 flex items-center justify-center gap-2 w-full bg-white text-black py-4 rounded-xl font-medium tracking-wide hover:bg-neutral-200 transition-colors"
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
