"use client";

import React from "react";
import { Phone, MessageSquare, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/content";

export function StickyTopBar() {
  return (
    <aside aria-label="Quick contact" className="sticky top-0 z-50 bg-gradient-to-r from-red-950 via-red-900 to-dark-950 text-white border-b border-red-800/40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-xs sm:text-sm font-medium flex flex-wrap items-center justify-between gap-2">
        
        {/* Left: Location notice */}
        <div className="flex items-center space-x-2 text-red-200">
          <MapPin className="w-4 h-4 text-red-400 shrink-0" />
          <span className="hidden xs:inline">Serving Cookeville & Upper Cumberland, TN</span>
          <span className="xs:hidden">Cookeville & Upper Cumberland</span>
        </div>

        {/* Right: Phone & SMS CTAs */}
        <div className="flex items-center space-x-3 ml-auto">
          <span className="hidden md:inline text-gray-300 font-normal">Call or Text Now:</span>
          
          <a
            href={siteConfig.phoneTel}
            className="flex items-center space-x-1.5 bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-md transition-colors shadow-sm font-semibold tracking-wide"
            aria-label={`Call Relentless Mobile Details at ${siteConfig.phone}`}
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>{siteConfig.phone}</span>
          </a>

          <a
            href={siteConfig.phoneSms}
            className="flex items-center space-x-1.5 bg-dark-800 hover:bg-dark-700 text-gray-200 border border-red-500/30 px-2.5 py-1 rounded-md transition-colors font-medium text-xs"
            aria-label={`Text Relentless Mobile Details at ${siteConfig.phone}`}
          >
            <MessageSquare className="w-3.5 h-3.5 text-red-400" />
            <span className="hidden sm:inline">Text Us</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
