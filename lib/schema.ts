import { siteConfig } from "./content";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoDetailing", "LocalBusiness"],
    "name": "Relentless Mobile Details",
    "alternateName": siteConfig.altName,
    "url": "https://www.relentlessmobiledetails.com",
    "logo": "https://www.relentlessmobiledetails.com/rmdlogo.jpg",
    "image": "https://www.relentlessmobiledetails.com/rmdlogo.jpg",
    "description": siteConfig.meta.description,
    "telephone": "+1-931-284-9355",
    "priceRange": "$225-$325",
    "founders": [
      {
        "@type": "Person",
        "name": "Jordan Kinnett"
      },
      {
        "@type": "Person",
        "name": "Houston Stephens"
      }
    ],
    "sameAs": [
      siteConfig.social.facebook,
      siteConfig.social.tiktok,
      siteConfig.social.google
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "18",
      "bestRating": "5",
      "worstRating": "1"
    },
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

export function generateFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": siteConfig.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
