import { HeroBeforeAfter } from "@/components/HeroBeforeAfter";
import { TrustStrip } from "@/components/TrustStrip";
import { PackagesSection } from "@/components/PackagesSection";
import { AddonServices } from "@/components/AddonServices";
import { GallerySection } from "@/components/GallerySection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroBeforeAfter />
      <TrustStrip />
      <PackagesSection />
      <AddonServices />
      <GallerySection />
      <ReviewsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
