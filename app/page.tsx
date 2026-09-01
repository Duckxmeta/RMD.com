import { HeroBeforeAfter } from "@/components/HeroBeforeAfter";
import { TrustStrip } from "@/components/TrustStrip";
import { PackagesSection } from "@/components/PackagesSection";
import { AddonServices } from "@/components/AddonServices";
import { PaintCeramicShowcase } from "@/components/PaintCeramicShowcase";
import { HeadlightShowcase } from "@/components/HeadlightShowcase";
import { VideoShowcase } from "@/components/VideoShowcase";
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
      <PaintCeramicShowcase />
      <HeadlightShowcase />
      <VideoShowcase />
      <GallerySection />
      <ReviewsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
