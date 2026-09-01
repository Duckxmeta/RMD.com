import { siteConfig } from "./content";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    "name": siteConfig.name,
    "alternateName": siteConfig.altName,
    "url": siteConfig.siteUrl,
    "logo": `${siteConfig.siteUrl}/placeholders/logo.svg`,
    "description": siteConfig.meta.description,
    "telephone": siteConfig.phone,
    "founder": {
      "@type": "Person",
      "name": siteConfig.owner
    },
    "sameAs": [
      siteConfig.social.facebook,
      siteConfig.social.tiktok,
      siteConfig.social.google
    ],
    "areaServed": siteConfig.serviceAreas.map(area => ({
      "@type": "AdministrativeArea",
      "name": area
    })),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cookeville",
      "addressRegion": "TN",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.1628,
      "longitude": -85.5016
    },
    "paymentAccepted": siteConfig.paymentMethods.join(", "),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mobile Auto Detailing Services",
      "itemListElement": siteConfig.packages.map((pkg, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": pkg.name,
          "description": pkg.description
        },
        "position": idx + 1
      }))
    }
  };
}
