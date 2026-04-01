"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";

export default function VideoCard() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <>
      <div className="absolute inset-0 bg-neutral-900 pointer-events-none">
        <video
          ref={videoRef}
          src="/gallery/wegot banner video.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-80"
          onError={(e) => {
            (e.target as HTMLVideoElement).style.display = 'none';
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80 pointer-events-none" />

      {/* Controls */}
      <div className="absolute bottom-6 right-6 z-10">
        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors text-white"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      <div className="absolute top-6 left-6 z-10 w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
    </>
  );
}
