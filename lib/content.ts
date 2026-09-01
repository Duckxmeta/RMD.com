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
  category: 'Headlights' | 'Interior' | 'Exterior' | 'Engine Bay';
  imagePath: string;
  caption: string;
  alt: string;
}

export interface TrustItem {
  title: string;
  subtitle: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  source: string;
  rating: number;
  quote: string;
}

export const siteConfig = {
  name: "Relentless Mobile Details",
  altName: "Relentless Mobile Details - Upper Cumberland",
  googleLabel: "Relentless Mobile Details - Cookeville",
  owner: "Jordan Kinnett and Houston Stephens",
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
      "Car Detailing Jordan Kinnett Houston Stephens",
      "Mobile Wash Cookeville",
      "Paint Correction Upper Cumberland",
      "Ceramic Coating Cookeville",
      "Headlight Restoration Cookeville"
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
      subtitle: "Locally owned & operated by Jordan Kinnett and Houston Stephens",
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
      id: "gal-hl-1",
      title: "Headlights — Before (oxidized)",
      category: "Headlights",
      imagePath: "/headlights/headlightB1.jpeg",
      caption: "Headlight restoration — before",
      alt: "Oxidized headlight before restoration",
    },
    {
      id: "gal-hl-2",
      title: "Headlights — After (restored)",
      category: "Headlights",
      imagePath: "/headlights/headlightA1.jpeg",
      caption: "Headlight restoration — after",
      alt: "Restored clear headlight lens",
    },
    {
      id: "gal-hl-3",
      title: "Headlights — Before (cloudy)",
      category: "Headlights",
      imagePath: "/headlights/headlightB2.jpeg",
      caption: "Headlight restoration — before",
      alt: "Cloudy headlight before detail",
    },
    {
      id: "gal-hl-4",
      title: "Headlights — After (sealed)",
      category: "Headlights",
      imagePath: "/headlights/headlightA2.jpeg",
      caption: "Headlight restoration — after",
      alt: "UV sealed restored headlight",
    },
    {
      id: "gal-int-1",
      title: "Interior — Seat Upholstery Detail",
      category: "Interior",
      imagePath: "/placeholders/gallery-01.jpg",
      caption: "Interior seat upholstery detail",
      alt: "Vehicle seat interior detail",
    },
    {
      id: "gal-ext-1",
      title: "Exterior — Vehicle Wash & Finish",
      category: "Exterior",
      imagePath: "/placeholders/gallery-02.jpg",
      caption: "Exterior vehicle detail",
      alt: "Vehicle exterior finish",
    },
    {
      id: "gal-int-2",
      title: "Interior — Rear Cabin Wipe Down",
      category: "Interior",
      imagePath: "/placeholders/gallery-03.jpg",
      caption: "Interior rear cabin detail",
      alt: "Rear seat vehicle interior",
    },
    {
      id: "gal-int-3",
      title: "Interior — Front Console Detail",
      category: "Interior",
      imagePath: "/placeholders/gallery-04.jpg",
      caption: "Interior front console detail",
      alt: "Clean front seat interior",
    },
    {
      id: "gal-int-4",
      title: "Interior — Carpet & Mat Vac",
      category: "Interior",
      imagePath: "/placeholders/gallery-05.jpg",
      caption: "Interior floor carpet detail",
      alt: "Clean interior carpet",
    },
    {
      id: "gal-ext-2",
      title: "Exterior — Driveway Shine",
      category: "Exterior",
      imagePath: "/placeholders/gallery-06.jpg",
      caption: "Exterior driveway wash and shine",
      alt: "Exterior car wash and shine",
    },
    {
      id: "gal-ext-3",
      title: "Exterior — Paint Shine",
      category: "Exterior",
      imagePath: "/paint-ceramic/paintcorrection1.jpeg",
      caption: "Exterior paint gloss detail",
      alt: "Exterior paint detail",
    },
    {
      id: "gal-ext-4",
      title: "Exterior — Hydrophobic Protection",
      category: "Exterior",
      imagePath: "/paint-ceramic/ceramiccoating1.jpeg",
      caption: "Exterior hydrophobic paint shine",
      alt: "Exterior ceramic paint shine",
    },
  ] as GalleryItem[],

  reviewsSummary: {
    heading: "What customers say",
    subhead: "4.9 out of 5 on Google · 18 reviews",
    rating: 4.9,
    reviewCount: 18,
    sourceName: "Relentless Mobile Details - Cookeville",
    googleUrl: "https://share.google/rQXnT7gzP4VrXdZph",
    buttonText: "Read all Google reviews →",
  },

  reviews: [
    {
      id: "rev-1",
      author: "Cindy Reilly",
      source: "Google",
      rating: 5,
      quote: "This team did a fantastic job making my son’s nearly 15-year-old car look nearly brand new. Inside and outside the attention to detail was noteworthy. They made the outside glow, including sparkling clean wheel wells.",
    },
    {
      id: "rev-2",
      author: "Stacy Rogers",
      source: "Google",
      rating: 5,
      quote: "These guys really did an amazing job with my Ford Edge. They came to my house and were set up in minutes. Parts of my carpet and mats I was sure were ruined look new again. On time, didn’t rush, didn’t overcharge.",
    },
    {
      id: "rev-3",
      author: "elizabeth rodgers",
      source: "Google",
      rating: 5,
      quote: "My car looks like it did coming out of the dealership. They came to me. Much better job than the established places in Cookeville and for less money. I would not use anyone else.",
    },
    {
      id: "rev-4",
      author: "David Stepp",
      source: "Google",
      rating: 5,
      quote: "I’ve had cars detailed all over the country and I’m highly impressed. I was concerned about mobile versus a shop. Those concerns are gone — fantastic job outside, inside, and under the hood.",
    },
    {
      id: "rev-5",
      author: "Brenda Zimmerman",
      source: "Google",
      rating: 5,
      quote: "I was hesitant to use a mobile detailing service. I am 100% satisfied. My car looks like it just came off a showroom floor. They arrived on time and were professional and polite.",
    },
    {
      id: "rev-6",
      author: "David Francis",
      source: "Google",
      rating: 5,
      quote: "Jordan was great. He cleaned my RV. He did exactly what he said he would do, when he said he would do it, and he did it right the first time.",
    },
  ] as ReviewItem[],

  about: {
    title: "Locally Owned Quality by Jordan Kinnett & Houston Stephens",
    paragraph1: "Relentless Mobile Details is Cookeville’s premier mobile auto detailer, locally owned and operated by Jordan Kinnett and Houston Stephens. We serve Cookeville and communities across the Upper Cumberland, TN.",
    paragraph2: "We bring our entire professional setup directly to your home or workplace. From quick interior/exterior upkeep to full details, paint correction, ceramic coatings, and headlight restoration—we come to you with satisfaction guaranteed.",
    bulletPoints: [
      "Locally owned and operated by Jordan Kinnett and Houston Stephens",
      "We come directly to your home or workplace",
      "Satisfaction guaranteed on every detail",
    ]
  }
};
