"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  // We use the global window scroll since this overlay is rendered inside 
  // the sticky container of the 500vh parent. We want its opacity to map to the global page scroll.
  // Alternatively, we get the progress from the parent context, but using useScroll directly works fine.
  
  // Actually, to get perfectly mapped section triggers, we can just use the fact they are in a sticky container.
  // We don't need a parent ref if we map viewport scroll. But since it's cleaner, let's just map 0..1 overall progress of body scroll 
  // assuming this is the top level first section.
  
  const { scrollYProgress } = useScroll();

  // Section 1: "My Name. Creative Developer." (0% to 20%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Section 2: "I build digital experiences." (30% to 50%)
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.35, 0.55], [50, 0, -50]);

  // Section 3: "Bridging design and engineering." (60% to 80%)
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.65, 0.85], [50, 0, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center max-w-7xl mx-auto px-6">
      
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 drop-shadow-lg">
          Shahwaiz Amer
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300 font-light tracking-wide max-w-xl leading-relaxed">
          AI Engineering student.<br/> Focusing on Machine Learning & Data Science.
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col justify-center items-start text-left pl-4 md:pl-16"
      >
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-4 max-w-xl drop-shadow-md leading-tight">
          Building intelligent,<br /> data-driven apps.
        </h2>
        <div className="w-20 h-1 bg-white/50 rounded-full mt-4"></div>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col justify-center items-end text-right pr-4 md:pr-16"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4 max-w-lg drop-shadow-md leading-tight">
          Developing efficient<br /> AI solutions.
        </h2>
        <p className="text-lg md:text-xl text-neutral-400 font-light max-w-sm mt-4">
          Through practical projects and hands-on experience in the real world.
        </p>
      </motion.div>

    </div>
  );
}
