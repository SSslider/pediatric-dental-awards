import { ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AccessibilityPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl min-h-screen">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/">
          <ArrowRight className="w-4 h-4 ml-2" /> חזרה לעמוד הבית
        </Link>
      </Button>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary">
        <div className="flex items-center gap-4 mb-8 border-b pb-6">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            הצהרת נגישות
          </h1>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
          <p className="lead text-xl text-foreground font-medium mb-6">
            מרפאת ״חיוכים קטנים״ רואה חשיבות עליונה בהענקת שירות שוויוני לכלל הלקוחות והגולשים, לרבות אנשים עם מוגבלות. אנו פועלים רבות להנגשת המרפאה הפיזית ואתר האינטרנט שלנו כחלק מעקרונות השירות והאחריות החברתית שאנו דוגלים בהם, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, תשנ"ח-1998 והתקנות על פיו.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">נגישות המרפאה הפיזית</h3>
          <ul className="space-y-2 list-none p-0">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> ישנן חניות נכים מוסדרות בחניון הבניין, כולל רכב גבוה.</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> דרך הגישה לחניון ולכניסה הראשית נגישה לחלוטין וללא מדרגות.</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> דלתות המרפאה רחבות ומותאמות למעבר כיסא גלגלים בהתאם לתקן.</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> קיימים שירותי נכים תקניים ומונגשים בקומת המרפאה.</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> קיימת עמדת קבלה נגישה המותאמת לאנשים המתניידים בכיסאות גלגלים.</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> ניתן להיכנס למרפאה עם כלב נחייה או שירות לאדם עם מוגבלות.</li>
          </ul>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">נגישות אתר האינטרנט</h3>
          <p>
            אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג 2013. התאמות הנגישות בוצעו עפ"י המלצות התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA ומסמך WCAG2.0 הבינלאומי. יצוין, כי למרות מאמצינו הרבים להנגיש את כלל הדפים והרכיבים באתר, ייתכן שיתגלו חלקים שטרם הונגשו במלואם. אנו ממשיכים במאמצים לשפר את הנגישות ככל האפשר.
          </p>

          <h4 className="text-lg font-bold text-foreground mt-6 mb-3">תפריט הנגישות באתר כולל בין היתר:</h4>
          <ul className="space-y-2 list-none p-0">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> <strong>התאמת גודל הגופן:</strong> אפשרות להגדלה והקטנה של הטקסט ברחבי האתר.</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> <strong>ניגודיות צבעים:</strong> שינוי צבעי האתר לניגודיות גבוהה ולצבעים הפוכים, להקלה על כבדי ראייה.</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> <strong>הדגשת קישורים:</strong> סימון בולט של כל הקישורים באתר.</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> <strong>גופן נגיש:</strong> החלפת הגופן באתר לגופן קריא ופשוט לטובת ציבורים החווים קשיי קריאה.</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> <strong>עצירת תנועה:</strong> חסימת אנימציות, מעברים, והבהובים למניעת החרפת מצבים תחושתיים ונוירולוגיים.</li>
          </ul>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">דרכי פנייה לבקשות או הצעות שיפור</h3>
          <p>
            אנו נשמח לסייע ולשפר. אם נתקלתם בבעיית נגישות או שיש לכם הצעה, פנייה לרכז הנגישות שלנו תתקבל בברכה:
          </p>
          <div className="bg-secondary/20 p-6 rounded-2xl mt-4 space-y-2 text-foreground font-medium">
            <p>שם רכז הנגישות: ישראל ישראלי</p>
            <p>טלפון מרפאה (לשליחת ווטסאפ או שיחה): *5555</p>
            <p>דוא"ל: access@smiles.co.il</p>
            <p>כתובת מכתבים: רחוב הילדים 10, קומה 2, תל אביב</p>
          </div>
          <p className="text-sm mt-8 opacity-70">תאריך עדכון ההצהרה האחרון: מרץ 2026</p>
        </div>
      </div>
    </div>
  );
}
