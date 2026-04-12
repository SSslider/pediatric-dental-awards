"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function PersonalConnection() {
  return (
    <section id="about" className="py-20 bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 text-right order-last lg:order-first">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-bold text-3xl md:text-5xl text-foreground"
            >
              הורים וילדים יקרים, ברוכים הבאים למרפאה שלי
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              <p>
                אני מאמינה ב״בית דנטלי״ לילד כבר מגיל צעיר. 
                מקום מוכר, נעים ובטוח, שבו הילד פוגש שוב ושוב את אותה גישה רגועה, את אותו יחס אישי, ואת אותה תחושת ביטחון שחשובה כל כך בגילאים האלה.
              </p>

              <p>
                מניסיוני, כשילד מכיר את המרפאה, מרגיש בנוח, ופוגש צוות שמדבר אליו ברגישות ובגובה העיניים — הרבה יותר קל לבנות קשר חיובי עם כל נושא בריאות הפה והשיניים.
              </p>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-secondary my-8">
                <h3 className="font-bold text-xl text-foreground mb-4">חשוב לי שהורים ידעו:</h3>
                <p className="mb-6">
                  בריאות השיניים של הילדים לא מתחילה רק כשכואב. 
                  היא מתחילה הרבה קודם — בהרגלים, בהדרכה נכונה, במעקב מסודר, ובאבחון מוקדם של בעיות שעלולות להופיע תוך כדי הגדילה.
                </p>
                
                <p className="font-bold text-foreground mb-4">לכן אני שמה דגש לא רק על טיפול מקצועי, אלא גם על:</p>
                <ul className="space-y-3 font-medium text-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
                    היכרות רציפה עם הילד
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
                    בניית אמון לאורך זמן
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
                    אווירה רגועה ונעימה
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
                    הדרכה נכונה כבר מבקיעת השן הראשונה
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
                    טיפול מסור, מקצועי ורגיש
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
                    הסבר ברור להורים בכל שלב
                  </li>
                </ul>
              </div>

              <p>
                אם אתם מרגישים שהגיע הזמן לבדוק, אם יש כאב, רגישות, חשש לחור, או פשוט רצון לוודא שהכל מתפתח כמו שצריך — אל תחכו לרגע שבו הילד כבר סובל או חושש יותר.
              </p>

              <p className="font-bold text-primary">
                ככל שמגיעים מוקדם יותר, כך קל יותר לשמור על בריאות הפה והשיניים לכל החיים — ובחוויה הרבה יותר נעימה.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pt-6"
            >
              <Button size="lg" className="rounded-full text-lg h-14 px-8 shadow-xl" asChild>
                <Link href="#contact">
                  רשמו אותי לבדיקה <ArrowLeft className="w-5 h-5 mr-2" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Doctor Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full relative order-first lg:order-last"
          >
            <div className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative bg-secondary border-4 border-white">
                <Image 
                    src="/images/doctor.png"
                    alt="ד״ר יעל פרונט - רופאת שיניים לילדים"
                    fill
                    className="object-cover"
                />
            </div>
            
            {/* Decorative blobbies behind the image */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
