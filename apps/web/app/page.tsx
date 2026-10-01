import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PropertyShowcase } from "@/components/PropertyShowcase";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { PropertiesGrid } from "@/components/PropertiesGrid";
import { TrustMetrics } from "@/components/TrustMetrics";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Blue hero zone */}
      <Navbar />
      <Hero />

      {/* White canvas zone — Revolut curved sheet overlaps hero */}
      <div className="canvas-section">
        <PropertyShowcase />
        <div style={{ background: "white", color: "#0f172a" }}>
          <Stats />
          <HowItWorks />
          <PropertiesGrid />
          <TrustMetrics />
          <Footer />
        </div>
      </div>
    </main>
  );
}
