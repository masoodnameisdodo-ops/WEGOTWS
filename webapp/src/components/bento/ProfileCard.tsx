import { ExternalLink } from "lucide-react";

export default function ProfileCard() {
  return (
    <>
      {/* Fallback background if image is missing */}
      <div className="absolute inset-0 bg-neutral-900 w-full h-full object-cover">
        <img
          src="/gallery/main image.jpeg"
          alt="Muhammad Masood Profile"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

      {/* Vignette & overlays for text readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
        <div>
          <h3 className="text-white font-medium text-xl">Muhammad Masood</h3>
          <p className="text-neutral-400 text-sm">Based in Wah, Pakistan</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors cursor-pointer">
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>

      {/* Hover Reveal Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </>
  );
}
