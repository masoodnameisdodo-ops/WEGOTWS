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

  // Section 3: "Bridging design and engineering." (60% to 80%)
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.65, 0.85], [50, 0, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center max-w-7xl mx-auto px-6">
      
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col md:flex-row items-center justify-between w-full h-full px-4 md:px-12 pointer-events-auto"
      >
        <div className="flex flex-col items-start group cursor-default mt-32 md:mt-[25vh] transition-transform duration-500 hover:scale-110 hover:translate-x-4">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-0 drop-shadow-2xl">
            Masood
          </h1>
          <p className="text-2xl md:text-3xl text-neutral-300 font-medium tracking-widest pl-1">
            wegotws
          </p>
        </div>

        <div className="text-right md:w-1/3 mb-32 md:mb-0 md:mt-[25vh]">
          <p className="text-3xl md:text-5xl text-white font-light tracking-tight leading-tight drop-shadow-xl flex flex-col items-end">
            <span>Transforming</span>
            <span className="font-medium text-neutral-300 italic -mt-2">Raw content</span>
            <span>into</span>
            <span className="font-bold">Polished Brilliance.</span>
          </p>
        </div>
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
