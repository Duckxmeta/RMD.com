"use client";

import React from "react";
import { Phone, MessageSquare, MapPin, Star } from "lucide-react";
import { siteConfig } from "@/lib/content";

export function StickyTopBar() {
  return (
    <aside aria-label="Quick contact" className="sticky top-0 z-50 bg-gradient-to-r from-red-950 via-red-900 to-dark-950 text-white border-b border-red-800/40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-xs sm:text-sm font-medium flex flex-wrap items-center justify-between gap-2">
        
        {/* Left: Service Area & Google Review Link */}
        <div className="flex items-center space-x-3 text-red-200">
          <div className="flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
            <span className="hidden xs:inline">Cookeville & Upper Cumberland, TN</span>
            <span className="xs:hidden">Cookeville, TN</span>
          </div>

          <span className="text-red-700 hidden md:inline">•</span>

          <a
            href={siteConfig.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-1 text-xs text-amber-300 hover:text-white transition-colors"
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Relentless Mobile Details - Cookeville on Google</span>
          </a>
        </div>

        {/* Right: Phone & Text CTAs */}
        <div className="flex items-center space-x-2.5 ml-auto">
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
            <span>Text Us</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
