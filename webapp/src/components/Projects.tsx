"use client";

import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Edu Pilot Tech Startup",
      description: "Developed a full-stack EdTech SaaS startup in Django and Tailwind, offering AI productivity tools for students. Engineered an AI RAG pipeline for secure PDF chatting, using backend page-slicing to enforce a freemium model. Implemented a gamified reward system alongside custom utilities like an ATS resume builder and a text-to-handwriting converter.",
      tags: ["Django", "Tailwind", "AI RAG", "SaaS"],
      link: "https://edupilot.com.pk",
      linkText: "edupilot.com.pk",
      icon: <ExternalLink className="w-4 h-4" />,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "FitAI - Fitness and Diet Assistant",
      description: "An intelligent fitness and diet assistant powered by AI to help users achieve their health goals with personalized recommendations.",
      tags: ["Python", "AI", "Data Science"],
      link: "#",
      linkText: "Test It",
      icon: <ExternalLink className="w-4 h-4" />,
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Real Estate Price Predictor",
      description: "A machine learning model that predicts real estate prices based on various factors like location, size, and amenities.",
      tags: ["Machine Learning", "Python"],
      link: "#",
      linkText: "GitHub",
      icon: <Github className="w-4 h-4" />,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Ride Sharing System",
      description: "A comprehensive ride-sharing platform connecting drivers and passengers with real-time tracking and payment integration.",
      tags: ["System Design", "Python"],
      link: "#",
      linkText: "GitHub",
      icon: <Github className="w-4 h-4" />,
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "IMDB Movies Reviews Prediction",
      description: "A sentiment analysis model that predicts movie review ratings based on text analysis using natural language processing.",
      tags: ["NLP", "Machine Learning"],
      link: "#",
      linkText: "Test It",
      icon: <ExternalLink className="w-4 h-4" />,
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Spam Email Detection",
      description: "An AI-powered system that automatically detects and filters spam emails using machine learning algorithms.",
      tags: ["Classification", "Python"],
      link: "#",
      linkText: "GitHub",
      icon: <Github className="w-4 h-4" />,
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Coffee Shop Sales and Analysis",
      description: "A comprehensive data analysis dashboard for coffee shop sales, inventory management, and customer insights.",
      tags: ["Data Analysis", "Power-BI"],
      link: "#",
      linkText: "GitHub",
      icon: <Github className="w-4 h-4" />,
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Heart Disease Predictor",
      description: "A machine learning model that predicts the risk of heart disease based on various health parameters and medical data.",
      tags: ["Predictive Models", "ML"],
      link: "#",
      linkText: "Test It",
      icon: <ExternalLink className="w-4 h-4" />,
      image: "https://images.unsplash.com/photo-1505506874110-6a7a6c9924cb?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Lungs Disease Predictor",
      description: "An AI-powered system that predicts lung diseases using medical imaging and patient data analysis.",
      tags: ["Deep Learning", "AI"],
      link: "#",
      linkText: "Test It",
      icon: <ExternalLink className="w-4 h-4" />,
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Jarvis AI Voice Assistant Multimodal",
      description: "A multimodal AI voice assistant capable of processing voice commands, text, and visual inputs for comprehensive assistance and automation.",
      tags: ["AI Automation", "Python"],
      link: "#",
      linkText: "GitHub",
      icon: <Github className="w-4 h-4" />,
      image: "https://images.unsplash.com/photo-1535378273068-9bbdc2f5e315?q=80&w=800&auto=format&fit=crop"
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
            A showcase of intelligent, data-driven applications and practical solutions.
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
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white hover:text-black shrink-0"
                    aria-label={project.linkText}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-md mb-8 leading-relaxed font-light">
                    {project.description}
                  </p>
                  
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
                  >
                    {project.icon}
                    {project.linkText}
                  </a>
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
