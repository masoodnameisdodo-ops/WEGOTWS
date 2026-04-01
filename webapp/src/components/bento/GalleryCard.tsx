export default function GalleryCard() {
  // Paste your images in the `public/gallery` folder!
  const images = [
    "/gallery/gallery 1.jpeg", 
    "/gallery/gallery 2.jpeg",
    "/gallery/gallery 3.jpeg"
  ];
  // Duplicate more times since there are fewer images, to keep marquee seamless
  const duplicatedImages = [...images, ...images, ...images, ...images, ...images];

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
