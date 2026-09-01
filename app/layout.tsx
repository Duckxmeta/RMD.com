import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/content";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { StickyTopBar } from "@/components/StickyTopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.relentlessmobiledetails.com"),
  title: "Relentless Mobile Details | Mobile Detailing Cookeville, TN",
  description: "We come to you, and leave it looking brand new. Full details from $200–$250. Call or text (931) 284-9355.",
  keywords: siteConfig.meta.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Relentless Mobile Details | Mobile Detailing Cookeville, TN",
    description: "We come to you, and leave it looking brand new. Full details from $200–$250. Call or text (931) 284-9355.",
    url: "https://www.relentlessmobiledetails.com",
    siteName: "Relentless Mobile Details",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.relentlessmobiledetails.com/rmdlogo.jpg",
        width: 1200,
        height: 630,
        alt: "Relentless Mobile Details",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relentless Mobile Details | Mobile Detailing Cookeville, TN",
    description: "We come to you, and leave it looking brand new. Full details from $200–$250. Call or text (931) 284-9355.",
    images: ["https://www.relentlessmobiledetails.com/rmdlogo.jpg"],
  },
  icons: {
    icon: "/rmdlogo.jpg",
    apple: "/rmdlogo.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = generateLocalBusinessSchema();

  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col">
        <StickyTopBar />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
