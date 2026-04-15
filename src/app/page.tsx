import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import EcosystemSection from "@/components/EcosystemSection";
import VisitCafeSection from "@/components/VisitCafeSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <ExpertiseSection />
        <EcosystemSection />
        <VisitCafeSection />
      </main>
      <Footer />
    </>
  );
}
