export interface PackageItem {
  id: string;
  name: string;
  price: string;
  badge?: string;
  popular?: boolean;
  description: string;
  features: string[];
  ctaText: string;
}

export interface AddonItem {
  id: string;
  name: string;
  price: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Exterior' | 'Interior' | 'Paint Correction' | 'Ceramic';
  imagePath: string;
  caption: string;
  alt: string;
}

export interface TrustItem {
  title: string;
  subtitle: string;
  isPlaceholder?: boolean;
}

export const siteConfig = {
  name: "Relentless Mobile Details",
  legalName: "Relentless Mobile Details LLC",
  tagline: "We come to you. We leave it looking brand new.",
  heroHeadline: "Cookeville’s mobile detail, done on your schedule.",
  heroSubhead: "Premium interior, exterior, paint correction, and ceramic coating delivered directly to your driveway or workplace.",
  domain: "relentlessmobiledetails.com",
  siteUrl: "https://relentlessmobiledetails.com",
  phone: "(931) 555-0100",
  phoneRaw: "9315550100",
  phoneTel: "tel:9315550100",
  phoneSms: "sms:9315550100",
  email: "hello@relentlessmobiledetails.com",
  emailMailto: "mailto:hello@relentlessmobiledetails.com",
  requirementLine: "We come to your home or work. Water and power access preferred.",
  ownerTeam: "The Relentless Team",
  footerNote: "Card payments may include a small processing fee.",
  
  meta: {
    title: "Relentless Mobile Details | Mobile Detailing Cookeville, TN",
    description: "Cookeville's premier mobile auto detailing service for cars, trucks, and SUVs. Interior, exterior, paint correction & ceramic coating at your home or workplace.",
    keywords: [
      "Mobile Detailing Cookeville TN",
      "Auto Detailing Upper Cumberland",
      "Car Detailing Algood TN",
      "Mobile Car Wash Baxter TN",
      "Paint Correction Crossville TN",
      "Ceramic Coating Cookeville"
    ],
  },

  serviceAreas: [
    "Cookeville",
    "Algood",
    "Baxter",
    "Crossville",
    "Livingston",
    "Sparta",
    "Upper Cumberland Region"
  ],

  trustPoints: [
    {
      title: "Mobile Convenience",
      subtitle: "We come directly to your home or workplace",
    },
    {
      title: "Upper Cumberland Local",
      subtitle: "Proudly serving Cookeville, Algood, Baxter & beyond",
    },
    {
      title: "100% Satisfaction Focus",
      subtitle: "Meticulous hand work on every car, truck, & SUV",
    },
    {
      title: "Fully Insured",
      subtitle: "Licensed & insured professional care (Placeholder)",
      isPlaceholder: true,
    },
  ] as TrustItem[],

  packages: [
    {
      id: "exterior-detail",
      name: "Exterior Detail",
      price: "$XX",
      description: "Comprehensive hand wash, decontamination, and tire dressing to restore exterior brilliance.",
      features: [
        "pH-neutral foam cannon pre-soak & hand wash",
        "Wheel faces, deep barrel cleaning & tire shine",
        "Bug removal & iron decontamination spray",
        "Streak-free exterior window & mirror clarity",
        "Door jamb & fuel door wipe down",
        "Synthetic spray sealant for 2+ months of gloss & protection",
      ],
      ctaText: "Call to book",
    },
    {
      id: "relentless-full-detail",
      name: "Relentless Full Detail",
      price: "$XX",
      popular: true,
      badge: "MOST POPULAR",
      description: "Our complete signature interior & exterior deep clean for total vehicle rejuvenation.",
      features: [
        "Everything included in Exterior & Interior packages",
        "Clay bar treatment for smooth paint surface",
        "Full carpet & seat spot extraction treatment",
        "Steam sanitation of all HVAC vents & cup holders",
        "Engine bay light wipe down & plastic dressing",
        "Premium multi-layer sealant coating applied",
        "Complete bumper-to-bumper inspection report",
      ],
      ctaText: "Call to book",
    },
    {
      id: "interior-detail",
      name: "Interior Detail",
      price: "$XX",
      description: "Deep interior blow-out, steam extraction, and trim conditioning for a factory-fresh cabin.",
      features: [
        "Compressed air blow-out of seams & crevices",
        "Deep carpet & floor mat vacuuming",
        "Dashboard, console & door panel scrub & UV protection",
        "Leather cleaning & pH-balanced conditioning",
        "Interior glass, screen & rearview mirror polishing",
        "Fresh cabin air scent treatment included",
      ],
      ctaText: "Call to book",
    },
  ] as PackageItem[],

  addons: [
    {
      id: "paint-correction",
      name: "Paint Correction",
      price: "Call for quote",
      description: "Single or multi-stage machine polishing to eliminate swirls, scratches, and haze.",
      iconName: "Sparkles",
    },
    {
      id: "ceramic-coating",
      name: "Ceramic Coating",
      price: "Call for quote",
      description: "Ultra-durable SiO2 hydrophobic paint protection with multi-year gloss retention.",
      iconName: "ShieldCheck",
    },
    {
      id: "engine-bay",
      name: "Engine Bay Detail",
      price: "Call for quote",
      description: "Safe degreasing, steam cleaning, and non-greasy dressing of under-hood plastics.",
      iconName: "Gauge",
    },
    {
      id: "headlight-restoration",
      name: "Headlight Restoration",
      price: "Call for quote",
      description: "Wet sanding, compound polish, and UV clear ceramic seal for foggy headlights.",
      iconName: "Sun",
    },
    {
      id: "pet-hair-extraction",
      name: "Pet Hair / Extraction",
      price: "Call for quote",
      description: "Deep pet hair removal tooling and hot water upholstery stain extraction.",
      iconName: "Dog",
    },
    {
      id: "maintenance-plans",
      name: "Maintenance Plans",
      price: "Call for quote",
      description: "Bi-weekly or monthly recurring mobile detail upkeep at discounted member rates.",
      iconName: "CalendarSync",
    },
  ] as AddonItem[],

  gallery: [
    {
      id: "gal-1",
      title: "Paint Correction & Gloss",
      category: "Paint Correction",
      imagePath: "/placeholders/gallery-01.jpg",
      caption: "Exterior — placeholder",
      alt: "Paint correction placeholder showing high-gloss reflection",
    },
    {
      id: "gal-2",
      title: "Deep Leather & Console Detail",
      category: "Interior",
      imagePath: "/placeholders/gallery-02.jpg",
      caption: "Interior — placeholder",
      alt: "Clean luxury car interior placeholder",
    },
    {
      id: "gal-3",
      title: "Wheel & Tire Decontamination",
      category: "Exterior",
      imagePath: "/placeholders/gallery-03.jpg",
      caption: "Exterior — placeholder",
      alt: "Deep wheel cleaning placeholder",
    },
    {
      id: "gal-4",
      title: "Hydrophobic Ceramic Coating",
      category: "Ceramic",
      imagePath: "/placeholders/gallery-04.jpg",
      caption: "Ceramic — placeholder",
      alt: "Ceramic coating water beading placeholder",
    },
    {
      id: "gal-5",
      title: "Carpet & Mat Steam Extraction",
      category: "Interior",
      imagePath: "/placeholders/gallery-05.jpg",
      caption: "Interior — placeholder",
      alt: "Cleaned vehicle carpets placeholder",
    },
    {
      id: "gal-6",
      title: "Full Truck Wash & Foam",
      category: "Exterior",
      imagePath: "/placeholders/gallery-06.jpg",
      caption: "Exterior — placeholder",
      alt: "Foam cannon wash placeholder",
    },
    {
      id: "gal-7",
      title: "SUV Trunk & Cabin Renewal",
      category: "Interior",
      imagePath: "/placeholders/gallery-07.jpg",
      caption: "Interior — placeholder",
      alt: "SUV rear cabin clean placeholder",
    },
    {
      id: "gal-8",
      title: "Engine Bay Steam Clean",
      category: "Exterior",
      imagePath: "/placeholders/gallery-08.jpg",
      caption: "Exterior — placeholder",
      alt: "Dressed engine compartment placeholder",
    },
  ] as GalleryItem[],

  about: {
    title: "Relentless Quality, Right at Your Doorstep",
    paragraph1: "Relentless Mobile Details is a locally owned and operated mobile auto detailing service proudly based in Cookeville, Tennessee. We serve vehicle owners across the entire Upper Cumberland area—including Algood, Baxter, Crossville, and surrounding communities.",
    paragraph2: "Whether you're working at your desk or relaxing at home, we bring our complete professional setup straight to your driveway or parking space. We handle cars, trucks, crossovers, and SUVs with relentless attention to detail.",
    bulletPoints: [
      "Driven by precision hand-craftsmanship and zero shortcuts",
      "No waiting in dirty waiting rooms—your day continues uninterrupted",
      "Custom tailored packages for quick upkeep or show-room transformations",
    ]
  }
};
