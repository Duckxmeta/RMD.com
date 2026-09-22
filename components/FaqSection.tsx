"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageSquare } from "lucide-react";
import { siteConfig, FaqItem } from "@/lib/content";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-dark-950 border-b border-dark-700/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 bg-red-950/80 border border-red-800/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-red-400 uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Everything you need to know about our mobile detailing services in Cookeville & Upper Cumberland.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq: FaqItem) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-dark-900 border border-dark-700/80 rounded-2xl overflow-hidden transition-all duration-200 shadow-lg"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-heading font-bold text-white group-hover:text-red-400 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-xl bg-dark-800 border border-dark-700 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-red-950/80 border-red-800/60 text-red-400" : "text-gray-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-dark-800/80">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Footer CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-dark-900 border border-dark-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-base font-bold text-white">Have a specific question about your vehicle?</h3>
            <p className="text-xs text-gray-400">Jordan & Houston are ready to answer any custom detailing questions.</p>
          </div>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <a
              href={siteConfig.phoneTel}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-500 text-white font-bold px-5 py-3 rounded-xl text-xs shadow-md transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call (931) 284-9355</span>
            </a>
            <a
              href={siteConfig.phoneSms}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 bg-dark-850 hover:bg-dark-800 text-gray-200 font-semibold px-4 py-3 rounded-xl text-xs border border-dark-700 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-red-400" />
              <span>Text Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
