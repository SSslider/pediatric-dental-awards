"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon, Clock, CheckCircle2, AlertCircle, Smile } from "lucide-react";
import { format } from "date-fns";
import { he } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
];

const reasons = [
  { id: "checkup", label: "בדיקה שגרתית", icon: Smile },
  { id: "pain", label: "כאב / עזרה ראשונה", icon: AlertCircle },
  { id: "cleaning", label: "ניקוי ושיננית", icon: CheckCircle2 },
];

export function BookingSection() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string | null>(null);
  const [reason, setReason] = useState<string>("checkup");
  const [details, setDetails] = useState({ name: "", phone: "", notes: "" });

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send data to backend
    toast.success("התור נקבע בהצלחה! אישור נשלח לנייד.");
    // Reset or redirect
  };

  return (
    <div id="book" className="container mx-auto px-4 py-24 max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="font-heading font-bold text-4xl text-foreground mb-4">
          קביעת תור בקליק
        </h2>
        <p className="text-muted-foreground">
          בחרתם לבקר אצלנו? איזה כיף! רק כמה פרטים ואנחנו מתראים.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-12 relative max-w-md mx-auto">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-secondary -z-10 -translate-y-1/2" />
        {[1, 2, 3].map((s) => (
          <div key={s} className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all",
            step >= s ? "bg-primary text-white scale-110" : "bg-secondary text-muted-foreground"
          )}>
            {s}
          </div>
        ))}
      </div>

      <Card className="border-none shadow-xl overflow-hidden">
        <div className="bg-primary/5 p-6 border-b border-primary/10">
          <h3 className="text-xl font-bold flex items-center gap-2">
            {step === 1 && "מתי נוח לכם?"}
            {step === 2 && "מה סיבת ההגעה?"}
            {step === 3 && "פרטים אחרונים וסיימנו"}
          </h3>
        </div>

        <CardContent className="p-8 min-h-[400px]">
          
          {/* STEP 1: DATE & TIME */}
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date() || date.getDay() === 6} // No Saturdays
                  initialFocus
                  className="rounded-md border shadow-sm"
                  locale={he}
                />
              </div>
              <div className="space-y-4">
                <Label className="text-lg font-medium mb-4 block">שעות פנויות</Label>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot}
                      variant={time === slot ? "default" : "outline"}
                      onClick={() => setTime(slot)}
                      className={cn(
                        "w-full",
                        time === slot ? "shadow-md scale-105" : "hover:bg-primary/5"
                      )}
                    >
                      {slot}
                    </Button>
                  ))}
                </div>
                {!time && <p className="text-sm text-red-500 mt-2">אנא בחרו שעה</p>}
              </div>
            </div>
          )}

          {/* STEP 2: REASON */}
          {step === 2 && (
            <div className="space-y-8">
              <RadioGroup value={reason} onValueChange={setReason} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {reasons.map((r) => (
                  <div key={r.id}>
                    <RadioGroupItem value={r.id} id={r.id} className="peer sr-only" />
                    <Label
                      htmlFor={r.id}
                      className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-muted bg-white hover:bg-muted/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all h-full"
                    >
                      <r.icon className="w-10 h-10 mb-4 text-primary" />
                      <span className="font-bold text-lg">{r.label}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="space-y-2">
                <Label htmlFor="notes">הערות נוספות (אופציונלי)</Label>
                <Textarea 
                  id="notes" 
                  placeholder="האם הילד חושש? יש רגישות מיוחדת?" 
                  className="resize-none"
                  value={details.notes}
                  onChange={(e) => setDetails({...details, notes: e.target.value})}
                />
              </div>
            </div>
          )}

          {/* STEP 3: DETAILS */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
              <div className="bg-secondary/30 p-4 rounded-xl flex items-center gap-4 text-sm">
                <CalendarIcon className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-bold">
                    {date ? format(date, "EEEE, d בMMMM yyyy", { locale: he }) : "לא נבחר תאריך"}
                  </div>
                  <div className="text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" /> בשעה {time || "--:--"}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">שם מלא (ילד/הורה)</Label>
                  <Input 
                    id="name" 
                    required 
                    value={details.name}
                    onChange={(e) => setDetails({...details, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">טלפון לנייד</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    required 
                    value={details.phone}
                    onChange={(e) => setDetails({...details, phone: e.target.value})}
                  />
                </div>
              </div>
            </form>
          )}

        </CardContent>

        <div className="bg-muted/30 p-6 flex justify-between items-center border-t">
          <Button variant="ghost" onClick={prevStep} disabled={step === 1}>
            חזרה
          </Button>
          
          {step < 3 ? (
            <Button onClick={nextStep} disabled={(step === 1 && (!date || !time))}>
              המשך
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="px-8 shadow-lg shadow-primary/20">
              אישור וקביעת תור
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
