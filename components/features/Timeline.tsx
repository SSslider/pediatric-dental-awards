"use client";

import { motion } from "framer-motion";
import { Check, Calendar, Smile, Gift } from "lucide-react";

const steps = [
  {
    title: "קביעת תור",
    description: "בוחרים זמן נוח דרך האתר או בטלפון. אנחנו נשלח שאלון היכרות קצר.",
    icon: Calendar,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "הגעה למרפאה",
    description: "פוגשים את הצוות, משחקים בפינת הילדים ונרגעים לפני הבדיקה.",
    icon: Smile,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "בדיקה חווייתית",
    description: "הרופא בודק את השיניים בעדינות, מסביר הכל בגובה העיניים.",
    icon: Check,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "הפתעה וסיכום",
    description: "כל ילד יוצא עם מתנה וחיוך! ההורים מקבלים הסבר מפורט להמשך.",
    icon: Gift,
    color: "bg-purple-100 text-purple-600",
  },
];

export function Timeline() {
  return (
    <section className="container mx-auto px-4 py-20 bg-secondary/20 rounded-3xl my-20">
      <div className="text-center mb-16">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
          איך נראה הביקור הראשון?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          צעד אחר צעד, אנחנו הופכים את החוויה לפשוטה, נעימה ונטולת דאגות.
        </p>
      </div>

      <div className="relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-100 via-yellow-100 to-purple-100 -translate-y-1/2 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center group"
            >
              <div className={`w-16 h-16 rounded-full ${step.color} mx-auto flex items-center justify-center mb-6 text-2xl shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
