"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, Star } from "lucide-react";
import { siteConfig } from "@/lib/content";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Packages", href: "#packages" },
    { name: "Add-Ons", href: "#addons" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-dark-900/90 backdrop-blur-md border-b border-dark-700/60 sticky top-[37px] sm:top-[41px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Wordmark */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-200 shrink-0">
            <Image
              src="/placeholders/logo.jpg"
              alt="Relentless Mobile Details Logo"
              width={48}
              height={48}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-lg sm:text-xl text-white tracking-wider leading-none group-hover:text-red-500 transition-colors">
              RELENTLESS
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-red-500 tracking-widest uppercase leading-tight mt-0.5">
              MOBILE DETAILS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white hover:text-red-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header Right Action & Social Icons */}
        <div className="hidden sm:flex items-center space-x-3">
          
          {/* Facebook Icon Link */}
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-dark-800 text-gray-300 hover:text-blue-400 hover:bg-dark-700 transition-colors"
            title="Facebook - Relentless Mobile Details"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* TikTok Icon Link */}
          <a
            href={siteConfig.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-dark-800 text-gray-300 hover:text-pink-400 hover:bg-dark-700 transition-colors"
            title="TikTok - @relentlessmobiledetails"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.29 0 .56.04.83.12V9.33a6.33 6.33 0 00-1-.08 6.34 6.34 0 106.34 6.34V8.75a8.16 8.16 0 004.94 1.62V6.92a4.85 4.85 0 01-1-.23z"/>
            </svg>
          </a>

          {/* Google Reviews Badge */}
          <a
            href={siteConfig.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-1.5 bg-dark-800 hover:bg-dark-700 text-amber-400 text-xs font-bold px-3 py-2 rounded-lg border border-dark-700 transition-colors"
            title="Relentless Mobile Details - Cookeville on Google"
          >
            <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
            <span>Google Reviews</span>
          </a>

          {/* Call / Text Button */}
          <a
            href={siteConfig.phoneTel}
            className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm px-4 py-2.5 rounded-lg shadow-md shadow-red-950/50 transition-all transform hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>(931) 284-9355</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-dark-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark-950 border-b border-dark-700 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-red-400 hover:bg-dark-900 transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Social Links */}
          <div className="flex items-center space-x-3 px-3 py-2">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 text-sm font-semibold flex items-center space-x-1"
            >
              <span>Facebook</span>
            </a>
            <span className="text-gray-600">•</span>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-400 text-sm font-semibold flex items-center space-x-1"
            >
              <span>TikTok</span>
            </a>
            <span className="text-gray-600">•</span>
            <a
              href={siteConfig.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-white text-sm font-semibold flex items-center space-x-1"
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Google Reviews</span>
            </a>
          </div>

          <div className="pt-2 flex flex-col space-y-2">
            <a
              href={siteConfig.phoneTel}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 bg-red-600 text-white font-bold py-3 rounded-lg text-center"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call (931) 284-9355</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
