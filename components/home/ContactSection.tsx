"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="text-center mb-16 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-3xl md:text-5xl text-foreground leading-tight"
          >
            אם הגיע הזמן לבדוק, לשאול או פשוט להבין מה נכון לילד שלכם — אנחנו כאן.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            בלי לחץ, בלי דרמה, ועם הרבה סבלנות, רוך והקשבה.
            כתבו לנו, שאלו כל שאלה, ונחזור אליכם בהקדם כדי לעזור לכם לבחור את הדרך הנכונה והנעימה ביותר לילד שלכם.
          </motion.p>
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
            <Card className="border border-secondary shadow-xl scroll-m-20 bg-white rounded-3xl overflow-hidden">
                <CardContent className="p-8 md:p-12">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="form-name">שם מלא</Label>
                                <Input id="form-name" className="h-12 rounded-xl bg-secondary/10 border-transparent focus-visible:ring-primary focus-visible:border-primary transition-colors" placeholder="הקלידו שם מלא" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="form-phone">טלפון</Label>
                                <Input id="form-phone" type="tel" className="h-12 rounded-xl bg-secondary/10 border-transparent focus-visible:ring-primary focus-visible:border-primary transition-colors text-right" dir="ltr" placeholder="05X-XXXXXXX" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="form-email">אימייל (אופציונלי)</Label>
                            <Input id="form-email" type="email" className="h-12 rounded-xl bg-secondary/10 border-transparent focus-visible:ring-primary focus-visible:border-primary transition-colors text-right" dir="ltr" placeholder="example@gmail.com" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="form-message">הודעה</Label>
                            <Textarea id="form-message" placeholder="איך ניתן לעזור לכם?" className="min-h-[120px] rounded-xl bg-secondary/10 border-transparent focus-visible:ring-primary focus-visible:border-primary transition-colors" />
                        </div>

                        <div className="flex items-start space-x-3 space-x-reverse pt-2">
                            <Checkbox id="form-terms" required className="mt-1 data-[state=checked]:bg-primary" />
                            <Label
                                htmlFor="form-terms"
                                className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                            >
                                אני מאשר/ת כי הפרטים שמסרתי ישמשו לצורך טיפול בפנייתי, יצירת קשר איתי, ומתן מענה לשאלותיי, בהתאם למדיניות הפרטיות של האתר. ידוע לי כי אם לא אתן את הסכמתי, לא ניתן יהיה לטפל בפנייתי.
                            </Label>
                        </div>

                        <Button size="lg" className="w-full text-lg h-14 rounded-full shadow-lg hover:shadow-xl transition-all font-bold mt-4">
                            שלחו לי פרטים
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </motion.div>
      </div>
    </section>
  );
}
