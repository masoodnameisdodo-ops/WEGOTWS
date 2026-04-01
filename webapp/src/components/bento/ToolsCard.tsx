import { Film } from "lucide-react";

export default function ToolsCard() {
  const tools = [
    { name: "CapCut", icon: "https://freelogopng.com/images/all_img/1664287128capcut-logo-png.png" },
    { name: "Premiere Pro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" },
    { name: "Veo 3", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/DeepMind_logo_2020.svg/512px-DeepMind_logo_2020.svg.png" },
    { name: "Nanobanana", icon: "https://cdn-icons-png.flaticon.com/512/123/123282.png" },
    { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
    { name: "VN", icon: "https://play-lh.googleusercontent.com/yU4E08TtyuGf9Xl8x_Y-VwXW30h-EigWfH4Fj-B981C5X1X2vP6jK3C-yN3a0F-mKg=w240-h240-rw" },
    { name: "Kling", icon: "https://klingai.com/favicon.ico" },
    { name: "Google Whisky", icon: "https://www.vectorlogo.zone/logos/google/google-icon.svg" },
    { name: "Google Flow", icon: "https://www.vectorlogo.zone/logos/google/google-icon.svg" },
  ];

  // Duplicate for seamless marquee
  const duplicatedTools = [...tools, ...tools, ...tools]; // 3x for safety

  return (
    <>
      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#121212]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#121212]/90 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee items-center ml-4 h-full">
        {duplicatedTools.map((tool, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-3 mx-8 shrink-0 group hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center p-2 text-white/50 group-hover:text-blue-400 group-hover:bg-white/10 transition-all duration-300">
              {tool.icon ? (
                <img 
                  src={tool.icon} 
                  alt={tool.name} 
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              ) : (
                <Film className="w-6 h-6" />
              )}
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
