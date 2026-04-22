import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import EcosystemSection from "@/components/EcosystemSection";
import EcosystemFeatureSection from "@/components/EcosystemFeatureSection";
import VisitCafeSection from "@/components/VisitCafeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <EcosystemSection />
        <EcosystemFeatureSection />
        <VisitCafeSection />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
