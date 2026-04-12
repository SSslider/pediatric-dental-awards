"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function ProcessSection() {
  return (
    <section className="container mx-auto px-4 py-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text and List */}
        <div className="space-y-8">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
            כדי שתדעו בדיוק למה לצפות
          </h2>
          <ul className="space-y-8">
            <motion.li 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-6"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xl shrink-0 mt-1">1</div>
              <div>
                <h4 className="font-bold text-xl md:text-2xl mb-2 text-foreground">היכרות רגועה ואבחון מדויק</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  במפגש הראשון נתחיל בהיכרות נעימה עם הילד ועם ההורים, בקצב שמתאים לילד.
                  נבדוק בעדינות את מצב השיניים והפה, נבין אם יש משהו שמצריך טיפול, ונסביר בצורה פשוטה, רגועה וברורה מה רואים ומה מומלץ לעשות.
                </p>
              </div>
            </motion.li>

            <motion.li 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-6"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/20 text-accent-foreground flex items-center justify-center font-bold text-xl shrink-0 mt-1">2</div>
              <div>
                <h4 className="font-bold text-xl md:text-2xl mb-2 text-foreground">טיפול מותאם אישית לילד שלכם</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  כל ילד הוא עולם אחר. יש ילדים שצריכים זמן, יש ילדים שצריכים הכנה, יש ילדים שזקוקים להסבר, ויש ילדים שפשוט צריכים להרגיש שמבינים אותם.
                  לכן כל טיפול נבנה לפי הגיל, האופי, רמת החשש והצרכים של הילד — בלי לחץ ובלי גישה גנרית.
                </p>
              </div>
            </motion.li>

            <motion.li 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-6"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-xl shrink-0 mt-1">3</div>
              <div>
                <h4 className="font-bold text-xl md:text-2xl mb-2 text-foreground">שמירה על חוויה טובה ועל הרגלים נכונים להמשך</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  המטרה היא לא רק לעבור את הביקור הנוכחי בשלום, אלא גם לעזור לילד לצאת עם תחושה טובה יותר לקראת הפעמים הבאות.
                  בסיום תקבלו הדרכה, המלצות וכלים להמשך בבית — כדי לשמור על השיניים בצורה בריאה, רגועה ועקבית.
                </p>
              </div>
            </motion.li>
          </ul>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-4"
          >
            <Button size="lg" className="rounded-full text-lg h-14 px-10 shadow-lg group" asChild>
              <Link href="#contact">
                רשמו אותי לבדיקה <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Visual Decoration mimicking the reference layout block */}
        <div className="relative h-[600px] bg-secondary/20 rounded-[3rem] overflow-hidden hidden md:block">
            <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl"></div>
            
            <div className="absolute inset-0 flex items-center justify-center p-12 text-center flex-col gap-6">
                <div className="text-8xl">✨</div>
                <h3 className="text-3xl font-bold font-heading text-primary leading-tight">
                    בלי לחץ,<br/>
                    בלי גישה גנרית.
                </h3>
            </div>
        </div>
      </div>
    </section>
  );
}
