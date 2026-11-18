import Hero from "@/components/Hero";
import PowerUp from "@/components/PowerUp";
import Products from "@/components/Products";
import WhyRelux from "@/components/WhyRelux";
import CtaFooter from "@/components/CtaFooter";
import { EnquiryProvider } from "@/components/EnquiryModal";

export default function Home() {
  return (
    <EnquiryProvider>
      <main>
      <Hero />
      <PowerUp />
      <Products />
      <WhyRelux />
      <CtaFooter />
      </main>
    </EnquiryProvider>
  );
}
