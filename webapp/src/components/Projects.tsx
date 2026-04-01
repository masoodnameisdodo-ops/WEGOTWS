"use client";

import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Hamza Shanwari's dynamic editing showcase",
      description: "I had the opportunity to work with Hamza Shanwari, where I edited three different videos covering a range of engaging and informative topics.",
      tags: ["Video Editing", "Storytelling", "Dynamic Pacing"],
      link: "#",
      image: "/gallery/Hamza Shanwari’s dynamic editing showcase (1).png",
      youtubeLinks: [
        { id: "rCjLrX1he6U", url: "https://youtu.be/rCjLrX1he6U" },
        { id: "9PaG0AIXqQ4", url: "https://youtu.be/9PaG0AIXqQ4" },
        { id: "fMvJ-axCMnI", url: "https://youtu.be/fMvJ-axCMnI" }
      ]
    },
    {
      title: "Pine City (Islamabad)",
      description: "Designed marketing visuals for a real estate developer of Pine City Islamabad, creating high-quality covers for reels and posters that highlight luxury living, modern infrastructure, and strong visual branding to enhance client engagement and promotion.",
      tags: ["Marketing Visuals", "Real Estate", "Branding"],
      link: "#",
      image: "/gallery/pine city.jpeg"
    },
    {
      title: "Concert Highlights",
      description: "A single project collection featuring edits from multiple concert performances and artist reels.",
      tags: ["Concert", "Instagram Reels", "Live Performance"],
      link: "https://www.instagram.com/reel/DIjSpzZi3B9/?igsh=ZXYzbWN0cDd6ZjM4",
      linkText: "Watch Featured Reel",
      image: "/gallery/concert.jpeg",
      reelLinks: [
        {
          name: "DJ Hanzi",
          url: "https://www.instagram.com/reel/DIjSpzZi3B9/?igsh=ZXYzbWN0cDd6ZjM4"
        },
        {
          name: "Arshman",
          url: "https://www.instagram.com/reel/DGlUw-ANiQp/?igsh=aGdzcnM0OWFlajgz"
        },
        {
          name: "Falak shabi",
          url: "https://www.instagram.com/reel/DI_YXb-i1Z-/?igsh=MWZ3enZteHI0Nmgxbw=="
        },
        {
          name: "Qawali Night",
          url: "https://www.instagram.com/reel/DJYhHkVsokO/?igsh=MTMyYnBlbml6YXRzaA=="
        },
        {
          name: "Ahmad Butt and DJ Ehni",
          url: "https://www.instagram.com/reel/DSfIdtVjZk1/?igsh=cGJ5NXg1eW94Z2po"
        },
        {
          name: "Sufi Night Taxila",
          url: "https://www.instagram.com/reel/DSHNS_dAjb4/?igsh=MWkyYWtuc3ZjZ2E5cw=="
        },
        {
          name: "Jeem se Jaffer",
          url: "https://www.instagram.com/reel/DJg4WWXii10/?igsh=NWlvZ2ZwYmtjNWZj"
        }
      ]
    }
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 px-4 md:px-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Projects
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl font-light">
            A showcase of my recent video editing, pacing dynamics, and storytelling projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group relative glass-card flex flex-col h-full min-h-[380px] overflow-hidden"
            >
              {project.image && (
                <div className="h-48 w-full overflow-hidden shrink-0 bg-white/5 border-b border-white/10 relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle inner shadow for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 to-transparent pointer-events-none" />
                </div>
              )}
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-md mb-6 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* YouTube Videos Grid */}
                  {project.youtubeLinks && (
                    <div className="grid grid-cols-3 gap-3 mb-8">
                      {project.youtubeLinks.map((vid, vIdx) => (
                        <a 
                          key={vIdx} 
                          href={vid.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="relative group/yt overflow-hidden rounded-lg border border-white/10 aspect-video block bg-neutral-900 shadow-md shadow-black/50"
                        >
                          <img 
                            src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`} 
                            alt={`YouTube Video ${vIdx + 1}`} 
                            className="w-full h-full object-cover group-hover/yt:scale-110 transition-transform duration-500 opacity-80 group-hover/yt:opacity-100"
                          />
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover/yt:opacity-100 transition-opacity">
                            <div className="w-8 h-8 bg-[#FF0000] rounded-full flex items-center justify-center shadow-lg shadow-red-500/50 hover:scale-110 transition-transform">
                              <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}

                  {project.reelLinks && (
                    <div className="mb-6 space-y-2">
                      {project.reelLinks.map((item, itemIdx) => (
                        item.url ? (
                          <a
                            key={itemIdx}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-200 hover:bg-white/10 transition-colors"
                          >
                            <span>{item.name}</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        ) : (
                          <div
                            key={itemIdx}
                            className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-400"
                          >
                            <span>{item.name}</span>
                            <span className="text-xs uppercase tracking-wide">Coming Soon</span>
                          </div>
                        )
                      ))}
                    </div>
                  )}
                  
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                    >
                      {project.linkText || "View Project"}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
