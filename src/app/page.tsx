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

        <section id="beranda">
          <HeroSection />
        </section>

        <section id="tentang">
          <ExpertiseSection />
        </section>

        <section id="ekosistem">
          <EcosystemSection />
        </section>

        <section id="fitur">
          <EcosystemFeatureSection />
        </section>

        <section id="kunjungan">
          <VisitCafeSection />
        </section>

        <section id="partner">
          <TrustSection />
        </section>

        <section id="kontak">
          <ContactSection />
        </section>

      </main>
      <Footer />
    </>
  );
}