import { siteConfig } from "./content";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    "name": siteConfig.name,
    "legalName": siteConfig.legalName,
    "url": siteConfig.siteUrl,
    "logo": `${siteConfig.siteUrl}/placeholders/logo.svg`,
    "description": siteConfig.meta.description,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "priceRange": "$$",
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "07:00",
        "closes": "19:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mobile Detailing Services",
      "itemListElement": siteConfig.packages.map((pkg, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": pkg.name,
          "description": pkg.description
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "price": "0.00" // Placeholder price for schema validation
        },
        "position": idx + 1
      }))
    }
  };
}
