"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
}

const quizData: Question[] = [
  {
    id: 1,
    question: "מה הסיבה העיקרית שבגללה אתם שוקלים להגיע?",
    options: [
      "בדיקה שגרתית",
      "כאב או רגישות",
      "חשש שיש חור",
      "אני רוצה לבדוק שהכל מתפתח תקין",
      "הילד חושש מרופא שיניים",
      "אני לא בטוח/ה, רק רוצה להבין מה נכון"
    ]
  },
  {
    id: 2,
    question: "מה הכי חשוב לכם בביקור?",
    options: [
      "שהילד ירגיש רגוע",
      "לבדוק שהכל תקין",
      "לטפל בבעיה קיימת",
      "לקבל הסבר ברור כהורים",
      "למנוע בעיות בהמשך"
    ]
  },
  {
    id: 3,
    question: "איך הילד מגיב בדרך כלל לרופאים או בדיקות?",
    options: [
      "רגוע בדרך כלל",
      "קצת חושש",
      "מאוד חושש",
      "תלוי בסיטואציה",
      "זו פעם ראשונה"
    ]
  },
  {
    id: 4,
    question: "יש כרגע משהו שמפריע לילד?",
    options: [
      "כאב",
      "רגישות",
      "קושי לאכול",
      "משהו שרואים על השן",
      "לא, רק רוצים בדיקה",
      "לא בטוח/ה"
    ]
  },
  {
    id: 5,
    question: "מה אתם מחפשים בעיקר?",
    options: [
      "בדיקה רגועה ונעימה",
      "טיפול עדין",
      "מניעה והדרכה",
      "רופאה שמבינה ילדים",
      "סדר ובהירות לגבי מה צריך"
    ]
  },
  {
    id: 6,
    question: "בן/בת כמה הילד/ה?",
    options: [
      "2-4",
      "5-7",
      "8-10",
      "11-13",
      "14+"
    ]
  }
];

