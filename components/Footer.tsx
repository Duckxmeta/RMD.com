"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/lib/content";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-dark-950 text-gray-400 border-t border-dark-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-dark-800">
          
          {/* Col 1: Brand Info */}
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
              Operated by <strong className="text-gray-300">{siteConfig.ownerTeam}</strong>
            </div>
          </div>

          {/* Col 2: Service Areas */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              Service Area
            </h4>
            <div className="flex items-start space-x-2 text-xs text-gray-300">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>Cookeville, Algood, Baxter, Crossville & the Upper Cumberland Region, TN</span>
            </div>
            <p className="text-[11px] text-gray-500 leading-normal">
              Driveway & workplace service. Water & power access preferred.
            </p>
          </div>

          {/* Col 3: Quick Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={siteConfig.phoneTel}
                className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span>Call/Text: {siteConfig.phone}</span>
              </a>

              <a
                href={siteConfig.emailMailto}
                className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-red-500" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Col 4: Quick Navigation & Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              Navigation & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#packages" className="hover:text-red-400 transition-colors">Priced Packages</a>
              </li>
              <li>
                <a href="#addons" className="hover:text-red-400 transition-colors">Add-On Services</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-red-400 transition-colors">Photo Gallery</a>
              </li>
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

          {/* Required Payment Fee Note */}
          <div className="flex items-center space-x-1.5 bg-dark-900 border border-dark-800 px-3 py-1.5 rounded-lg text-gray-400 text-[11px]">
            <ShieldAlert className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <span>{siteConfig.footerNote}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
