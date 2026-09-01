"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, CreditCard, Send, CheckCircle2, Star, Copy, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/content";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [smsBodyText, setSmsBodyText] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicle: "",
    service: "Relentless Full Detail",
    date: "",
    message: "",
  });

  const buildSmsBody = () => {
    return `Relentless booking request
Name: ${formData.name}
Phone: ${formData.phone}
Vehicle: ${formData.vehicle}
Service: ${formData.service}
When/where: ${formData.date || "Flexible"}
Notes: ${formData.message || "None"}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const smsText = buildSmsBody();
    setSmsBodyText(smsText);

    // Try copying to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(smsText).then(() => {
        setCopied(true);
      }).catch(() => {
        setCopied(false);
      });
    }

    // Trigger SMS link open
    const smsUrl = `sms:+19312849355?body=${encodeURIComponent(smsText)}`;
    window.location.href = smsUrl;

    setSubmitted(true);
  };

  const copyToClipboardAgain = () => {
    if (navigator.clipboard && smsBodyText) {
      navigator.clipboard.writeText(smsBodyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark-950 border-b border-dark-700/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Phone / Text / Facebook CTAs & Payments */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center space-x-2 bg-red-950/80 border border-red-800/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-red-400 uppercase tracking-widest mb-3">
                <span>Book Mobile Detail</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white leading-tight">
                Ready for a showroom finish?
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mt-3">
                Call, text, or message us on Facebook for immediate booking, or fill out the booking form to draft a text.
              </p>
            </div>

            {/* Big Phone & Direct CTAs Card */}
            <div className="bg-gradient-to-br from-red-950 via-dark-900 to-dark-950 border-2 border-red-600/80 p-6 rounded-2xl shadow-xl shadow-red-950/40 space-y-4">
              
              {/* Call CTA */}
              <a
                href={siteConfig.phoneTel}
                className="flex items-center space-x-4 group"
              >
                <div className="p-4 bg-red-600 rounded-2xl text-white group-hover:scale-105 transition-transform shadow-lg">
                  <Phone className="w-8 h-8 fill-current" />
                </div>
                <div>
                  <span className="text-xs text-red-400 font-bold uppercase tracking-wider block">
                    Call Jordan Immediately
                  </span>
                  <span className="text-2xl sm:text-3xl font-heading font-black text-white group-hover:text-red-400 transition-colors block">
                    {siteConfig.phone}
                  </span>
                </div>
              </a>

              {/* Text & Facebook Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={siteConfig.phoneSms}
                  className="flex items-center justify-center space-x-2 bg-dark-850 hover:bg-dark-800 border border-red-500/40 text-gray-100 py-3 px-3 rounded-xl text-xs font-bold transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-red-400" />
                  <span>Text (931) 284-9355</span>
                </a>
                
                <a
                  href={siteConfig.social.messenger}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-dark-850 hover:bg-dark-800 border border-blue-500/40 text-gray-100 py-3 px-3 rounded-xl text-xs font-bold transition-colors"
                >
                  <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.302 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26 6.559-6.96 3.131 3.259 5.886-3.259-6.558 6.961z"/>
                  </svg>
                  <span>Message on Facebook</span>
                </a>
              </div>

              {/* Google Review Link Button */}
              <a
                href={siteConfig.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-dark-900 hover:bg-dark-850 border border-amber-500/30 text-amber-300 py-2.5 px-3 rounded-xl text-xs font-bold transition-colors w-full"
              >
                <Star className="w-4 h-4 fill-current text-amber-400" />
                <span>Read our Google reviews ({siteConfig.googleLabel})</span>
              </a>
            </div>

            {/* Accepted Payments Card */}
            <div className="bg-dark-900 border border-dark-700/80 p-5 rounded-2xl space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-gray-200 uppercase tracking-wider">
                <CreditCard className="w-4 h-4 text-red-500" />
                <span>Accepted Payment Methods</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {siteConfig.paymentMethods.map((method) => (
                  <span
                    key={method}
                    className="bg-dark-800 text-gray-300 border border-dark-700 text-xs font-semibold px-2.5 py-1 rounded-md"
                  >
                    {method}
                  </span>
                ))}
              </div>

              <p className="text-xs text-red-300/90 pt-1 font-medium">
                {siteConfig.paymentNote}
              </p>
            </div>

          </div>

          {/* Right Column: Booking Request Form */}
          <div className="lg:col-span-7 bg-dark-900 border border-dark-700/80 p-6 sm:p-10 rounded-3xl shadow-xl">
            {submitted ? (
              <div className="py-8 space-y-6 text-left">
                <div className="flex items-center space-x-3 text-red-500">
                  <div className="p-3 bg-red-950 border border-red-600 rounded-full">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-white">
                      Message Copied & Ready!
                    </h3>
                    <p className="text-sm text-gray-300 font-medium">
                      Message copied. Tap Text Us or call (931) 284-9355.
                    </p>
                  </div>
                </div>

                {/* Copied Message Box */}
                <div className="bg-dark-950 border border-dark-700 p-4 rounded-xl space-y-2 relative font-mono text-xs text-gray-300">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block font-sans">
                    Text Message Content:
                  </span>
                  <pre className="whitespace-pre-wrap font-sans text-xs text-gray-200 leading-relaxed bg-dark-900 p-3 rounded-lg border border-dark-800">
                    {smsBodyText}
                  </pre>
                  
                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={copyToClipboardAgain}
                      className="inline-flex items-center space-x-1.5 text-xs text-red-400 hover:text-red-300 font-bold font-sans"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? "Copied to Clipboard!" : "Copy Message Again"}</span>
                    </button>

                    <a
                      href={`sms:+19312849355?body=${encodeURIComponent(smsBodyText)}`}
                      className="inline-flex items-center space-x-1 text-xs text-gray-400 hover:text-white font-sans underline"
                    >
                      <span>Re-open SMS App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href={`sms:+19312849355?body=${encodeURIComponent(smsBodyText)}`}
                    className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-4 rounded-xl text-xs text-center shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Text Us Now</span>
                  </a>

                  <a
                    href={siteConfig.phoneTel}
                    className="flex items-center justify-center space-x-2 bg-dark-800 hover:bg-dark-700 text-white font-bold py-3 px-4 rounded-xl text-xs text-center border border-gray-700"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call (931) 284-9355</span>
                  </a>

                  <a
                    href={siteConfig.social.messenger}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-dark-800 hover:bg-dark-700 text-blue-400 font-bold py-3 px-4 rounded-xl text-xs text-center border border-gray-700"
                  >
                    <span>Facebook Messenger</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-gray-500 hover:text-gray-300 underline pt-2 block"
                >
                  &larr; Edit request info
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-1">
                    Request a Mobile Appointment
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    This sends a text to Jordan. You can also call or message on Facebook.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-dark-950 border border-dark-700 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(931) 284-9355"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-dark-950 border border-dark-700 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Vehicle */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Vehicle (Car, Truck, or SUV) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ford Sedan or Chevy Truck"
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      className="w-full bg-dark-950 border border-dark-700 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Service Package Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Selected Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-dark-950 border border-dark-700 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="Relentless Full Detail">Relentless Full Detail (Cars starting at $200–$250)</option>
                      <option value="Exterior Detail">Exterior Detail (Call/text for pricing)</option>
                      <option value="Interior Detail">Interior Detail (Call/text for pricing)</option>
                      <option value="Paint Correction">Paint Correction</option>
                      <option value="Headlight Restoration">Headlight Restoration</option>
                      <option value="Ceramic Coating">Ceramic Coating</option>
                    </select>
                  </div>

                  {/* Preferred Date / Location */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Preferred Date / Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Saturday at my driveway in Cookeville"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-dark-950 border border-dark-700 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Notes or Special Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Let us know about vehicle condition, stains, or specific requests..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-dark-950 border border-dark-700 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                </div>

                <div className="space-y-2 pt-1">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-950/60 transition-all transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Draft Text Message to Jordan</span>
                  </button>

                  <p className="text-[11px] text-gray-400 text-center font-medium">
                    This sends a text to Jordan. You can also call or message on Facebook.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
