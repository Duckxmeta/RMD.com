"use client";

import React from "react";
import { Truck, MapPin, Award, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/content";

export function TrustStrip() {
  const icons = [
    <Truck key="truck" className="w-6 h-6 text-red-500" />,
    <MapPin key="map" className="w-6 h-6 text-red-500" />,
    <Award key="award" className="w-6 h-6 text-red-500" />,
    <ShieldCheck key="shield" className="w-6 h-6 text-red-500" />,
  ];

  return (
    <section aria-label="Trust highlights" className="bg-dark-900 border-b border-dark-700/60 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.trustPoints.map((point, index) => (
            <div
              key={point.title}
              className="flex items-center space-x-4 p-4 rounded-xl bg-dark-850 border border-dark-700/60 hover:border-red-500/40 transition-colors"
            >
              <div className="p-3 rounded-lg bg-red-950/60 border border-red-800/30 shrink-0">
                {icons[index]}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5">
                  <h3 className="font-heading font-bold text-base text-white">
                    {point.title}
                  </h3>
                  {point.isPlaceholder && (
                    <span className="text-[10px] bg-dark-700 text-gray-400 px-1.5 py-0.5 rounded font-mono">
                      Placeholder
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-0.5 leading-snug">
                  {point.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
