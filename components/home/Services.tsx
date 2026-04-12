"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link2, ShieldCheck, Smile, Stethoscope, Users, HeartPulse, Activity, Search } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "איטומי חרירים וחריצים",
    description: "טיפול מונע שמסייע להגן על השיניים ולהפחית את הסיכוי להיווצרות חורים, במיוחד בשיניים אחוריות.",
    icon: ShieldCheck,
    color: "bg-green-100 text-green-600",
    slug: "sealants"
  },
  {
    title: "סתימות לבנות",
    description: "פתרון אסתטי ונקי לטיפול בעששת, תוך שמירה על מראה טבעי ככל האפשר.",
    icon: Smile,
    color: "bg-blue-100 text-blue-600",
    slug: "white-fillings"
  },
  {
    title: "טיפולי שורש",
    description: "כאשר יש צורך בטיפול עמוק יותר, חשוב לבצע אותו ברגישות, במקצועיות ובגישה שמותאמת לילדים.",
    icon: Activity,
    color: "bg-red-100 text-red-600",
    slug: "root-canals"
  },
  {
    title: "טיפול שיננית לילדים",
    description: "לשמירה על היגיינת פה נכונה, ניקוי, הדרכה והרגלים בריאים מגיל צעיר.",
    icon: Stethoscope,
    color: "bg-purple-100 text-purple-600",
    slug: "hygiene"
  },
  {
    title: "סתימות אמלגם",
    description: "במקרים מתאימים, בהתאם לצורך הקליני ולהמלצה המקצועית.",
    icon: Search,
    color: "bg-slate-100 text-slate-600",
    slug: "amalgam"
  },
  {
    title: "כתרים לבנים",
    description: "פתרון אסתטי ופונקציונלי לשיקום שיניים אצל ילדים, תוך שמירה על מראה נעים וטבעי יותר.",
    icon: Smile,
    color: "bg-amber-100 text-amber-600",
    slug: "white-crowns"
  },
  {
    title: "לשון קשורה בילודים / ילדים",
    description: "אבחון וטיפול במקרים של לשון קשורה, כאשר יש בכך צורך.",
    icon: Link2,
    color: "bg-cyan-100 text-cyan-600",
    slug: "tongue-tie"
  },
  {
    title: "כתרים טרומיים בילדים",
    description: "פתרון יעיל במצבים מסוימים שבהם יש צורך בשיקום ושמירה על השן.",
    icon: HeartPulse,
    color: "bg-indigo-100 text-indigo-600",
    slug: "ss-crowns"
  }
];

export function Services() {
  return (
    <section id="services" className="container mx-auto px-4 pt-20">
      <div className="text-center mb-16 space-y-6 max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground leading-tight">
          אני לא רואה רק את השן שצריך לטפל בה — אלא את הילד כולו, את החוויה שלו, ואת הדרך הכי נכונה לעזור לו לשמור על בריאות הפה לאורך זמן.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          הטיפולים במרפאה משתלבים כחלק מגישה מקצועית, רגועה ומותאמת אישית, כדי לאפשר לילד לקבל טיפול ברמה גבוהה — באווירה נעימה, בטוחה וידידותית.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow border-none bg-secondary/10 backdrop-blur-sm shadow-sm group">
              <CardHeader>
                <div className={`w-12 h-12 rounded-2xl ${service.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground/70">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
