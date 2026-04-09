"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "מאיזה גיל כדאי להגיע לבדיקה ראשונה?",
    answer: "ההמלצה הגורפת של איגוד רופאי השיניים לילדים היא להגיע לבדיקה ראשונה עם בקיעת השן הראשונה, או לכל המאוחר עד גיל שנה. ביקור מוקדם מאפשר לנו לאתר גורמי סיכון, לתת הדרכה להורים, וליצור חוויה חיובית כבר מההתחלה."
  },
  {
    question: "איך שומרים על בריאות השיניים של התינוק בלילה?",
    answer: "עששת השד/הבקבוק היא נפוצה מאוד. מומלץ להימנע מהרדמה עם בקבוק המכיל חלב, פורמולה או מיץ. אם התינוק זקוק לבקבוק להרגעה, עדיף שזה יהיה מים. כמו כן, חשוב לצחצח (או לנקות עם גזה) את השיניים לפני השינה."
  },
  {
    question: "מה עושים אם הילד נפל ונשברה לו שן?",
    answer: "במקרה של שבר בשן, נסו למצוא את החלק השבור והגיעו איתו למרפאה (ניתן לשמור אותו בכוס חלב). אם השן יצאה בשלמותה מהמקום (בשן קבועה בלבד!), נסו להחזיר אותה למקומה בעדינות או שימרו בחלב והגיעו מיד למרפאה. זמן הוא גורם קריטי!"
  },
  {
    question: "כל כמה זמן צריך להגיע לבדיקה?",
    answer: "בדרך כלל מומלץ להגיע לביקורת וניקוי אחת לחצי שנה. אצל ילדים עם סיכון גבוה לעששת, ייתכן שנמליץ על מפגשים תכופים יותר למעקב ומניעה."
  },
  {
    question: "האם צילומי רנטגן מסוכנים לילדים?",
    answer: "אנו משתמשים בציוד רנטגן דיגיטלי חדיש עם רמת קרינה מינימלית ביותר, הנמוכה משמעותית מצילומים של פעם. צילומים מבוצעים רק כשיש צורך רפואי אמיתי לאבחון, ואנו מקפידים על כל אמצעי ההגנה (סינר עופרת וכו')."
  },
  {
    question: "איך אפשר לעזור לילד שפוחד מרופא השיניים?",
    answer: "הדבר החשוב ביותר הוא לא לשדר לחץ. דברו על הביקור בצורה חיובית. בחרו במרפאה המותאמת לילדים (כמו שלנו!) שיודעת להשתמש בשיטות הרגעה, הסחות דעת, ואווירה נינוחה. במקרים של חרדה משמעותית, יש לנו אפשרויות כמו גז צחוק."
  }
];

export function FAQSection() {
  return (
    <div id="faq" className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
            <HelpCircle className="w-8 h-8" />
        </div>
        <h2 className="font-heading font-bold text-4xl text-foreground mb-4">
          שאלות ותשובות נפוצות
        </h2>
        <p className="text-muted-foreground">
          כל מה שרציתם לדעת על בריאות הפה של ילדכם.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl px-4 border-none shadow-sm data-[state=open]:shadow-md transition-shadow">
            <AccordionTrigger className="text-lg font-medium hover:text-primary py-6 text-right">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pr-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
