"use client";

import { Timeline } from "@/components/features/Timeline";
import { Button } from "@/components/ui/button";
import { ArrowLeft, PlayCircle } from "lucide-react";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export function FirstVisitSection() {
  return (
    <div id="first-visit" className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-secondary/30 py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center space-y-6">
          <h2 className="font-heading font-bold text-4xl md:text-6xl text-foreground">
            הביקור הראשון שלי
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            אנחנו יודעים שביקור ראשון יכול להיות מרגש (וקצת מפחיד). בדיוק בשביל זה אנחנו כאן – להפוך אותו לחוויה כיפית, מעצימה ובלתי נשכחת.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="rounded-full shadow-lg" asChild>
              <Link href="#book">
                תיאום ביקור היכרות
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link href="#for-parents">
                מדריך להורים <ArrowLeft className="w-4 h-4 mr-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Video / Visual Placeholder */}
      <section className="container mx-auto px-4 -mt-10 mb-20 relative z-10">
        <Dialog>
          <DialogTrigger asChild>
            <div className="aspect-video bg-black/5 rounded-[2rem] overflow-hidden shadow-2xl relative group cursor-pointer max-w-4xl mx-auto transition-transform hover:scale-[1.01]">
              <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <PlayCircle className="w-10 h-10 text-primary fill-primary/20" />
                      </div>
                      <p className="font-bold text-lg text-primary">צפו: איך נראה סיור במרפאה?</p>
                  </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center mb-4">הסיור הווירטואלי שלנו</DialogTitle>
              <DialogDescription className="text-center text-lg">
                אנחנו עובדים על סרטון חדש ומלהיב שיקח אתכם לסיור במרפאה!
                <br />
                בקרוב תוכלו לראות את חדרי הטיפול הצבעוניים ופינות המשחקים שלנו.
              </DialogDescription>
            </DialogHeader>
            <div className="aspect-video bg-secondary/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-grid-lg" />
                <PlayCircle className="w-20 h-20 text-muted-foreground/30" />
                <p className="absolute bottom-4 text-muted-foreground font-medium">הסרטון יעלה בקרוב...</p>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      {/* The Process (Timeline) */}
      <Timeline />

      {/* What to Expect Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                    מה אנחנו בודקים בביקור הראשון?
                </h3>
                <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold shrink-0">1</div>
                        <div>
                            <h4 className="font-bold text-lg">ספירת שיניים</h4>
                            <p className="text-muted-foreground">אנחנו סופרים יחד את השיניים ובודקים שהן צומחות יפה וחזק.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">2</div>
                        <div>
                            <h4 className="font-bold text-lg">בדיקת חניכיים</h4>
                            <p className="text-muted-foreground">בודקים שהחניכיים ורדרדות ובריאות.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold shrink-0">3</div>
                        <div>
                            <h4 className="font-bold text-lg">הדרכת צחצוח</h4>
                            <p className="text-muted-foreground">מדגימים לילד ולהורה איך לצחצח נכון כדי להרחיק את "חיידקי הסוכר".</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-bold shrink-0">4</div>
                        <div>
                            <h4 className="font-bold text-lg">מתנה והפתעה!</h4>
                            <p className="text-muted-foreground">בסיום הביקור הילד בוחר מתנה מקופסת ההפתעות שלנו.</p>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div className="relative h-[500px] bg-secondary/10 rounded-[3rem] overflow-hidden">
                <div className="absolute top-10 right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
                
                <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                    <div className="space-y-4">
                        <div className="text-6xl">🎈</div>
                        <p className="text-2xl font-bold text-primary">
                            "היה לי ממש כיף!"
                        </p>
                        <p className="text-muted-foreground">
                            - יונתן, בן 5
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-20 px-4 text-center">
            <h3 className="font-heading font-bold text-3xl md:text-5xl mb-6">
                מוכנים להתחיל בחוויה?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-xl mx-auto">
                אנחנו מחכים לפגוש אתכם ולהפוך את הביקור אצל רופא השיניים לחלק הכי כיף ביום.
            </p>
            <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg shadow-xl hover:shadow-2xl" asChild>
                <Link href="#book">
                    קבעו תור עכשיו
                </Link>
            </Button>
      </section>
    </div>
  );
}
