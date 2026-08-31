"use client";

import React from "react";
import { Sparkles, ShieldCheck, Gauge, Sun, Dog, CalendarSync, Phone } from "lucide-react";
import { siteConfig, AddonItem } from "@/lib/content";

export function AddonServices() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-red-500" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-red-500" />;
      case "Gauge":
        return <Gauge className="w-6 h-6 text-red-500" />;
      case "Sun":
        return <Sun className="w-6 h-6 text-red-500" />;
      case "Dog":
        return <Dog className="w-6 h-6 text-red-500" />;
      case "CalendarSync":
        return <CalendarSync className="w-6 h-6 text-red-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section id="addons" className="py-20 bg-dark-900 border-b border-dark-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-dark-800 border border-red-500/30 px-3 py-1 rounded-full text-xs font-bold text-red-400 uppercase tracking-widest mb-3">
              <span>Specialty Add-Ons</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-white">
              Add-On & Specialty Services
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            Upgrade any package with targeted restorations, multi-year paint protection, or pet hair remediation.
          </p>
        </div>

        {/* 6 Addons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.addons.map((addon: AddonItem) => (
            <div
              key={addon.id}
              className="bg-dark-850 border border-dark-700/80 hover:border-red-600/50 p-6 rounded-2xl transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-red-950/50 border border-red-800/40 rounded-xl group-hover:scale-105 transition-transform">
                    {getIcon(addon.iconName)}
                  </div>
                  <span className="text-xs font-bold text-red-400 bg-red-950/60 border border-red-800/30 px-2.5 py-1 rounded-full">
                    {addon.price}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {addon.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                  {addon.description}
                </p>
              </div>

              <a
                href={siteConfig.phoneTel}
                className="inline-flex items-center space-x-2 text-xs font-bold text-gray-300 hover:text-white group-hover:text-red-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Inquire for quote &rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
