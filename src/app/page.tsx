import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import EcosystemSection from "@/components/EcosystemSection";
import TestimoniSection from "@/components/TestimoniSection";
import WorkSection from "@/components/WorkSection";
import CTASection from "@/components/CTASection";
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
          <TestimoniSection />
        </section>

        <section id="kunjungan">
          <WorkSection />
        </section>

        <section id="partner">
          <FAQSection />
        </section>

        <section id="kontak">
          <CTASection />
        </section>

      </main>
      <Footer />
    </>
  );
}