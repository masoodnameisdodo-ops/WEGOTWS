"use client";

import { useCallback, useEffect, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 193;
const LAST_FRAME_INDEX = FRAME_COUNT - 1;
const FRAME_DELAY = "0.041";

export default function ScrollyCanvas({ children }: { children?: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(-1);
  const rafIdRef = useRef<number | null>(null);
  const resizeRafRef = useRef<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    if (!canvas || !ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete) return;

    // Use CSS pixel dimensions because context is DPR-scaled.
    const viewportWidth = canvas.clientWidth || window.innerWidth;
    const viewportHeight = canvas.clientHeight || window.innerHeight;

    // Cover the entire viewport (cover behavior)
    const canvasRatio = viewportWidth / viewportHeight;
    const imgRatio = img.width / img.height;
    
    let renderWidth = viewportWidth;
    let renderHeight = viewportHeight;
    let offsetX = 0;
    let offsetY = 0;
    
    if (canvasRatio > imgRatio) {
      renderWidth = viewportWidth;
      renderHeight = viewportWidth / imgRatio;
      offsetY = (viewportHeight - renderHeight) / 2;
    } else {
      renderHeight = viewportHeight;
      renderWidth = viewportHeight * imgRatio;
      offsetX = (viewportWidth - renderWidth) / 2;
    }
    
    ctx.clearRect(0, 0, viewportWidth, viewportHeight);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    currentFrameRef.current = index;
  }, []);

  useEffect(() => {
    let cancelled = false;

    // Pre-allocate the array
    const imgs: HTMLImageElement[] = new Array(FRAME_COUNT);

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameIndex = i.toString().padStart(3, "0");
      img.decoding = "async";
      img.src = `/sequence/frame_${frameIndex}_delay-${FRAME_DELAY}s.png`;

      const onLoaded = () => {
        if (cancelled) return;
        // If this is the first frame, or if it happens to be the currently requested frame, draw it.
        if (i === 0 || i === currentFrameRef.current) {
          drawFrame(i);
        }
      };

      img.onload = onLoaded;
      img.onerror = onLoaded;
      imgs[i] = img;
    }

    imagesRef.current = imgs;

    return () => {
      cancelled = true;
    };
  }, [drawFrame]);

  const scheduleFrame = useCallback(
    (frame: number) => {
      if (frame === currentFrameRef.current) return;

      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }

      rafIdRef.current = requestAnimationFrame(() => {
        drawFrame(frame);
        rafIdRef.current = null;
      });
    },
    [drawFrame]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (imagesRef.current.length === 0) return;
    const currentFrame = Math.min(
      LAST_FRAME_INDEX,
      Math.floor(latest * LAST_FRAME_INDEX)
    );
    scheduleFrame(currentFrame);
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    contextRef.current = canvas.getContext("2d", { alpha: false });

    const handleResize = () => {
      if (!canvasRef.current) return;

      if (resizeRafRef.current !== null) {
        cancelAnimationFrame(resizeRafRef.current);
      }

      resizeRafRef.current = requestAnimationFrame(() => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const width = window.innerWidth;
        const height = window.innerHeight;

        canvasRef.current!.width = Math.floor(width * dpr);
        canvasRef.current!.height = Math.floor(height * dpr);

        const ctx = contextRef.current;
        if (ctx) {
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        const currentProgress = scrollYProgress.get();
        const currentFrame = Math.min(
          LAST_FRAME_INDEX,
          Math.floor(currentProgress * LAST_FRAME_INDEX)
        );

        drawFrame(currentFrame);
        resizeRafRef.current = null;
      });
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      if (resizeRafRef.current !== null) {
        cancelAnimationFrame(resizeRafRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [drawFrame, scrollYProgress]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        {/* Overlay sections will sit on top of the canvas */}
        {children}
      </div>
    </div>
  );
}
