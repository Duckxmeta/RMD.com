"use client";

import React from "react";
import { Sparkles, ShieldCheck, Sun, Phone, MessageSquare } from "lucide-react";
import { siteConfig, AddonItem } from "@/lib/content";

export function AddonServices() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-red-500" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-red-500" />;
      case "Sun":
        return <Sun className="w-6 h-6 text-red-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section id="addons" className="py-20 bg-dark-900 border-b border-dark-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-dark-800 border border-red-500/30 px-3 py-1 rounded-full text-xs font-bold text-red-400 uppercase tracking-widest mb-3">
              <span>Specialty Add-Ons</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-white">
              Add-On Services
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            Upgrade any mobile detail with paint correction, ceramic hydrophobic protection, or headlight clarity restoration.
          </p>
        </div>

        {/* 3 Addons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <span className="text-xs font-bold text-red-400 bg-red-950/60 border border-red-800/30 px-3 py-1 rounded-full">
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

              <div className="flex items-center space-x-3 pt-2">
                <a
                  href={siteConfig.phoneTel}
                  className="flex-1 flex items-center justify-center space-x-1.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold py-2.5 rounded-lg transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call for quote</span>
                </a>
                
                <a
                  href={siteConfig.phoneSms}
                  className="flex-1 flex items-center justify-center space-x-1.5 bg-dark-800 hover:bg-dark-700 text-gray-200 text-xs font-semibold py-2.5 rounded-lg border border-dark-700 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-red-400" />
                  <span>Text</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
