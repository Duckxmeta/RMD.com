"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, Mail, Calendar, CheckCircle2, Send } from "lucide-react";
import { siteConfig } from "@/lib/content";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicle: "",
    service: "Relentless Full Detail",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submission received:", formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-dark-950 border-b border-dark-700/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Phone / Text / Email Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-red-950/80 border border-red-800/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-red-400 uppercase tracking-widest mb-3">
                <span>Book Mobile Detail</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white leading-tight">
                Ready for a showroom finish?
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mt-4">
                Call or text us directly for immediate scheduling, or fill out the booking form to request your mobile appointment date.
              </p>
            </div>

            {/* Big Phone Card */}
            <div className="bg-gradient-to-br from-red-950 via-dark-900 to-dark-950 border-2 border-red-600/80 p-6 rounded-2xl shadow-xl shadow-red-950/40 space-y-4">
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest block">
                Instant Phone Booking
              </span>

              <a
                href={siteConfig.phoneTel}
                className="flex items-center space-x-4 group"
              >
                <div className="p-4 bg-red-600 rounded-2xl text-white group-hover:scale-105 transition-transform shadow-lg">
                  <Phone className="w-8 h-8 fill-current" />
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-heading font-black text-white group-hover:text-red-400 transition-colors block">
                    {siteConfig.phone}
                  </span>
                  <span className="text-xs text-gray-300 font-medium">
                    Click to call immediately
                  </span>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={siteConfig.phoneSms}
                  className="flex items-center justify-center space-x-2 bg-dark-850 hover:bg-dark-800 border border-dark-700 text-gray-200 py-2.5 px-3 rounded-xl text-xs font-bold transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-red-500" />
                  <span>Click-to-Text</span>
                </a>
                
                <a
                  href={siteConfig.emailMailto}
                  className="flex items-center justify-center space-x-2 bg-dark-850 hover:bg-dark-800 border border-dark-700 text-gray-200 py-2.5 px-3 rounded-xl text-xs font-bold transition-colors"
                >
                  <Mail className="w-4 h-4 text-red-500" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>

            {/* Requirement Reminder */}
            <div className="bg-dark-900 border border-dark-700/80 p-5 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                Requirement Notice:
              </span>
              <p className="text-xs text-gray-400 leading-relaxed">
                {siteConfig.requirementLine}
              </p>
            </div>
          </div>

          {/* Right Column: Booking Request Form */}
          <div className="lg:col-span-7 bg-dark-900 border border-dark-700/80 p-6 sm:p-10 rounded-3xl shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 bg-red-950 border-2 border-red-600 rounded-full flex items-center justify-center mx-auto text-red-500">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-heading font-bold text-white">
                    Booking Request Received!
                  </h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto">
                    Thank you! {siteConfig.ownerTeam} will review your request and confirm your appointment time at <strong className="text-white">{formData.phone || siteConfig.phone}</strong> shortly.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-dark-800 hover:bg-dark-700 text-gray-200 text-xs font-bold px-6 py-2.5 rounded-xl transition-colors border border-gray-700"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-1">
                    Request a Mobile Appointment
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Fill in your details below and we will contact you to confirm.
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
                      placeholder="(931) 555-0100"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-dark-950 border border-dark-700 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Vehicle */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Vehicle (Year / Make / Model) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 2023 Ford F-150"
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
                      <option value="Relentless Full Detail">Relentless Full Detail ($XX)</option>
                      <option value="Exterior Detail">Exterior Detail ($XX)</option>
                      <option value="Interior Detail">Interior Detail ($XX)</option>
                      <option value="Paint Correction / Ceramic">Paint Correction / Ceramic Coating</option>
                      <option value="Other Addon / Custom">Other Add-on / Custom Quote</option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Preferred Date / Time
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g. This Saturday morning in Cookeville"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-dark-950 border border-dark-700 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Special Notes or Water/Power Location Info
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Let us know if you have water/power access, pet hair, or specific stains..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-dark-950 border border-dark-700 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-950/60 transition-all transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Mobile Detail Request</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
