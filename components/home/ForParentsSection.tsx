"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, Heart, Star } from "lucide-react";
import { MindMap } from "@/components/features/MindMap";

export function ForParentsSection() {
  return (
    <div id="for-parents" className="container mx-auto px-4 py-24">
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground">
          מידע להורים: איך מתכוננים?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          ההכנה בבית היא חלק בלתי נפרד מהצלחת הטיפול. אספנו עבורכם טיפים שיעזרו לכם ולילדכם להגיע רגועים ומוכנים.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Do's */}
        <Card className="border-none shadow-lg bg-green-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-green-700">
              <CheckCircle2 className="w-8 h-8" />
              מה כדאי לעשות?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                <span>לדבר על הביקור בצורה חיובית ("הרופא יספור לנו את השיניים").</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                <span>לקרוא ספרים או לראות סרטונים על ביקור אצל רופא שיניים.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                <span>לקבוע תור לשעות הבוקר כשהילד רענן ולא עייף.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                <span>להביא "חבר" (בובה אהובה) שיעבור את הבדיקה יחד איתו.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Dont's */}
        <Card className="border-none shadow-lg bg-red-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-red-700">
              <XCircle className="w-8 h-8" />
              ממה כדאי להימנע?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                <span>לא להשתמש במילים מפחידות כמו "זריקה", "כואב", "מחט".</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                <span>לא להבטיח הבטחות שווא ("זה לא יכאב בכלל", "הוא רק יסתכל").</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                <span>לא לשתף בטראומות או פחדים אישיים שלכם מהילדות.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                <span>לא לאיים ברופא השיניים כעונש ("אם לא תצחצח תלך לרופא").</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 bg-blue-50/50 p-8 rounded-3xl text-center">
        <Heart className="w-12 h-12 text-blue-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-blue-900 mb-4">אנחנו כאן איתכם</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          זכרו, רוב החרדה מגיעה מחוסר ודאות. ככל שאתם תהיו רגועים יותר, כך גם ילדכם ירגיש בטוח יותר. 
          אנחנו מתמחים בגישה לילדים ונדאג להסביר להם הכל בגובה העיניים.
        </p>
      </div>

      <div className="mt-20">
        <MindMap />
      </div>
    </div>
  );
}
