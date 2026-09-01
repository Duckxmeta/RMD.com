"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Video, Phone, MessageSquare, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/content";

export function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="video" className="py-20 bg-dark-950 border-b border-dark-700/60 relative overflow-hidden">
      
      {/* Radial background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-red-950/80 border border-red-800/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-red-400 uppercase tracking-widest">
            <Video className="w-3.5 h-3.5" />
            <span>Video Walkthrough</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
            Full Detail — Inside & Out
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Watch our complete mobile detail transformation in action on location in Cookeville & Upper Cumberland.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-dark-900 border-2 border-dark-700 hover:border-red-600/60 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300">
            
            <video
              ref={videoRef}
              controls
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full aspect-video object-cover bg-black"
            >
              <source src="/fulldetailinandout.mov" type="video/quicktime" />
              <source src="/fulldetailinandout.mov" type="video/mp4" />
              Your browser does not support HTML5 video tag.
            </video>

            {/* Custom Overlay Play Button if not started */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors group cursor-pointer"
                aria-label="Play video"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-red-600 group-hover:bg-red-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-red-950 transform group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 sm:w-12 sm:h-12 fill-current ml-1" />
                </div>
              </button>
            )}
          </div>

          {/* Video Metadata Footer */}
          <div className="mt-6 p-6 rounded-2xl bg-dark-900 border border-dark-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-left">
              <div className="p-3 rounded-xl bg-red-950 border border-red-800/60 text-red-500 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Ready for this level of detail on your vehicle?
                </h3>
                <p className="text-xs text-gray-400">
                  We come directly to your home or work in Cookeville & Upper Cumberland.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <a
                href={siteConfig.phoneTel}
                className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-500 text-white font-bold px-5 py-3 rounded-xl text-xs shadow-md transition-colors"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call (931) 284-9355</span>
              </a>

              <a
                href={siteConfig.phoneSms}
                className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 bg-dark-850 hover:bg-dark-800 text-gray-200 font-semibold px-4 py-3 rounded-xl text-xs border border-dark-700 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-red-400" />
                <span>Text Us</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
