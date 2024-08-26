import Comapny from "@/components/company/Comapny";
import HeroSection from "@/components/hero/HeroSection";
import MarketPlace from "@/components/marketplace/MarketPlace";

export default function Home() {
  return (
    <main className="lg:space-y-6 w-full">
      <HeroSection />
      <MarketPlace/>
      <Comapny/>
    </main>
  );
}
