import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import InfoGeneral from "@/components/InfoGeneral";
import Editorial from "@/components/Editorial";
import VisionesActualidad from "@/components/VisionesActualidad";
import InMemoriam from "@/components/InMemoriam";
import Timeline from "@/components/Timeline";
import Autobiografias from "@/components/Autobiografias";
import DedicatoriaEllas from "@/components/DedicatoriaEllas";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Information General */}
        <InfoGeneral />

        {/* Editorial */}
        <Editorial />

        {/* Visiones de Actualidad */}
        <VisionesActualidad />

        {/* In Memoriam */}
        <InMemoriam />

        {/* Timeline */}
        <Timeline />

        {/* Autobiografías */}
        <Autobiografias />

        {/* Dedicatoria a Ellas */}
        <DedicatoriaEllas />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
