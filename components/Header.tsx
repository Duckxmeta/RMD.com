"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/lib/content";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services & Packages", href: "#packages" },
    { name: "Add-Ons", href: "#addons" },
    { name: "Gallery", href: "#gallery" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-dark-900/90 backdrop-blur-md border-b border-dark-700/60 sticky top-[37px] sm:top-[41px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Wordmark */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 bg-gradient-to-br from-red-600 to-red-900 rounded-xl p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/placeholders/logo.svg"
              alt="Relentless Mobile Details Logo"
              width={40}
              height={40}
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
        <nav className="hidden lg:flex items-center space-x-8">
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

        {/* Header Right Action */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href={siteConfig.phoneTel}
            className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm px-5 py-2.5 rounded-lg shadow-md shadow-red-950/50 transition-all transform hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call / Text</span>
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
          <div className="pt-2 flex flex-col space-y-2">
            <a
              href={siteConfig.phoneTel}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 bg-red-600 text-white font-bold py-3 rounded-lg text-center"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call / Text {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
