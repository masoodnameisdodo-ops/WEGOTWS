"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GalleryCard from "./bento/GalleryCard";
import IntroCard from "./bento/IntroCard";
import ToolsCard from "./bento/ToolsCard";
import ProfileCard from "./bento/ProfileCard";
import VideoCard from "./bento/VideoCard";
import MusicCard from "./bento/MusicCard";

gsap.registerPlugin(ScrollTrigger);

export default function BentoGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.children;

    // Use mm (matchMedia) if needed, but here a simple batch with ScrollTrigger will do
    ScrollTrigger.batch(cards, {
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        });
      },
      start: "top 85%",
    });

    // Set initial state
    gsap.set(cards, { opacity: 0, y: 50 });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="relative z-20 bg-[#121212] py-32 px-4 md:px-8 max-w-[1400px] mx-auto min-h-screen">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
          About Me
        </h2>
        <p className="text-neutral-400 text-lg md:text-xl font-light max-w-2xl">
          A glimpse into my tools, vibes, and the digital spaces I create.
        </p>
      </div>

      <div 
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-12 auto-rows-[minmax(180px,auto)] gap-4 md:gap-6"
      >
        {/* Row 1-2 */}
        <div className="md:col-span-5 md:row-span-2 relative glass-card">
          <GalleryCard />
        </div>
        <div className="md:col-span-7 md:row-span-2 relative glass-card p-8 flex flex-col justify-between">
          <IntroCard />
        </div>

        {/* Row 3 */}
        <div className="md:col-span-6 md:row-span-1 relative glass-card flex items-center overflow-hidden">
          <ToolsCard />
        </div>
        
        {/* Profile and Video span Row 3 AND Row 4 */}
        <div className="md:col-span-2 md:row-span-2 relative glass-card overflow-hidden group">
          <ProfileCard />
        </div>
        <div className="md:col-span-4 md:row-span-2 relative glass-card overflow-hidden">
          <VideoCard />
        </div>

        {/* Row 4 */}
        <div className="md:col-span-6 md:row-span-1 relative glass-card p-6 flex items-center justify-between">
          <MusicCard />
        </div>
      </div>
    </section>
  );
}
