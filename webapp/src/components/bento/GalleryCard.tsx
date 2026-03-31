export default function GalleryCard() {
  // Using generic placeholders 1-7. If they don't exist, it will just show the alt text
  // but won't crash the Next.js dev server. We duplicate them so the CSS scroll is seamless.
  const images = [
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop", // Cyber
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", // Chip
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop", // Matrix Code
    "https://images.unsplash.com/photo-1614729939124-032f0b5609ce?q=80&w=600&auto=format&fit=crop", // Dark Space
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop", // Code
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop", // Abstract Liquid
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600&auto=format&fit=crop"  // Setup
  ];
  const duplicatedImages = [...images, ...images];

  return (
    <div className="absolute inset-0 overflow-hidden w-full h-full flex flex-col justify-between">
      {/* Gradient Overlays for smooth edges */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#121212]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#121212]/80 to-transparent z-10 pointer-events-none" />

      {/* Row 1 */}
      <div className="flex h-1/2 w-max animate-slide-horizontal pt-1">
        {duplicatedImages.map((src, idx) => (
          <div key={`r1-${idx}`} className="h-full px-1 w-[200px] shrink-0">
            <div className="w-full h-full rounded-xl bg-neutral-800 relative overflow-hidden">
              <img
                src={src}
                alt={`Wallpaper ${idx}`}
                className="w-full h-full object-cover opacity-80"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 (Moves slightly faster or started offset for parallax feel) */}
      <div className="flex h-1/2 w-max animate-slide-horizontal pb-1" style={{ animationDelay: '-15s', animationDirection: 'reverse' }}>
        {duplicatedImages.map((src, idx) => (
          <div key={`r2-${idx}`} className="h-full px-1 w-[250px] shrink-0">
            <div className="w-full h-full rounded-xl bg-neutral-800 relative overflow-hidden">
              <img
                src={src}
                alt={`Wallpaper ${idx}`}
                className="w-full h-full object-cover opacity-80"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
