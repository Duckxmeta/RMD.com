import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/content";

export const metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy policy for ${siteConfig.name} serving Cookeville and Upper Cumberland, TN.`,
};

export default function PrivacyPage() {
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
            <ShieldCheck className="w-6 h-6 text-red-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-black text-white">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-400 font-mono">
            Last Updated: January 2026 • {siteConfig.name}
          </p>
        </div>

        <div className="space-y-6 text-sm text-gray-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">Information We Collect</h2>
            <p>
              When you request a mobile detailing appointment or contact {siteConfig.name}, we collect personal details you voluntarily provide, including your name, phone number, vehicle information, location address, and service preferences.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">How We Use Your Information</h2>
            <p>
              We use your information strictly to schedule mobile appointments, deliver auto detailing services in Cookeville and the Upper Cumberland region, communicate service updates, and process payment receipts. We do not sell or rent your personal data to third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">Contact & Mobile Messaging</h2>
            <p>
              By providing your mobile phone number, you consent to receive direct phone calls or text messages regarding your mobile detailing appointment. You may opt-out of messages at any time by notifying {siteConfig.ownerTeam} at <a href={siteConfig.emailMailto} className="text-red-400 hover:underline">{siteConfig.email}</a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
