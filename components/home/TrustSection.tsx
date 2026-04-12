"use client";

import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { PlayCircle, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function TrustSection() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-secondary relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-secondary/50 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text content */}
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-2">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 text-lg text-muted-foreground leading-relaxed text-right"
              >
                <p className="text-xl font-bold text-foreground">
                  לא מעט הורים מגיעים למרפאה אחרי חשש, דחייה, או חוויה פחות טובה שהילד עבר בעבר.
                </p>
                <p>
                  לפעמים הם בטוחים שהילד לא ישתף פעולה, יפחד, יבכה, או פשוט לא יסכים לפתוח את הפה.
                </p>
                <p>
                  ואז הם מגלים כמה הבדל עושה גישה נכונה.
                  כמה משמעות יש לסבלנות, לאמפתיה, לרוגע, וליכולת לפגוש את הילד בדיוק במקום שבו הוא נמצא.
                </p>
              </motion.div>
            </div>

            {/* Video Thumbnail */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative w-full aspect-square md:aspect-[4/3] bg-muted/30 rounded-3xl overflow-hidden group shadow-lg"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="absolute inset-0 cursor-pointer">
                    <Image 
                      src="/images/trust.png"
                      alt="חיזוק אמון וקשר עם הילד"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-500 z-10"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-4">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <PlayCircle className="w-8 h-8 text-primary fill-primary/20" />
                      </div>
                      <span className="bg-white/90 backdrop-blur text-primary font-bold px-4 py-1.5 rounded-full text-sm shadow-sm">
                        ד״ר יעל פרונט על הגישה המיוחדת לילדים
                      </span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-3xl">
                    <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center mb-4">חיזוק אמון וקשר עם הילד</DialogTitle>
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
        </div>
      </div>
    </section>
  );
}
