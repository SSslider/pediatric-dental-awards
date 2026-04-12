"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, BookOpen, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function ForParentsSection() {
  return (
    <div id="for-parents" className="container mx-auto px-4 py-24">
      <div className="text-center mb-16 space-y-6 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-4xl md:text-5xl text-foreground"
        >
          חידושים / מידע להורים
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg md:text-xl leading-relaxed"
        >
          רפואת שיניים לילדים מתפתחת כל הזמן, והיום יש יותר אפשרויות לשמור על בריאות הפה והשיניים של הילדים באווירה הרבה יותר נעימה, בטוחה וידידותית ממה שהורים רבים זוכרים מהעבר.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Core Goals */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
            <Card className="border-none shadow-lg bg-blue-50/50 h-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-700">
                <Sparkles className="w-8 h-8" />
                המטרה היא לא רק "לטפל כשיש בעיה"
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="mb-4 text-muted-foreground">אלא גם להעניק מעטפת שלמה שכוללת:</p>
                <ul className="space-y-4">
                <li className="flex items-center gap-3 font-medium">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                    <span>לזהות מוקדם</span>
                </li>
                <li className="flex items-center gap-3 font-medium">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                    <span>למנוע החמרה</span>
                </li>
                <li className="flex items-center gap-3 font-medium">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                    <span>ללמד הרגלים נכונים</span>
                </li>
                <li className="flex items-center gap-3 font-medium">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                    <span>לעזור לילד להרגיש נוח יותר</span>
                </li>
                <li className="flex items-center gap-3 font-medium">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                    <span>ולאפשר טיפול ברמה גבוהה ובחיוך</span>
                </li>
                </ul>
            </CardContent>
            </Card>
        </motion.div>

        {/* Informational Guides */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="space-y-6"
        >
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
                <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                        <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">צחצוח שיניים נכון – המדריך לילדים</h4>
                        <p className="text-muted-foreground text-sm">איך להפוך את השגרה היומיומית לחוויה משותפת, מהנה וללא עימותים.</p>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
                <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center shrink-0">
                        <Star className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">בקיעת שיניים והבדיקה הראשונה</h4>
                        <p className="text-muted-foreground text-sm">מתי כדאי להגיע לראשונה למרפאה, ולמה חשוב לבקר עוד לפני שכואב.</p>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
                <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center shrink-0">
                        <Info className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">מניעה אצל נוער ומתבגרים</h4>
                        <p className="text-muted-foreground text-sm">אתגרים נפוצים בגילאי ההתבגרות ואיך לשמור על החיוך גם בתקופה הזו.</p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
      </div>

    </div>
  );
}
