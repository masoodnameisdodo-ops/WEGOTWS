"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 119;

export default function ScrollyCanvas({ children }: { children?: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 0; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      // Filename format: frame_000_delay-0.066s.png
      const frameIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${frameIndex}_delay-0.066s.png`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES + 1) {
          setImages(loadedImages);
          drawFrame(0, loadedImages);
        }
      };
      
      loadedImages.push(img);
    }
  }, []);

  const drawFrame = (index: number, imgs: HTMLImageElement[]) => {
    if (!canvasRef.current || imgs.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgs[index];
    if (!img || !img.complete) return;

    // Handle object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let renderWidth = canvas.width;
    let renderHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;
    
    if (canvasRatio > imgRatio) {
      renderHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - renderHeight) / 2;
    } else {
      renderWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - renderWidth) / 2;
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    const currentFrame = Math.min(
      TOTAL_FRAMES,
      Math.floor(latest * TOTAL_FRAMES)
    );
    // Use requestAnimationFrame for smooth drawing
    requestAnimationFrame(() => drawFrame(currentFrame, images));
  });

  // Handle window resize properly scaling canvas
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        
        if (images.length > 0) {
          const currentProgress = scrollYProgress.get();
          const currentFrame = Math.min(
            TOTAL_FRAMES,
            Math.floor(currentProgress * TOTAL_FRAMES)
          );
          drawFrame(currentFrame, images);
        }
      }
    };
    
    handleResize(); // Init on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay sections will sit on top of the canvas */}
        {children}
      </div>
    </div>
  );
}
