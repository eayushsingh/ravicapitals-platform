import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { PropertiesGrid } from "@/components/PropertiesGrid";
import { TrustMetrics } from "@/components/TrustMetrics";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <PropertiesGrid />
      <TrustMetrics />
      <Footer />
    </main>
  );
}
