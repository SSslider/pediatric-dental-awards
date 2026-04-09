"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, ShieldCheck, HeartPulse, Smile } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "בדיקות שגרתיות",
    description: "בדיקה מקיפה, צילומים וניקוי אבנית באווירה נעימה ומותאמת לילדים.",
    icon: Smile,
    color: "bg-blue-100 text-blue-600",
    slug: "checkup"
  },
  {
    title: "טיפולי מניעה",
    description: "איטום חריצים ופלואוריד לשמירה על השיניים מפני עששת לאורך זמן.",
    icon: ShieldCheck,
    color: "bg-green-100 text-green-600",
    slug: "prevention"
  },
  {
    title: "טראומה וחירום",
    description: "מענה מהיר ומקצועי למקרי חבלה, שברים או כאבים דחופים.",
    icon: HeartPulse,
    color: "bg-red-100 text-red-600",
    slug: "emergency"
  },
  {
    title: "יישור שיניים",
    description: "אבחון מוקדם ופתרונות אורתודונטיים מתקדמים לילדים ונוער.",
    icon: Sparkles,
    color: "bg-purple-100 text-purple-600",
    slug: "orthodontics"
  }
];

export function Services() {
  return (
    <section id="services" className="container mx-auto px-4 pt-16">
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
          אנחנו דואגים לחיוך שלהם
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          מגוון טיפולים המותאמים במיוחד לילדים, בגישה עדינה ומקצועית המעניקה ביטחון.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow border-none bg-white/50 backdrop-blur-sm shadow-md group">
              <CardHeader>
                <div className={`w-12 h-12 rounded-2xl ${service.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-primary group-hover:translate-x-1 transition-transform" asChild>
                  <Link href="#services">
                    קרא עוד <ArrowLeft className="w-4 h-4 mr-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
