import { Hero } from "@/components/home/Hero";
import { PersonalConnection } from "@/components/home/PersonalConnection";
import { VideoSection } from "@/components/home/VideoSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TrustSection } from "@/components/home/TrustSection";
import { Services } from "@/components/home/Services";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ForParentsSection } from "@/components/home/ForParentsSection";
import { EducationalKit } from "@/components/home/EducationalKit";
import { Testimonials } from "@/components/home/Testimonials";
import { QuizSection } from "@/components/home/QuizSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-20">
      {/* 1. מסך ראשון – פתיחה חזקה */}
      <Hero />
      
      {/* 2. מסך שני – החיבור האישי */}
      <PersonalConnection />
      
      {/* 3. מסך שלישי – וידאו */}
      <VideoSection />
      
      {/* 4. מסך רביעי – מה מחכה לכם בטיפול */}
      <ProcessSection />
      
      {/* 5. מסך חמישי – סרטון נוסף / חיזוק אמון */}
      <TrustSection />
      
      {/* 6. מסך שישי – סוגי הטיפולים */}
      <Services />
      
      {/* 7. מסך שביעי – למה הורים בוחרים בד״ר יעל פרונט */}
      <WhyChooseUs />
      
      {/* 8. מסך שמיני – חידושים / מידע להורים */}
      <ForParentsSection />
      
      {/* 9. מסך תשיעי – הערכה החינוכית / הכוכבים של פֶּהפְּלֶצֶת */}
      <EducationalKit />
      
      {/* 10. מסך עשירי – המלצות הורים */}
      <Testimonials />
      
      {/* 11. מסך אחד עשר – Quiz */}
      <QuizSection />
      
      {/* 12. מסך אחרון – טופס יצירת קשר */}
      <ContactSection />
    </div>
  );
}
