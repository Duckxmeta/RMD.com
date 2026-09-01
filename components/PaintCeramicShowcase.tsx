"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck, Play, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/content";

export function PaintCeramicShowcase() {
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

  const showcaseItems = [
    {
      title: "Stage Paint Correction",
      subtitle: "Swirl & Scratch Removal",
      imagePath: "/paint-ceramic/paintcorrection1.jpeg",
      alt: "Paint correction machine polishing result",
      tag: "Paint Correction",
      description: "Machine polishing eliminates micro-scratches, swirl marks, and oxidation to restore deep mirror paint reflection.",
    },
    {
      title: "SiO2 Ceramic Hydrophobic Seal",
      subtitle: "Multi-Year Shield & Beading",
      imagePath: "/paint-ceramic/ceramiccoating1.jpeg",
      alt: "Ceramic coating hydrophobic water beading",
      tag: "Ceramic Coating",
      description: "Ultra-durable hydrophobic layer repels rain, road grime, UV rays, and chemical fallout.",
    },
    {
      title: "Paint Correction + Ceramic Package",
      subtitle: "Total Exterior Transformation",
      imagePath: "/paint-ceramic/paint-and-ceramic.jpeg",
      alt: "Combined paint correction and ceramic coating finish",
      tag: "Combined Package",
      description: "Complete 2-in-1 exterior treatment for maximum gloss depth and long-lasting paint preservation.",
    },
  ];

  return (
    <section id="paint-ceramic-showcase" className="py-20 bg-dark-950 border-b border-dark-700/60 relative overflow-hidden">
      
      {/* Subtle radial glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[300px] bg-red-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-950/80 border border-red-800/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-red-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Paint & Ceramic Specialist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
            Paint Correction & Ceramic Coating
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Real customer results in Cookeville & Upper Cumberland. From swirl-free machine polishing to hydrophobic SiO2 paint shields.
          </p>
        </div>

        {/* 3 Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {showcaseItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-dark-900 border border-dark-700/80 rounded-2xl overflow-hidden shadow-xl hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full bg-dark-950 overflow-hidden">
                  <Image
                    src={item.imagePath}
                    alt={item.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-red-600/90 text-white font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                    {item.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-heading font-bold text-white">
                    {item.title}
                  </h3>
                  <span className="text-xs font-bold text-red-400 block">
                    {item.subtitle}
                  </span>
                  <p className="text-xs text-gray-400 leading-relaxed pt-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="p-6 pt-0 border-t border-dark-800/80 mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-300">Custom Quote</span>
                <a
                  href={siteConfig.phoneTel}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-red-400 hover:text-red-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Inquire Now &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Video Showcase Box */}
        <div className="max-w-4xl mx-auto bg-dark-900 border border-dark-700/80 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Paint Correction Process Video</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                Machine Polishing & Paint Correction in Action
              </h3>
            </div>
            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-md transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call (931) 284-9355</span>
            </a>
          </div>

          {/* Video Player */}
          <div className="relative aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-xl border border-dark-700">
            <video
              ref={videoRef}
              controls
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover"
            >
              <source src="/paint-ceramic/paintcorrection.mov" type="video/quicktime" />
              <source src="/paint-ceramic/paintcorrection.mov" type="video/mp4" />
              Your browser does not support HTML5 video player.
            </video>

            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors group cursor-pointer"
                aria-label="Play Paint Correction Video"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 group-hover:bg-red-500 text-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                </div>
              </button>
            )}
          </div>

          <div className="flex items-center space-x-2 text-xs text-gray-400">
            <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
            <span>Delivered on location to your driveway or workplace with satisfaction guaranteed.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
