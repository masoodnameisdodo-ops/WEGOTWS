"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const check = () => {
      setIsMobile(
        window.matchMedia("(max-width: 768px)").matches || "ontouchstart" in window
      );
    };
    check();
  }, []);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    if (!canvas || !ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete) return;

    const viewportWidth = canvas.clientWidth || window.innerWidth;
    const viewportHeight = canvas.clientHeight || window.innerHeight;

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
    if (isMobile) return; // Skip heavy frame loading on mobile

    let cancelled = false;
    const imgs: HTMLImageElement[] = new Array(FRAME_COUNT);

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameIndex = i.toString().padStart(3, "0");
      img.decoding = "async";
      img.src = `/sequence/frame_${frameIndex}_delay-${FRAME_DELAY}s.png`;

      const onLoaded = () => {
        if (cancelled) return;
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
  }, [drawFrame, isMobile]);

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
    if (isMobile) return;
    if (imagesRef.current.length === 0) return;
    const currentFrame = Math.min(
      LAST_FRAME_INDEX,
      Math.floor(latest * LAST_FRAME_INDEX)
    );
    scheduleFrame(currentFrame);
  });

  useEffect(() => {
    if (isMobile) return; // Skip canvas setup on mobile

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
  }, [drawFrame, scrollYProgress, isMobile]);

  // ── MOBILE: lightweight static hero ──────────────────────────────────────
  if (isMobile) {
    return (
      <div ref={containerRef} className="relative bg-[#121212]">
        <div
          className="h-screen w-full overflow-hidden flex items-center justify-center"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, #1a1a2e 0%, #121212 70%)",
          }}
        >
          {/* Subtle purple glow */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.25) 0%, transparent 70%)",
            }}
          />
          {children}
        </div>
      </div>
    );
  }

  // ── DESKTOP: full canvas scrollytelling ──────────────────────────────────
  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        {children}
      </div>
    </div>
  );
}
