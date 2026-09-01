"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, Camera } from "lucide-react";
import { siteConfig, GalleryItem } from "@/lib/content";

export function GallerySection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const categories = ["All", "Headlights", "Exterior", "Interior", "Paint Correction", "Ceramic"];

  const filteredGallery = selectedFilter === "All"
    ? siteConfig.gallery
    : siteConfig.gallery.filter(item => item.category === selectedFilter);

  return (
    <section id="gallery" className="py-20 bg-dark-950 border-b border-dark-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Title & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-red-950/80 border border-red-800/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-red-400 uppercase tracking-widest mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Work Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white">
              Recent Detailing Gallery
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedFilter === category
                    ? "bg-red-600 text-white shadow-md shadow-red-950/60"
                    : "bg-dark-850 hover:bg-dark-800 text-gray-300 border border-dark-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="group relative bg-dark-900 border border-dark-700/80 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:border-red-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Thumbnail */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-dark-850">
                <Image
                  src={item.imagePath}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-dark-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-red-600 text-white rounded-full shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Category tag */}
                <div className="absolute top-3 left-3 bg-dark-950/80 text-gray-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-sm border border-gray-700">
                  {item.category}
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 bg-dark-900 border-t border-dark-800">
                <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal Popup */}
      {activeLightbox && (
        <div
          onClick={() => setActiveLightbox(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-dark-900 border border-dark-700 rounded-2xl overflow-hidden shadow-2xl space-y-4 p-4 sm:p-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-dark-800 text-gray-300 hover:text-white rounded-full border border-gray-700 focus:outline-none"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image View */}
            <div className="relative aspect-[16/10] w-full bg-dark-950 rounded-xl overflow-hidden">
              <Image
                src={activeLightbox.imagePath}
                alt={activeLightbox.alt}
                fill
                className="object-contain"
              />
            </div>

            {/* Lightbox Metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2">
              <div>
                <h4 className="text-lg font-bold text-white">{activeLightbox.title}</h4>
                <p className="text-xs text-gray-400">{activeLightbox.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