export function QuizSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (value: string) => {
    setAnswers(prev => ({ ...prev, [quizData[currentStep].id]: value }));
  };

  const nextStep = () => {
    if (currentStep < quizData.length - 1) {
      setCurrentStep(curr => curr + 1);
    } else {
      setIsFinished(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(curr => curr - 1);
    }
  };

  const handleSubmitScoreUrl = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
  }

  // Determine outcome
  let outcomeText = "";
  if (isFinished) {
    const q1 = answers[1] || "";
    const q3 = answers[3] || "";
    const q4 = answers[4] || "";

    if (q1.includes("כאב") || q1.includes("חור") || q4.includes("כאב") || q4.includes("רגישות")) {
        outcomeText = "כדאי לקבוע בדיקה כדי להבין מה מקור הבעיה ולטפל בזמן, בעדינות ובגישה שמתאימה לילדים.";
    } else if (q3.includes("מאוד חושש")) {
        outcomeText = "כדאי להתחיל במפגש רגוע שמטרתו היכרות, בניית אמון ויצירת חוויה טובה לפני כל דבר אחר.";
    } else if (q1.includes("לא בטוח/ה")) {
        outcomeText = "השלב הנכון הוא פשוט להגיע לבדיקה מסודרת, לקבל הסבר ברור ולהבין מה באמת נכון עכשיו.";
    } else {
        outcomeText = "כדאי להתחיל בבדיקה רגועה והיכרות עם המרפאה, כדי לוודא שהכל מתפתח בצורה תקינה ולשמור על השיניים לאורך זמן.";
    }
  }

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12 space-y-4" dir="rtl">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
            לא בטוחים מה הילד שלכם צריך כרגע?
          </h2>
          <p className="text-muted-foreground text-lg">
            ענו על כמה שאלות קצרות וקבלו הכוונה ראשונית לגבי מה כדאי לבדוק במרפאה.
          </p>
        </div>

        <Card className="border-none shadow-xl bg-white backdrop-blur-sm rounded-3xl overflow-hidden min-h-[400px] flex flex-col pt-4" dir="rtl">
          <CardContent className="p-8 md:p-12 flex-1 text-right">
            <AnimatePresence mode="wait">
              {!isFinished ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="flex items-center justify-between text-sm font-medium text-muted-foreground mb-8">
                    <span>שאלה {currentStep + 1} מתוך {quizData.length}</span>
                    <div className="flex gap-1 h-2">
                        {quizData.map((_, idx) => (
                            <div key={idx} className={`w-8 rounded-full ${idx <= currentStep ? 'bg-primary' : 'bg-secondary'}`} />
                        ))}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground text-right" dir="rtl">
                    {quizData[currentStep].question}
                  </h3>

                  <RadioGroup 
                    value={answers[quizData[currentStep].id] || ""} 
                    onValueChange={handleSelect}
                    className="space-y-3"
                    dir="rtl"
                  >
                    {quizData[currentStep].options.map((option, i) => (
                      <div key={i}>
                        <RadioGroupItem value={option} id={`q${currentStep}-option-${i}`} className="peer sr-only" />
                        <Label
                          htmlFor={`q${currentStep}-option-${i}`}
                          className="flex items-center justify-between p-4 rounded-2xl border-2 border-secondary bg-white cursor-pointer hover:bg-secondary/10 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all text-base"
                        >
                          <span className="font-medium text-foreground">{option}</span>
                          <div className="w-5 h-5 rounded-full border-2 border-muted-foreground flex items-center justify-center peer-data-[state=checked]:border-primary pb-px">
                             {answers[quizData[currentStep].id] === option && (
                                <div className="w-2.5 h-2.5 bg-primary rounded-full" />
                             )}
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  <div className="flex items-center justify-between pt-8 border-t border-secondary">
                      <Button variant="ghost" onClick={prevStep} disabled={currentStep === 0} className="text-muted-foreground">
                        <ChevronRight className="w-4 h-4 mr-2" /> חזור
                      </Button>
                      <Button 
                        onClick={nextStep} 
                        disabled={!answers[quizData[currentStep].id]}
                        className="rounded-full px-8 shadow-md"
                      >
                         {currentStep === quizData.length - 1 ? "לסיום" : "המשך"} <ArrowLeft className="w-4 h-4 ml-2" />
                      </Button>
                  </div>
                </motion.div>
              ) : submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center space-y-6 py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 shadow-sm border border-green-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading font-bold text-3xl text-foreground">קיבלנו את הפנייה!</h3>
                  <p className="text-muted-foreground text-lg max-w-sm mx-auto">
                    בחינת התשובות עברה בהצלחה, ניצור איתכם קשר בהקדם כדי לקבוע את הביקור המושלם עבור ילדכם.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="outcome"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  <div className="bg-primary/10 p-8 rounded-3xl border border-primary/20 text-center space-y-4 shadow-sm">
                    <h3 className="text-2xl font-bold text-primary font-heading">זה הכיוון שכדאי לבדוק:</h3>
                    <p className="text-lg text-foreground font-medium leading-relaxed max-w-md mx-auto">
                        {outcomeText}
                    </p>
                  </div>

                  <form className="space-y-6" onSubmit={handleSubmitScoreUrl}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                           <Label htmlFor="qname">שם מלא</Label>
                           <Input id="qname" className="rounded-xl bg-white border-secondary h-12" required />
                        </div>
                        <div className="space-y-2">
                           <Label htmlFor="qphone">טלפון</Label>
                           <Input id="qphone" type="tel" className="rounded-xl bg-white border-secondary h-12 text-right" dir="ltr" required />
                        </div>
                        <div className="space-y-2">
                           <Label htmlFor="qemail">אימייל (אופציונלי)</Label>
                           <Input id="qemail" type="email" className="rounded-xl bg-white border-secondary h-12 text-right" dir="ltr" />
                        </div>
                        <div className="space-y-2">
                           <Label htmlFor="qage">גיל הילד/ה</Label>
                           <Input id="qage" value={answers[6] || ""} readOnly className="rounded-xl bg-secondary/30 border-secondary h-12 focus-visible:ring-0 text-muted-foreground" />
                        </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 space-x-reverse pt-2">
                        <Checkbox id="qterms" required className="rounded data-[state=checked]:bg-primary" />
                        <label
                            htmlFor="qterms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pr-2"
                        >
                            אני מאשר/ת שיחזרו אליי לגבי בדיקה או טיפול מתאים
                        </label>
                    </div>

                    <Button type="submit" size="lg" className="w-full h-14 rounded-full text-lg shadow-lg group">
                        שלחו פרטים <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
