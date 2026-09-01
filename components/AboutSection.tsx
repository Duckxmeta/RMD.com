"use client";

import React from "react";
import { CheckCircle2, MapPin, Wrench } from "lucide-react";
import { siteConfig } from "@/lib/content";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-dark-900 border-b border-dark-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Highlight Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-dark-850 to-dark-950 border border-dark-700/80 p-8 rounded-3xl relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="p-3 bg-red-950/80 border border-red-800/60 rounded-2xl w-fit">
                <Wrench className="w-8 h-8 text-red-500" />
              </div>
              
              <h3 className="text-2xl font-heading font-black text-white">
                Mobile detailing engineered around your day.
              </h3>

              <div className="space-y-4 pt-2">
                {siteConfig.about.bulletPoints.map((bp, i) => (
                  <div key={i} className="flex items-start space-x-3 text-sm text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>{bp}</span>
                  </div>
                ))}
              </div>

              {/* Service Requirement Box */}
              <div className="mt-6 p-4 rounded-xl bg-dark-900 border border-red-900/40 text-xs sm:text-sm text-red-200">
                <span className="font-bold text-red-400 block mb-1">Service Requirement Note:</span>
                We come to your home or work. Water and power access preferred.
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-red-950/80 border border-red-800/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-red-400 uppercase tracking-widest">
              <span>About Relentless</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white leading-tight">
              {siteConfig.about.title}
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              {siteConfig.about.paragraph1}
            </p>

            <p className="text-base text-gray-400 leading-relaxed">
              {siteConfig.about.paragraph2}
            </p>

            {/* Service Area Pill Badges */}
            <div className="pt-4 border-t border-dark-800">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
                Serving Location:
              </span>
              <div className="flex flex-wrap gap-2">
                {siteConfig.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="flex items-center space-x-1.5 bg-dark-800 border border-dark-700 text-gray-200 text-xs font-semibold px-3.5 py-1.5 rounded-lg"
                  >
                    <MapPin className="w-3.5 h-3.5 text-red-500" />
                    <span>{area}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
