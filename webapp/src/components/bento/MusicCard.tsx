"use client";

import { Play, Pause, SkipForward, SkipBack } from "lucide-react";
import { useState, useRef } from "react";

export default function MusicCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Background Blur derived from Album Art */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl opacity-30">
        <img
          src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop"
          alt="background blur"
          className="w-full h-full object-cover blur-2xl scale-125"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

      <div className="relative z-10 flex items-center w-full gap-6">
        {/* Album Art */}
        <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 shadow-xl bg-neutral-800">
          <img
            src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop"
            alt="Album Art"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h3 className="text-white font-bold text-xl mb-1">Best of Me</h3>
          <p className="text-neutral-400 text-sm">NEFFEX</p>

          {/* Audio Element */}
          <audio ref={audioRef} src="/NEFFEX_-_Best_of_Me_(mp3.pm).mp3" loop />
        </div>

        {/* Audio Bars & Controls */}
        <div className="flex flex-col items-end gap-3 shrink-0 mr-2">
          {/* Animated Bars */}
          <div className="flex items-end gap-1 h-8 opacity-80">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={`w-1 bg-white rounded-full ${isPlaying
                    ? `animate-music-bar-${(i % 3) + 1}`
                    : "h-1"
                  } transition-all duration-300`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <SkipBack className="w-5 h-5 text-neutral-400 hover:text-white cursor-pointer transition-colors" />
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black ml-1" />}
            </button>
            <SkipForward className="w-5 h-5 text-neutral-400 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </>
  );
}
