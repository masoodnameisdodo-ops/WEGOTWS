export default function Experience() {
  const experiences = [
    {
      role: "AI Intern - Marketing",
      company: "Dar Global",
      date: "29 Sep 2025 - 21 Dec 2025",
      description: "Applying AI and Data Scraping techniques to enhance marketing strategies. Working on data-driven marketing solutions and AI-powered campaign optimization.",
      linkText: "View Recommendation",
    },
    {
      role: "Data Science Intern",
      company: "Digital Empowerment Network (DEN)",
      date: "15 Jul 2025 - 2 Sep 2025",
      description: "Worked on real-world data science project. Built and deployed ML models using Python, XGBoost, and Streamlit. Gained experience in feature engineering, model evaluation, and ML-based web app deployment.",
      linkText: "View Certificate",
    },
    {
      role: "Artificial Intelligence Intern",
      company: "Software Productivity Strategists",
      date: "15 Jul 2024 - 1 Sep 2024",
      description: "Contributed to the development of an AI-powered assistant for intelligent user interaction. Applied Natural Language Processing and ML techniques to improve AI assistant performance. Worked collaboratively with development teams to integrate AI modules into functional prototypes.",
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
                
                <p className="text-neutral-400 text-lg leading-relaxed font-light mb-6">
                  {exp.description}
                </p>

                {exp.linkText && (
                  <a href="#" className="inline-flex items-center text-sm font-medium text-white hover:text-blue-400 underline underline-offset-4 decoration-white/30 hover:decoration-blue-400 transition-all">
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
