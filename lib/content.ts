export interface PackageItem {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
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
  category: 'Exterior' | 'Interior' | 'Paint Correction' | 'Ceramic' | 'Headlights';
  imagePath: string;
  caption: string;
  alt: string;
}

export interface TrustItem {
  title: string;
  subtitle: string;
}

export const siteConfig = {
  name: "Relentless Mobile Details",
  altName: "Relentless Mobile Details - Upper Cumberland",
  googleLabel: "Relentless Mobile Details - Cookeville",
  owner: "Jordan Kinnett",
  tagline: "We come to you, and leave it looking brand new.",
  heroHeadline: "Cookeville’s premier mobile detail.",
  heroSubhead: "We come to you, and leave it looking brand new.",
  domain: "www.relentlessmobiledetails.com",
  siteUrl: "https://www.relentlessmobiledetails.com",
  phone: "(931) 284-9355",
  phoneRaw: "9312849355",
  phoneInt: "+19312849355",
  phoneTel: "tel:+19312849355",
  phoneSms: "sms:+19312849355",
  
  social: {
    facebook: "https://www.facebook.com/RelentlessMobileDetails",
    messenger: "https://m.me/RelentlessMobileDetails",
    tiktok: "https://www.tiktok.com/@relentlessmobiledetails",
    google: "https://share.google/rQXnT7gzP4VrXdZph",
  },

  paymentMethods: [
    "Cash",
    "Zelle",
    "Cash App",
    "Venmo",
    "PayPal",
    "Check",
    "Card"
  ],
  paymentNote: "Card payments include a processing fee.",

  meta: {
    title: "Relentless Mobile Details | Mobile Detailing Cookeville, TN",
    description: "We come to you, and leave it looking brand new. Full details from $200–$250. Call or text (931) 284-9355.",
    keywords: [
      "Mobile Detailing Cookeville TN",
      "Auto Detailing Upper Cumberland",
      "Car Detailing Jordan Kinnett",
      "Mobile Wash Cookeville",
      "Paint Correction Upper Cumberland",
      "Ceramic Coating Cookeville"
    ],
  },

  serviceAreas: [
    "Cookeville",
    "Upper Cumberland Region"
  ],

  trustPoints: [
    {
      title: "Mobile Convenience",
      subtitle: "We come directly to your home or workplace",
    },
    {
      title: "Upper Cumberland Local",
      subtitle: "Locally owned & operated by Jordan Kinnett",
    },
    {
      title: "Satisfaction Guaranteed",
      subtitle: "Meticulous quality craftsmanship on every vehicle",
    },
    {
      title: "Flexible Payment Options",
      subtitle: "Cash, Zelle, Cash App, Venmo, PayPal, check, or card",
    },
  ] as TrustItem[],

  packages: [
    {
      id: "relentless-full-detail",
      name: "Relentless Full Detail",
      price: "Cars starting at $200–$250",
      priceNote: "Price depends on vehicle condition and add-ons. Call or text for truck & SUV pricing.",
      popular: true,
      badge: "FEATURED PACKAGE",
      description: "Our complete signature interior & exterior deep clean and restoration.",
      features: [
        "Hand wash",
        "Hand dry",
        "Tires and rims",
        "Entire interior vac including trunk",
        "Interior wipe down",
        "Windows",
        "Tires dressed",
        "Interior dressed",
        "Leather conditioned",
        "Shampoo",
        "Trunk wiped down",
        "Trunk dressed including spare",
        "Engine bay wiped down and degreased",
        "Engine bay dressed",
        "Wax",
      ],
      ctaText: "Call or text (931) 284-9355",
    },
    {
      id: "exterior-detail",
      name: "Exterior Detail",
      price: "Call or text for pricing",
      priceNote: "Call or text (931) 284-9355 for a custom quote",
      description: "Dedicated exterior hand wash, tire care, window polish, and wax protection.",
      features: [
        "Hand wash",
        "Hand dry",
        "Tires and rims",
        "Tires dressed",
        "Windows (outside)",
        "Wax",
      ],
      ctaText: "Call or text (931) 284-9355",
    },
    {
      id: "interior-detail",
      name: "Interior Detail",
      price: "Call or text for pricing",
      priceNote: "Call or text (931) 284-9355 for a custom quote",
      description: "Complete interior vacuuming, surface wipe down, carpet shampoo, and leather conditioning.",
      features: [
        "Vac including trunk",
        "Interior wipe down",
        "Windows",
        "Interior dressed",
        "Leather conditioned",
        "Shampoo",
        "Trunk wiped down and dressed",
      ],
      ctaText: "Call or text (931) 284-9355",
    },
  ] as PackageItem[],

  addons: [
    {
      id: "paint-correction",
      name: "Paint Correction",
      price: "Call for quote",
      description: "Machine polishing to eliminate swirl marks, scratches, and haze to restore paint clarity.",
      iconName: "Sparkles",
    },
    {
      id: "headlight-restoration",
      name: "Headlight Restoration",
      price: "Call for quote",
      description: "Wet sanding, polishing, and protective sealing for clear, restored headlight vision.",
      iconName: "Sun",
    },
    {
      id: "ceramic-coating",
      name: "Ceramic Coating",
      price: "Call for quote",
      description: "Long-lasting hydrophobic paint protection for superior shine and weather resistance.",
      iconName: "ShieldCheck",
    },
  ] as AddonItem[],

  gallery: [
    {
      id: "gal-1",
      title: "Paint Correction & Gloss",
      category: "Paint Correction",
      imagePath: "/placeholders/gallery-01.jpg",
      caption: "Exterior — Relentless Mobile Details",
      alt: "Paint correction showing high-gloss reflection",
    },
    {
      id: "gal-2",
      title: "Deep Interior & Leather Conditioning",
      category: "Interior",
      imagePath: "/placeholders/gallery-02.jpg",
      caption: "Interior — Relentless Mobile Details",
      alt: "Clean vehicle interior with conditioned leather",
    },
    {
      id: "gal-3",
      title: "Tires & Rims Detail",
      category: "Exterior",
      imagePath: "/placeholders/gallery-03.jpg",
      caption: "Exterior — Relentless Mobile Details",
      alt: "Clean wheel and dressed tire",
    },
    {
      id: "gal-4",
      title: "Ceramic Coating Hydrophobic Shine",
      category: "Ceramic",
      imagePath: "/placeholders/gallery-04.jpg",
      caption: "Ceramic — Relentless Mobile Details",
      alt: "Ceramic coating water beading",
    },
    {
      id: "gal-5",
      title: "Headlight Restoration",
      category: "Headlights",
      imagePath: "/placeholders/gallery-05.jpg",
      caption: "Headlights — Relentless Mobile Details",
      alt: "Restored clear headlight lens",
    },
    {
      id: "gal-6",
      title: "Full Exterior Hand Wash & Wax",
      category: "Exterior",
      imagePath: "/placeholders/gallery-06.jpg",
      caption: "Exterior — Relentless Mobile Details",
      alt: "Hand washed and waxed vehicle exterior",
    },
    {
      id: "gal-7",
      title: "Interior Carpet Shampoo & Vac",
      category: "Interior",
      imagePath: "/placeholders/gallery-07.jpg",
      caption: "Interior — Relentless Mobile Details",
      alt: "Shampooed interior carpets and trunk",
    },
    {
      id: "gal-8",
      title: "Engine Bay Degreased & Dressed",
      category: "Exterior",
      imagePath: "/placeholders/gallery-08.jpg",
      caption: "Engine Bay — Relentless Mobile Details",
      alt: "Clean and dressed engine bay",
    },
  ] as GalleryItem[],

  about: {
    title: "Locally Owned Quality by Jordan Kinnett",
    paragraph1: "Relentless Mobile Details is Cookeville’s premier mobile auto detailer, locally owned and operated by Jordan Kinnett. We serve Cookeville and communities across the Upper Cumberland, TN.",
    paragraph2: "We bring our entire professional setup directly to your home or workplace. From quick interior/exterior upkeep to full details, paint correction, ceramic coatings, and headlight restoration—we come to you with satisfaction guaranteed.",
    bulletPoints: [
      "Locally owned and operated by Jordan Kinnett",
      "We come directly to your home or workplace",
      "Satisfaction guaranteed on every detail",
    ]
  }
};
