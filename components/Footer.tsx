"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Star, ShieldAlert, CreditCard } from "lucide-react";
import { siteConfig } from "@/lib/content";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-dark-950 text-gray-400 border-t border-dark-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-dark-800">
          
          {/* Col 1: Brand & Ownership Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-9 h-9 bg-gradient-to-br from-red-600 to-red-900 rounded-xl p-0.5 shadow-md">
                <Image
                  src="/placeholders/logo.svg"
                  alt="Relentless Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-lg text-white tracking-wider leading-none">
                  RELENTLESS
                </span>
                <span className="text-[10px] font-bold text-red-500 tracking-widest uppercase leading-tight mt-0.5">
                  MOBILE DETAILS
                </span>
              </div>
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed">
              {siteConfig.tagline}
            </p>

            <div className="text-xs text-gray-400 pt-1">
              Locally owned & operated by <strong className="text-gray-200">{siteConfig.owner}</strong>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-850 hover:bg-dark-800 text-gray-300 hover:text-blue-400 transition-colors border border-dark-700"
                title="Facebook - Relentless Mobile Details"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-850 hover:bg-dark-800 text-gray-300 hover:text-pink-400 transition-colors border border-dark-700"
                title="TikTok - @relentlessmobiledetails"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.29 0 .56.04.83.12V9.33a6.33 6.33 0 00-1-.08 6.34 6.34 0 106.34 6.34V8.75a8.16 8.16 0 004.94 1.62V6.92a4.85 4.85 0 01-1-.23z"/>
                </svg>
              </a>

              <a
                href={siteConfig.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-850 hover:bg-dark-800 text-amber-400 hover:text-white transition-colors border border-dark-700"
                title="Leave a Google review for Relentless Mobile Details - Cookeville"
              >
                <Star className="w-4 h-4 fill-current text-amber-400" />
              </a>
            </div>
          </div>

          {/* Col 2: Service Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              Location & Service Area
            </h4>
            <div className="flex items-start space-x-2 text-xs text-gray-300">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>Cookeville & Upper Cumberland, TN</span>
            </div>
            <p className="text-xs text-gray-400 leading-normal">
              We come to your home or work. Water and power access preferred.
            </p>
          </div>

          {/* Col 3: Direct Contact & Reviews */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              Direct Booking & Reviews
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={siteConfig.phoneTel}
                className="flex items-center space-x-2 text-gray-200 hover:text-red-400 transition-colors font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span>Call/Text: {siteConfig.phone}</span>
              </a>

              <a
                href={siteConfig.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-amber-300 hover:text-white transition-colors pt-1"
              >
                <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
                <span>Leave a Google review ({siteConfig.googleLabel})</span>
              </a>
            </div>
          </div>

          {/* Col 4: Payments & Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              Payments & Legal
            </h4>
            <div className="text-xs text-gray-400 space-y-1">
              <div className="flex items-center space-x-1.5 text-gray-300 font-medium">
                <CreditCard className="w-3.5 h-3.5 text-red-500" />
                <span>Cash, Zelle, Cash App, Venmo, PayPal, check, or card</span>
              </div>
              <p className="text-[11px] text-red-300/90 pt-1">
                {siteConfig.paymentNote}
              </p>
            </div>
            <ul className="space-y-1.5 text-xs pt-2">
              <li>
                <Link href="/privacy" className="hover:text-red-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-red-400 transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Fee Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </div>

          <div className="flex items-center space-x-1.5 bg-dark-900 border border-dark-800 px-3 py-1.5 rounded-lg text-gray-400 text-[11px]">
            <ShieldAlert className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <span>{siteConfig.paymentNote}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
