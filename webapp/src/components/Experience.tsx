"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);
  const experiences = [
    {
      role: "FrontMan of Media Teams",
      company: "Freelance & Agency Work",
      date: "Present",
      description: "Managing and leading media content teams. Overseeing the video production process from rough cuts to final delivery, ensuring smooth workflows, and collaborating directly with creators to maintain high-quality storytelling.",
      subRoles: [
        { title: "Head Videographer", host: "Olympiad 25, HITEC University", desc: "Led the videography team to capture and produce event highlights and promotional content." },
        { title: "Director Media", host: "Robo Fiesta 8, HITEC University", desc: "Directed overall media strategy, supervised content production, and managed media team operations for the event." },
        { title: "Assistant Media Head", host: "HIROBO 7.0, HITEC University", desc: "Supported media operations including video production, editing, and team coordination." },
        { title: "Executive Videographer", host: "HITEC Press Club", desc: "Handled high-level video production, filming, and editing for official press club content." },
        { title: "Secretary Marketing", host: "(LDS) HITEC University", desc: "Managed visual marketing content for university promotions and events." },
        { title: "Head Content Creator", host: "HITEC Press Club", desc: "Oversaw media coverage of university activities and created engaging content." },
        { title: "Media Relation Officer", host: "Young Peace & Development Corps (YPDC), HITEC Chapter", desc: "Managed communications, created event coverage, handled digital publicity, and collaborated with teams to promote organizational visibility." },
        { title: "Head Documentary", host: "Rafahiyah Foundation", desc: "Directed and edited impactful documentaries for awareness and social campaigns." },
      ],
      linkText: "",
      linkUrl: "",
    },
    {
      role: "Video Editor",
      company: "Pak Media Industry (PMI)",
      date: "Recent",
      description: "I worked on different editing projects for media content and freelance clients, focusing on clean, engaging visuals. PMI is an artist facilitation agency that helps creatives grow and connect in the industry.",
      linkText: "View on Instagram",
      linkUrl: "https://www.instagram.com/pakmediaindustry?igsh=MWtmbTZ5NDM3bHhocA==",
    },
    {
      role: "Part-Time Video Editor",
      company: "Tree Technologies (YouTube Automation Agency)",
      date: "Oct 2025 – Present",
      description: "Editing and producing engaging video content for YouTube automation channels, optimizing videos for audience retention and platform performance.",
      linkText: "",
      linkUrl: "",
    }
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-20 px-6">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Experience
          </h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12 pb-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-[#121212] border-2 border-white/30 rounded-full -left-[9px] top-1.5 group-hover:border-blue-400 group-hover:bg-blue-400/20 transition-colors duration-300" />
              
              <div className="glass-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-xl text-neutral-300 mt-1">{exp.company}</p>
                  </div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-sm font-mono shrink-0">
                    {exp.date}
                  </span>
                </div>
                
                <p className="text-neutral-400 text-lg leading-relaxed font-light mb-8">
                  {exp.description}
                </p>

                {/* Sub Roles List Toggle */}
                {exp.subRoles && (
                  <div className="border-t border-white/10 pt-6 mt-6">
                    <button 
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors mb-4"
                    >
                      {isExpanded ? (
                        <>See Less <ChevronUp className="w-4 h-4" /></>
                      ) : (
                        <>See All Roles ({exp.subRoles.length}) <ChevronDown className="w-4 h-4" /></>
                      )}
                    </button>

                    {isExpanded && (
                      <div className="space-y-6 animate-in slide-in-from-top-2 fade-in duration-300">
                        {exp.subRoles.map((sub, sIdx) => (
                          <div key={sIdx} className="flex flex-col gap-1">
                            <div className="flex flex-wrap items-baseline gap-2">
                              <h4 className="text-lg font-medium text-white">{sub.title}</h4>
                              <span className="text-sm font-mono text-blue-400/80 uppercase tracking-wider">{sub.host}</span>
                            </div>
                            <p className="text-neutral-400 font-light">{sub.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {exp.linkText && (
                  <a 
                    href={exp.linkUrl || "#"} 
                    target={exp.linkUrl ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-6 text-sm font-medium text-white hover:text-blue-400 underline underline-offset-4 decoration-white/30 hover:decoration-blue-400 transition-all"
                  >
                    {exp.linkText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
