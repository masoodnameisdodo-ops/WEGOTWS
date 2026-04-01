"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Mail, Phone } from "lucide-react";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_83xcfsw";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_zkol064";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "X67YpWwh1oJdHWEVM";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.title || !formData.message) {
      setStatusMessage("Please fill all fields before sending.");
      return;
    }

    try {
      setIsSending(true);
      setStatusMessage("");

      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        setStatusMessage("Email service is not configured correctly.");
        setIsSending(false);
        return;
      }

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.title,
          message: formData.message,
          subject: `Contact Us: ${formData.title}`,
          from_name: formData.name,
          reply_to: formData.email,
          to_email: "masoodnameisdodo@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );

      if (response.status >= 200 && response.status < 300) {
        setStatusMessage("Message sent successfully.");
      } else {
        setStatusMessage(`Send failed: ${response.text || "Unknown response"}`);
      }
      setFormData({ name: "", email: "", title: "", message: "" });
    } catch (error) {
      const err = error as { status?: number; text?: string; message?: string };
      const details = err?.text || err?.message || "Unknown EmailJS error";
      const code = err?.status ? ` (${err.status})` : "";
      setStatusMessage(`Failed to send${code}: ${details}`);
      console.error("EmailJS send failed", error);
    } finally {
      setIsSending(false);
    }
  };

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
                href="mailto:masoodnameisdodo@gmail.com" 
                className="flex items-center gap-4 text-neutral-300 hover:text-blue-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-400/10 group-hover:border-blue-400/30 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-light tracking-wide">masoodnameisdodo@gmail.com</span>
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
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-mono text-neutral-400 uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-4 px-6 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-mono text-neutral-400 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-4 px-6 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-sm font-mono text-neutral-400 uppercase tracking-widest">Subject</label>
                <input
                  type="text"
                  id="title"
                  placeholder="Project / Inquiry Subject"
                  value={formData.title}
                  onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-4 px-6 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-mono text-neutral-400 uppercase tracking-widest">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="Your Message..." 
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-4 px-6 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                />
              </div>

              {statusMessage && (
                <p
                  className={`text-sm ${
                    statusMessage.startsWith("Message sent") ? "text-green-300" : "text-red-300"
                  }`}
                >
                  {statusMessage}
                </p>
              )}

              <button 
                type="submit"
                disabled={isSending}
                className="mt-4 flex items-center justify-center gap-2 w-full bg-white text-black py-4 rounded-xl font-medium tracking-wide hover:bg-neutral-200 transition-colors"
              >
                {isSending ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
