"use client";

import React from "react";
import { Check, Phone, MessageSquare, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/content";

export function PackagesSection() {
  return (
    <section id="packages" className="py-20 bg-dark-950 border-b border-dark-700/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-950/80 border border-red-800/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-red-400 uppercase tracking-widest">
            <span>Mobile Detailing Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
            Relentless Detail Packages
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            We come directly to your home or work in Cookeville & Upper Cumberland. Satisfaction guaranteed.
          </p>
        </div>

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {siteConfig.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col rounded-2xl p-7 transition-all duration-300 ${
                pkg.popular
                  ? "bg-gradient-to-b from-dark-850 to-dark-900 border-2 border-red-600 shadow-xl shadow-red-950/50 lg:-translate-y-2 order-first lg:order-none"
                  : "bg-dark-900 border border-dark-700 hover:border-dark-600 shadow-lg"
              }`}
            >
              {/* Featured Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-700 text-white font-black text-xs px-4 py-1.5 rounded-full shadow-lg tracking-wider flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  <span>{pkg.badge || "FEATURED PACKAGE"}</span>
                </div>
              )}

              {/* Package Header */}
              <div className="border-b border-dark-700/80 pb-6 mb-6">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 min-h-[36px]">
                  {pkg.description}
                </p>

                {/* Price Lockup */}
                <div className="mt-5 space-y-3">
                  {pkg.startingPrices ? (
                    <div className="bg-dark-950/90 border border-dark-700 p-3.5 rounded-xl space-y-1.5">
                      <p className="text-[11px] font-bold text-red-400 uppercase tracking-wider mb-1">
                        Starting prices:
                      </p>
                      {pkg.startingPrices.map((sp, idx) => (
                        <div key={idx} className="flex justify-between items-center text-xs sm:text-sm">
                          <span className="text-gray-300 font-medium">{sp.label}:</span>
                          <span className="text-white font-bold">{sp.price}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-2xl sm:text-3xl font-heading font-black text-white leading-tight">
                      {pkg.price}
                    </div>
                  )}

                  {pkg.priceNote && (
                    <p className="text-[11px] text-gray-400 italic leading-snug pt-1">
                      {pkg.priceNote}
                    </p>
                  )}
                </div>
              </div>

              {/* Features List */}
              <div className="flex-1 space-y-2.5 mb-8">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  What’s Included:
                </p>
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-sm text-gray-200">
                    <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Action Buttons */}
              <div className="space-y-2 pt-2">
                <a
                  href={siteConfig.phoneTel}
                  className={`w-full flex items-center justify-center space-x-2 font-bold py-3.5 rounded-xl transition-all shadow-md text-sm ${
                    pkg.popular
                      ? "bg-red-600 hover:bg-red-500 text-white shadow-red-950/60"
                      : "bg-dark-800 hover:bg-dark-700 text-white border border-gray-700 hover:border-gray-500"
                  }`}
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call (931) 284-9355</span>
                </a>

                <a
                  href={siteConfig.phoneSms}
                  className="w-full flex items-center justify-center space-x-2 font-semibold py-2.5 rounded-xl text-xs text-gray-300 hover:text-white bg-dark-950 hover:bg-dark-800 border border-dark-700 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-red-400" />
                  <span>Text (931) 284-9355</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
