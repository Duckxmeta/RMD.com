import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/lib/content";

export const metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: `Terms of service for ${siteConfig.name} mobile auto detailing in Cookeville, TN.`,
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24 bg-dark-950 min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-bold text-red-400 hover:text-red-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-3 border-b border-dark-800 pb-8">
          <div className="p-3 bg-red-950/60 border border-red-800/40 rounded-xl w-fit">
            <FileText className="w-6 h-6 text-red-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-black text-white">
            Terms of Service
          </h1>
          <p className="text-xs text-gray-400 font-mono">
            Last Updated: January 2026 • {siteConfig.name}
          </p>
        </div>

        <div className="space-y-6 text-sm text-gray-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Service Requirements</h2>
            <p>
              We come to your home or work. Water and power access preferred. Customers are responsible for providing safe access to the vehicle at the designated location in Cookeville or the Upper Cumberland region.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Payment & Card Fees</h2>
            <p>
              Accepted payment methods include Cash, Zelle, Cash App, Venmo, PayPal, check, or card. {siteConfig.paymentNote}
            </p>
            <div className="p-3 bg-dark-900 border border-red-800/40 rounded-lg text-xs text-red-300 flex items-center space-x-2 mt-2">
              <ShieldAlert className="w-4 h-4 text-red-500 shrink-0" />
              <span>{siteConfig.paymentNote}</span>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Appointments & Contact</h2>
            <p>
              For appointment scheduling or inquiries, call or text {siteConfig.owner} at <a href={siteConfig.phoneTel} className="text-red-400 font-bold">{siteConfig.phone}</a> or message us on <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Facebook</a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
