import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { MarketplaceSection } from "@/components/home/MarketplaceSection";
import { TrustPrivacySection } from "@/components/home/TrustPrivacySection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { CTASection } from "@/components/home/CTASection";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <MarketplaceSection />
      <TrustPrivacySection />
      <CommunitySection />
      <CTASection />
      <Footer />
    </>
  );
}
