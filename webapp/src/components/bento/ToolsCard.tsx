export default function ToolsCard() {
  const tools = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", invert: true },
    { name: "Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
    { name: "Data Science", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "Power-BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
    { name: "N8N", icon: "https://docs.n8n.io/favicon.ico" },
  ];

  // Duplicate for seamless marquee
  const duplicatedTools = [...tools, ...tools, ...tools]; // 3x for safety

  return (
    <>
      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#121212]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#121212]/90 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee items-center ml-4">
        {duplicatedTools.map((tool, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-3 mx-8 shrink-0 group hover:scale-105 transition-transform cursor-pointer"
          >
            <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center p-2.5 
              ${tool.invert ? "invert opacity-80" : "opacity-80"}`}
            >
              <img 
                src={tool.icon} 
                alt={tool.name} 
                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
                }}
              />
            </div>
            <span className="text-white/50 font-mono text-lg tracking-wide group-hover:text-white transition-colors duration-300">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
