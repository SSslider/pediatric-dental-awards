"use client";

import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export function VideoSection() {
  return (
    <section className="py-20 relative bg-white">
      <div className="container mx-auto px-4 text-center max-w-3xl space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-right md:text-center"
        >
          <p>
            רפואת שיניים לילדים לא צריכה להיות חוויה מלחיצה או מאיימת. 
            כשהילד מרגיש בטוח, כשהוא פוגש רופאה שמבינה ילדים, וכשהכל נעשה בעדינות, ברוגע ובסבלנות — הרבה יותר קל לבדוק, לטפל ולשמור על חיוך בריא לאורך זמן.
          </p>
          <p className="font-bold text-foreground">
            במרפאה הילד שלכם יקבל לא רק טיפול מקצועי — <br className="hidden md:block"/>
            אלא גם חוויה שמכבדת את הקצב שלו, את הרגש שלו, ואת הצורך שלו להרגיש בטוח.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
            <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-video bg-secondary/30 rounded-[2rem] overflow-hidden shadow-2xl relative group cursor-pointer max-w-4xl mx-auto transition-transform hover:scale-[1.01] border border-secondary">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4 flex flex-col items-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <PlayCircle className="w-10 h-10 text-primary fill-primary/20" />
                        </div>
                        <p className="font-bold text-lg text-primary bg-white/80 px-4 py-1 rounded-full backdrop-blur-sm">לחצו לצפייה בסרטון שלנו</p>
                    </div>
                </div>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl">
                <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center mb-4">הגישה שלנו לילדים</DialogTitle>
                <DialogDescription className="text-center text-lg">
                    הסרטון בטעינה... כאן יוצג וידאו הממחיש את החוויה במרפאה ואת הגישה הייחודית של ד״ר יעל פרונט.
                </DialogDescription>
                </DialogHeader>
                <div className="aspect-video bg-secondary/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pattern-grid-lg" />
                    <PlayCircle className="w-20 h-20 text-muted-foreground/30 animate-pulse" />
                </div>
            </DialogContent>
            </Dialog>
        </motion.div>
      </div>
    </section>
  );
}
