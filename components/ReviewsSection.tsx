"use client";

import React from "react";
import { Star, ExternalLink } from "lucide-react";
import { siteConfig, ReviewItem } from "@/lib/content";

export function ReviewsSection() {
  const { reviewsSummary, reviews } = siteConfig;

  return (
    <section id="reviews" className="py-20 bg-dark-900 border-b border-dark-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-amber-950/80 border border-amber-800/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
              <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
              <span>Verified Customer Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white">
              {reviewsSummary.heading}
            </h2>
            <div className="flex items-center space-x-3 mt-3">
              <div className="flex items-center space-x-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-300">
                {reviewsSummary.subhead}
              </span>
            </div>
          </div>

          {/* External Google Reviews Link Button */}
          <div>
            <a
              href={reviewsSummary.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-dark-850 hover:bg-dark-800 text-amber-300 hover:text-white font-bold text-sm px-5 py-3 rounded-xl border border-amber-500/30 transition-all shadow-md"
            >
              <span>{reviewsSummary.buttonText}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 6 Reviews Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev: ReviewItem) => (
            <div
              key={rev.id}
              className="bg-dark-950 border border-dark-700/80 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-colors shadow-lg"
            >
              <div className="space-y-3">
                {/* Author & Source */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-red-950 border border-red-800/60 flex items-center justify-center font-bold text-xs text-white">
                      {rev.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white leading-none">
                        {rev.author}
                      </h3>
                      <span className="text-[11px] text-gray-400 font-medium">
                        {rev.source} Review
                      </span>
                    </div>
                  </div>

                  {/* 5-Star Rating */}
                  <div className="flex items-center space-x-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Source Badge */}
              <div className="pt-2 border-t border-dark-850 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                <span>Verified Google Review</span>
                <span className="text-amber-400 font-bold">5.0 ★</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center pt-4">
          <a
            href={reviewsSummary.googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-bold text-gray-400 hover:text-amber-300 transition-colors"
          >
            <span>See all 18 reviews on {reviewsSummary.sourceName}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
