"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { Sun, MoveHorizontal, Phone, MessageSquare, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/content";

interface HeadlightPair {
  id: string;
  title: string;
  beforeImg: string;
  afterImg: string;
  description: string;
}

export function HeadlightShowcase() {
  const pairs: HeadlightPair[] = [
    {
      id: "pair-1",
      title: "Headlight Restoration — Pair #1",
      beforeImg: "/headlights/headlightB1.jpeg",
      afterImg: "/headlights/headlightA1.jpeg",
      description: "Severe oxidation & yellow haze wet-sanded, polished, and ceramic sealed for factory lens clarity.",
    },
    {
      id: "pair-2",
      title: "Headlight Restoration — Pair #2",
      beforeImg: "/headlights/headlightB2.jpeg",
      afterImg: "/headlights/headlightA2.jpeg",
      description: "Heavy cloudiness removed to restore maximum night-driving beam projection.",
    },
  ];

  const [activePairIndex, setActivePairIndex] = useState<number>(0);
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activePair = pairs[activePairIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section id="headlights" className="py-20 bg-dark-900 border-b border-dark-700/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-950/80 border border-amber-800/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            <span>Real Customer Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
            Headlight Restoration Before & After
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Foggy, oxidized lenses diminish safety and appearance. Drag the slider below to see our complete restoration results.
          </p>

          {/* Pair Selector Tabs */}
          <div className="flex justify-center gap-3 pt-2">
            {pairs.map((pair, idx) => (
              <button
                key={pair.id}
                onClick={() => {
                  setActivePairIndex(idx);
                  setSliderPos(50);
                }}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activePairIndex === idx
                    ? "bg-red-600 text-white shadow-md shadow-red-950/60"
                    : "bg-dark-850 hover:bg-dark-800 text-gray-300 border border-dark-700"
                }`}
              >
                {pair.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-between text-xs text-gray-400 font-medium px-1">
            <span className="text-red-400 font-bold uppercase tracking-wider">{activePair.title}</span>
            <span className="flex items-center space-x-1">
              <MoveHorizontal className="w-3.5 h-3.5 text-gray-400" />
              <span>Drag handle to compare</span>
            </span>
          </div>

          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-2 border-dark-700/80 cursor-ew-resize select-none bg-dark-950"
          >
            {/* AFTER Image (Bottom Layer) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={activePair.afterImg}
                alt={`${activePair.title} - After Restoration`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 right-4 bg-red-600/95 text-white font-black text-xs px-3 py-1.5 rounded-md shadow-lg tracking-wider uppercase backdrop-blur-sm">
                AFTER RESTORATION
              </div>
            </div>

            {/* BEFORE Image (Top Layer, clipped) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="relative w-full h-full min-w-full">
                <Image
                  src={activePair.beforeImg}
                  alt={`${activePair.title} - Before Restoration`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-dark-950/90 text-amber-400 border border-amber-500/40 font-black text-xs px-3 py-1.5 rounded-md shadow-lg tracking-wider uppercase backdrop-blur-sm">
                BEFORE (OXIDIZED)
              </div>
            </div>

            {/* Slider Handle Divider Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.8)] z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white border-2 border-red-600 rounded-full flex items-center justify-center shadow-xl text-red-600">
                <MoveHorizontal className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>
          </div>

          {/* Description & Action Bar */}
          <div className="p-6 rounded-2xl bg-dark-850 border border-dark-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-left">
              <div className="p-3 rounded-xl bg-red-950 border border-red-800/60 text-red-500 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">
                  {activePair.description}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  Includes multi-stage wet sanding, compound clarity polish & UV protective seal.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2.5 w-full sm:w-auto shrink-0">
              <a
                href={siteConfig.phoneTel}
                className="flex-1 sm:flex-initial flex items-center justify-center space-x-1.5 bg-red-600 hover:bg-red-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs shadow-md transition-colors"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call for quote</span>
              </a>

              <a
                href={siteConfig.phoneSms}
                className="flex-1 sm:flex-initial flex items-center justify-center space-x-1.5 bg-dark-900 hover:bg-dark-800 text-gray-200 font-semibold px-4 py-2.5 rounded-xl text-xs border border-dark-700 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-red-400" />
                <span>Text</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
