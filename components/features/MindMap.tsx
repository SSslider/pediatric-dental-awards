"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Baby, Footprints, School, GraduationCap, ChevronLeft, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
  {
    id: "infant",
    label: "0-2 שנים",
    icon: Baby,
    title: "בקיעת שיניים ראשונה",
    content: "זה הזמן לבדיקה ראשונה! בקיעת השיניים מתחילה סביב גיל 6 חודשים. חשוב לנקות את החניכיים ולמנוע עששת בקבוק."
  },
  {
    id: "toddler",
    label: "2-6 שנים",
    icon: Footprints,
    title: "משנן נשיר (שיני חלב)",
    content: "כל 20 שיני החלב כבר בפה. זה הזמן להקנות הרגלי צחצוח, להשתמש בחוט דנטלי (עם עזרה), ולבצע איטומי חריצים."
  },
  {
    id: "school",
    label: "6-12 שנים",
    icon: School,
    title: "המשנן המעורב",
    content: "שיניים קבועות מתחילות להחליף את החלביות. תקופה קריטית למעקב אורתודונטי ולשמירה על הטוחנות הקבועות הראשונות."
  },
  {
    id: "teen",
    label: "12+ שנים",
    icon: GraduationCap,
    title: "משנן קבוע מלא",
    content: "סיום החלפת השיניים. דגש על היגיינה עצמאית, יישור שיניים (במידת הצורך), והגנה מפני חבלות ספורט."
  }
];

export function MindMap() {
  const [activeStage, setActiveStage] = useState(stages[0]);

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-secondary">
      <h3 className="text-2xl font-bold mb-8 text-center">מפת התפתחות החיוך</h3>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Navigation / Stages List */}
        <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 md:w-1/3">
          {stages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setActiveStage(stage)}
              className={cn(
                "flex items-center gap-4 p-4 rounded-2xl transition-all text-right min-w-[150px]",
                activeStage.id === stage.id 
                  ? "bg-primary text-white shadow-lg scale-105" 
                  : "bg-secondary/30 hover:bg-secondary/60 text-foreground"
              )}
            >
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                activeStage.id === stage.id ? "bg-white/20" : "bg-white"
              )}>
                <stage.icon className="w-5 h-5" />
              </div>
              <span className="font-bold">{stage.label}</span>
              {activeStage.id === stage.id && <ChevronLeft className="mr-auto w-5 h-5 hidden md:block" />}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-secondary/10 rounded-3xl p-8 relative overflow-hidden">
            <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
            >
                <div className="inline-flex items-center gap-2 text-primary font-bold mb-4 bg-white/50 px-3 py-1 rounded-full text-sm">
                    <Info className="w-4 h-4" />
                    נ.צ. התפתחותי
                </div>
                <h4 className="text-3xl font-heading font-bold mb-4 text-primary-foreground/80 text-foreground">
                    {activeStage.title}
                </h4>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    {activeStage.content}
                </p>
                
                <div className="mt-8 flex gap-2">
                    {/* Decorative dots */}
                    <div className="w-3 h-3 rounded-full bg-primary/20"></div>
                    <div className="w-3 h-3 rounded-full bg-primary/40"></div>
                    <div className="w-3 h-3 rounded-full bg-primary/60"></div>
                </div>
            </motion.div>

            {/* Background Icon */}
            <activeStage.icon className="absolute -bottom-10 -left-10 w-64 h-64 text-primary/5 -rotate-12 z-0" />
        </div>
      </div>
    </div>
  );
}
