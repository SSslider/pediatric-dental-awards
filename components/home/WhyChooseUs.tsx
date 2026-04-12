"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const reasons = [
  "מומחית ברפואת שיניים לילדים",
  "ידע מקצועי וניסיון מצטבר של שנים",
  "טכניקות טיפול מתקדמות",
  "מכשור חדיש וחומרים מומלצים",
  "רגישות גבוהה ואמפתיה לילד ולמשפחה",
  "יחס אישי, מענה אנושי וסבלנות",
  "אווירה נעימה, בטוחה וידידותית",
  "דגש על מניעה, הדרכה והיכרות רציפה"
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden mt-10">
      
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left visually engaging content (Text) */}
        <div className="space-y-8 order-last lg:order-first">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mb-6">
              למה הורים בוחרים בד״ר יעל פרונט
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              כי כשמדובר בילדים, ההבדל הוא לא רק ברמה המקצועית —<br/>
              אלא גם בדרך. בגישה. ביכולת לראות את הילד, להרגיע, להסביר, ולבנות חוויה טובה ולא רק “לעשות טיפול”.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-2xl text-foreground mb-6">מה מייחד את המרפאה:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl shadow-sm border border-secondary/50">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium text-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-6"
          >
            <Button size="lg" className="rounded-full text-lg h-14 px-10 shadow-lg group" asChild>
              <Link href="#contact">
                אני רוצה לקבוע בדיקה <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Right visual asset placeholder (matches hero styling) */}
        <div className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative bg-secondary">
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-50 z-10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-20 text-center">
            <div className="w-24 h-24 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-xl mb-6">
                <span className="text-4xl text-primary font-bold">100%</span>
            </div>
            <h4 className="text-3xl font-bold text-white drop-shadow-md">מחויבות לחיוך של הילד שלכם</h4>
          </div>
        </div>

      </div>
    </section>
  );
}
