"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { Phone, ArrowRight, Sparkles, MoveHorizontal, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/content";

export function HeroBeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
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
    <section className="relative overflow-hidden bg-dark-950 pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-dark-700/60">
      
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-red-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 bg-dark-800/80 border border-red-500/30 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-gray-200 tracking-wide">
                Mobile Detailing • We Come To You
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-white leading-[1.1] tracking-tight">
              Cookeville’s mobile detail, <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600">done on your schedule.</span>
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl">
              {siteConfig.heroSubhead}
            </p>

            {/* Service requirement note */}
            <div className="flex items-start space-x-2.5 bg-dark-900/80 border border-dark-700/80 p-3 rounded-lg text-xs sm:text-sm text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>{siteConfig.requirementLine}</span>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-4 pt-2">
              <a
                href={siteConfig.phoneTel}
                className="flex items-center justify-center space-x-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-base px-7 py-4 rounded-xl shadow-lg shadow-red-950/70 transform hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call / Text {siteConfig.phone}</span>
              </a>

              <a
                href="#packages"
                className="flex items-center justify-center space-x-2 bg-dark-800 hover:bg-dark-700 border border-gray-700 hover:border-gray-500 text-gray-100 font-semibold text-base px-6 py-4 rounded-xl transition-colors"
              >
                <span>Jump to packages</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Before / After Image Slider */}
          <div className="lg:col-span-6">
            <div className="space-y-3">
              
              {/* Slider header instructions */}
              <div className="flex items-center justify-between text-xs text-gray-400 font-medium px-1">
                <span className="text-red-400 font-bold uppercase tracking-wider">Before & After Transformation</span>
                <span className="flex items-center space-x-1">
                  <MoveHorizontal className="w-3.5 h-3.5 text-gray-400" />
                  <span>Drag slider to compare</span>
                </span>
              </div>

              {/* Slider Container */}
              <div
                ref={containerRef}
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-dark-700/80 cursor-ew-resize select-none bg-dark-900"
              >
                {/* AFTER Image (Bottom Layer) */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/placeholders/hero-after.jpg"
                    alt="After detailing - paint corrected high gloss finish placeholder"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-4 right-4 bg-red-600/90 text-white font-black text-xs px-3 py-1.5 rounded-md shadow-lg tracking-wider uppercase backdrop-blur-sm">
                    AFTER DETAIL
                  </div>
                </div>

                {/* BEFORE Image (Top Layer, clipped) */}
                <div
                  className="absolute inset-0 h-full overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="relative w-full h-full min-w-full">
                    <Image
                      src="/placeholders/hero-before.jpg"
                      alt="Before detailing - unwashed vehicle placeholder"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-dark-950/90 text-gray-300 border border-gray-700 font-black text-xs px-3 py-1.5 rounded-md shadow-lg tracking-wider uppercase backdrop-blur-sm">
                    BEFORE DETAIL
                  </div>
                </div>

                {/* Slider Handle Divider Bar */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.8)] z-20 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white border-2 border-red-600 rounded-full flex items-center justify-center shadow-xl text-red-600">
                    <MoveHorizontal className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
