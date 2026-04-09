import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { FirstVisitSection } from "@/components/home/FirstVisitSection";
import { ForParentsSection } from "@/components/home/ForParentsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { BookingSection } from "@/components/home/BookingSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <Services />
      <FirstVisitSection />
      <ForParentsSection />
      <FAQSection />
      <BookingSection />
      <ContactSection />
    </div>
  );
}
