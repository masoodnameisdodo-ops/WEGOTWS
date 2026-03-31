import { ExternalLink } from "lucide-react";

export default function ProfileCard() {
  return (
    <>
      {/* Fallback gradient if image is missing */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-neutral-900 to-black w-full h-full object-cover">
        {/* Intentionally using a generic img tag placeholder to avoid Next Image errors if the exact asset is missing */}
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop"
          alt="Shahwaiz Amer Profile"
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

      {/* Vignette & overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
        <div>
          <h3 className="text-white font-medium text-xl">Shahwaiz Amer</h3>
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
