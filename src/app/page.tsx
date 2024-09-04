import Comapny from "@/components/company/Comapny";
import CoursePlaning from "@/components/coursePlaning/CoursePlaning";
import Footer from "@/components/footer/Footer";
import HelpSection from "@/components/helpSection/HelpSection";
import HeroSection from "@/components/hero/HeroSection";
import MarketPlace from "@/components/marketplace/MarketPlace";
import Statistics from "@/components/statistics/Statistics";
import Testimonial from "@/components/testimonial/Testimonial";


export default function Home() {
  return (
    <main className="lg:space-y-6 w-full">
      <HeroSection />
      <MarketPlace />
      <Comapny />
      <Testimonial/>
      <Statistics />
      <CoursePlaning />
      <HelpSection />
      <Footer />
    </main>
  );
}
