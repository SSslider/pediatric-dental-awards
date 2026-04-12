"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-secondary/30">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
            backgroundImage: "url('/images/texture-clouds.png')",
            backgroundSize: "400px",
            backgroundRepeat: "repeat"
        }}
      />

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Content */}
        <div className="space-y-8 text-center lg:text-right order-last lg:order-first">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-primary/20 text-primary font-medium text-sm mb-6 max-w-full overflow-hidden text-ellipsis whitespace-nowrap md:whitespace-normal">
              <Star className="w-4 h-4 fill-primary shrink-0" />
              <span className="truncate md:text-wrap">בדיקות, טיפולים משמרים, איטומים, סתימות, כתרים לילדים ועוד</span>
            </div>
            <h1 className="font-heading font-extrabold text-5xl md:text-7xl leading-tight text-foreground mb-6">
              ד״ר יעל פרונט <br />
              <span className="text-primary relative inline-block text-4xl md:text-5xl mt-2">
                מומחית ברפואת שיניים לילדים
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              אם הגיע הזמן לבדוק, לטפל או פשוט לוודא שהכל תקין — זה לא חייב להיות מלחיץ.<br/> אנו דוגלים בגישה אחרת: ברוגע, בסבלנות, ובאווירה טובה לילדים ולהורים.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" className="rounded-full text-lg h-14 px-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all" asChild>
              <Link href="#contact">
                <Calendar className="w-5 h-5 ml-2" />
                רשמו אותי לבדיקה
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-lg h-14 px-8 border-primary/20 hover:bg-white/50" asChild>
              <a href="tel:*5555">
                <Phone className="w-5 h-5 ml-2" />
                חייגו עכשיו
              </a>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center lg:justify-start gap-8 pt-4 grayscale opacity-70"
          >
            {/* Placeholders for logos (Maccabi, Clalit, Private Insurance) */}
            <div className="text-sm font-bold opacity-50">בהסדר עם חברות הביטוח</div>
            <div className="bg-foreground/5 w-24 h-8 rounded-full"></div>
            <div className="bg-foreground/5 w-24 h-8 rounded-full"></div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-first lg:order-last mt-8 lg:mt-0"
        >
            <div className="relative aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                <Image 
                    src="/images/hero-child.png" 
                    alt="ילד מחייך במרפאת שיניים"
                    fill
                    className="object-cover"
                    priority
                />
                
                {/* Floating Elements Animation */}
                <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 right-10 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg flex items-center gap-3 z-20"
                >
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">🦷</div>
                    <div>
                        <div className="font-bold text-sm">ללא כאב</div>
                        <div className="text-xs text-muted-foreground">טכנולוגיה מתקדמת</div>
                    </div>
                </motion.div>

                <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-20 left-10 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg flex items-center gap-3 z-20"
                >
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-xl">⭐</div>
                    <div>
                        <div className="font-bold text-sm">חוויה חיובית</div>
                        <div className="text-xs text-muted-foreground">צוות קשוב וסבלני</div>
                    </div>
                </motion.div>
            </div>
            
            {/* Decorative Blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>
        </motion.div>
      </div>
    </section>
  );
}
