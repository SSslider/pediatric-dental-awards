"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Gift, ShieldAlert, Sparkles, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function EducationalKit() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-lg border border-secondary overflow-hidden relative">
          
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* Visual Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-secondary/50 to-primary/20 flex flex-col items-center justify-center p-8 group order-last lg:order-first"
            >
                <div className="absolute inset-0 pattern-grid-lg opacity-10"></div>
                <div className="w-full h-full border-4 border-white/50 rounded-2xl relative flex items-center justify-center overflow-hidden">
                    <Sparkles className="absolute top-10 right-10 w-10 h-10 text-primary animate-pulse" />
                    <Star className="absolute bottom-10 left-10 w-12 h-12 text-accent animate-pulse delay-500" />
                    
                    <div className="text-center space-y-4">
                        <div className="text-8xl group-hover:scale-110 transition-transform duration-500">🎁</div>
                        <h4 className="font-bold text-2xl text-primary font-heading">ערכת פֶּהפְּלֶצֶת</h4>
                    </div>
                </div>
            </motion.div>

            {/* Text Side */}
            <div className="space-y-8">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent-foreground font-medium text-sm mb-4"
                >
                  <Gift className="w-4 h-4" />
                  <span>מוצר ייחודי למרפאה</span>
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mb-4"
                >
                  הכוכבים של פֶּהפְּלֶצֶת
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-primary font-medium"
                >
                  חוויה חינוכית שמטפחת הרגלי בריאות בבית
                </motion.p>
              </div>

              <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
                 className="space-y-6"
              >
                  <p className="text-muted-foreground text-lg">
                    הערכה מיועדת לילדים בגילאי 3–8 ומציעה דרך חווייתית, רגישה ומעצימה לליווי ילדים ברכישת הרגלי צחצוח שיניים.
                  </p>
                  
                  <ul className="space-y-3 font-medium text-foreground">
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>סיפור הרפתקאות שבו הילד הוא הגיבור</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>פעילות יצירה ומשחק שמעודדות שיתוף פעולה</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>חיזוקים חיוביים שמטפחים תחושת מסוגלות</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>כלי תומך להורים ליצירת שגרה רגועה וללא מאבקי כוח</span>
                    </li>
                  </ul>

                  <p className="text-muted-foreground">
                    היא תומכת בהתפתחות הרגשית של הילד, מחזקת אחריות אישית ומעודדת הרגלי בריאות נכונים — תוך יצירת חיבור משפחתי, שיח חיובי ושקט נפשי סביב שגרת היום.
                  </p>

                  <div className="bg-secondary/40 p-4 rounded-xl inline-block mt-4 border border-secondary">
                      <span className="text-sm text-muted-foreground block mb-1">קוד קופון להנחה:</span>
                      <span className="font-bold text-lg text-primary tracking-wide">ד״ר יעל פרונט</span>
                  </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <Button size="lg" className="rounded-full h-14 px-10 shadow-lg text-lg" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ShoppingBag className="w-5 h-5 ml-2" />
                    למידע נוסף ורכישה
                  </a>
                </Button>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
