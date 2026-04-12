"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    text: "ד״ר יעל פרונט מדהימה עם ילדים.",
    author: "דורין אלמוג סודאי"
  },
  {
    text: "יעל נהדרת. טיפלה בבני כשהיה בן 3 ומאז בכל שלושת ילדי.",
    author: "הדר בן ארי"
  },
  {
    text: "יעל פרונט מקסימה וסבלנית.",
    author: "נטע הורינג-בנר"
  },
  {
    text: "אנחנו עשינו כמה טיפולים בטשטוש אצל יעל פרונט. היא מדהימה.",
    author: "יעל בן-שושן"
  },
  {
    text: "ד״ר פרונט נפלאה, הפעוט שלנו ממש אוהב לבקר אצלה.",
    author: "טלי פז ספרוני"
  },
  {
    text: "יעל פרונט אלופה. הבת שלי לא הסכימה בשום אופן לפתוח את הפה בקופה, צרחה — ויעל ב־10 דקות עשתה לה 4 סתימות.",
    author: "נטלי עופר לבל"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground">
            הורים מספרים
          </h2>
          <div className="w-20 h-1 bg-primary/20 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-secondary/10 backdrop-blur-sm relative">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
                  <div className="space-y-6 relative z-10">
                    <p className="text-lg text-foreground font-medium leading-relaxed mt-4">
                      "{item.text}"
                    </p>
                    <div className="flex items-center gap-3 border-t border-secondary/50 pt-4">
                      <div className="w-10 h-10 rounded-full bg-accent/20 text-accent-foreground font-bold flex items-center justify-center font-heading">
                        {item.author.charAt(0)}
                      </div>
                      <span className="font-bold text-sm text-muted-foreground">{item.author}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
