import { Lock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LegalPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl min-h-screen">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/">
          <ArrowRight className="w-4 h-4 ml-2" /> חזרה לעמוד הבית
        </Link>
      </Button>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary">
         <div className="flex items-center gap-4 mb-8 border-b pb-6">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            מדיניות פרטיות
          </h1>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
          <p className="lead text-xl text-foreground font-medium mb-6">
            מרפאת שיניים "חיוכים קטנים" (להלן: "המרפאה", "אנחנו" או "שלנו") מתייחסת בכבוד רב לפרטיות הגולשים באתר האינטרנט. מטרת ההצהרה הבאה היא להסביר על נוהלי הגנת הפרטיות באתר, ולתאר את הדרכים שבהן אנו משתמשים במידע הנמסר לנו או הנאסף על ידינו.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">1. איזה מידע אנחנו אוספים?</h3>
          <p>
            כחלק מהגלישה באתר או במסגרת השארת פנייה בטפסי יצירת קשר או לקביעת תור, ייתכן ותתבקשו למסור מידע אישי. המידע עשוי לכלול, בין היתר: שם מלא (של ההורה או המטופל הקטין), מספר טלפון, וטקסט חופשי המצורף לפנייתכם. 
            בנוסף, ייתכן ונאסף מידע סטטיסטי הנוגע לדפוסי הגלישה, הכולל את כתובת ה-IP, סוג הדפדפן, הדפים בהם ביקרתם, ועוד, למטרות שיפור תקשורת ואופטימיזציה של חווית המשתמש (באמצעות קובצי Cookies).
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">2. השימוש במידע</h3>
          <p>המרפאה משתמשת במידע הנאסף באתר למטרות הבאות:</p>
          <ul className="space-y-2 list-disc pr-6">
            <li>ליצירת קשר עם המשתמשים ולמתן מענה ספציפי לפנייתם.</li>
            <li>לקביעת וניהול תורים וזימונים למרפאה.</li>
            <li>לשליחת עדכונים או תזכורות תקופתיות רפואיות הקשורות לטיפולים, ע"פ דין או הסכמה.</li>
            <li>לניתוח וגביית נתונים סטטיסטיים שיאפשרו לנו לייעל ולהתאים את שירותי האתר.</li>
          </ul>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">3. מסירת מידע לצד שלישי</h3>
          <p>
            אנו מתחייבים כי לא נעביר את פרטיכם האישיים (הנמסרים בתהליך יצירת הקשר) לצדדים שלישיים ללא קבלת הסכמתכם המפורשת, אלא באחד מהמקרים הבאים:
          </p>
          <ul className="space-y-2 list-disc pr-6">
            <li>אם נחויב לעשות כן על פי צו שיפוטי או דרישת רשויות החוק בישראל.</li>
            <li>במקרה של מחלוקת משפטית או הליך שמחייב גילוי הנתונים.</li>
            <li>העברה טכנית לספקים שותפים המספקים את תשתיות השרת שעליהן האתר מאוחסן, הפועלים בכפוף להסכמי סודיות מחמירים.</li>
          </ul>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">4. שימוש ב'עוגיות' (Cookies)</h3>
          <p>
            האתר עשוי להשתמש בקובצי עוגיות לצורך תפעולו רציף, אבטחת מידע, איסוף נתונים סטטיסטיים ושיפור חווית המשתמש. באפשרותכם לשנות את הגדרות הדפדפן, כך שיידחה קבצים אלו, אך ייתכן וחלק מהשירותים באתר לא יעבדו כראוי בשל כך.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">5. אבטחת מידע</h3>
          <p>
            אנו מיישמים אמצעי אבטחת מידע קפדניים שנועדו להבטיח כי הנתונים הנאספים באתר מוגנים כראוי מפני גישה או העברה לא מורשית. עם זאת, אין אנו יכולים להבטיח הגנה מוחלטת כנגד חדירות בלתי מורשות ויש להיות מודעים לסיכון הקיים בכל שימוש ברשת האינטרנט.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">6. זכות עיון ותיקון</h3>
          <p>
            על פי חוק הגנת הפרטיות, התשמ"א-1981, הנכם זכאים לפנות אלינו כדי לעיין במידע אישי שלכם אשר מוחזק במאגרינו (ככל שמוחזק מידע זהותי ספציפי). במידה ותמצאו כי המידע אינו נכון או אינו מעודכן, הנכם זכאים לבקש את תיקונו או את מחיקתו.
          </p>

          <div className="bg-secondary/20 p-6 rounded-2xl mt-8 text-foreground font-medium">
            לפניות בנושאי פרטיות ניתן ליצור קשר דרך הדוא"ל: privacy@smiles.co.il או בטלפון המרפאה *5555.
          </div>
          <p className="text-sm mt-8 opacity-70">מדיניות זו תעודכן מעת לעת בהתאם לשינוי גישה או שינויים בשירות. עדכון אחרון: מרץ 2026</p>
        </div>
      </div>
    </div>
  );
}
