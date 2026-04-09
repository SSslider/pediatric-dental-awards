"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
};

// Simulated Knowledge Base (RAG)
const knowledgeBase = [
  {
    keywords: ["מחיר", "כמה עולה", "עלות", "מחירים", "price", "cost"],
    answer: "המחירים שלנו משתנים בהתאם לסוג הטיפול ולתכנית המותאמת אישית לילד. בדיקה שגרתית ראשונה כרוכה בעלות סמלית, ואנו עובדים בהסדר עם רוב חברות הביטוח. לקבלת הצעת מחיר מדויקת נשמח לראותכם במרפאה!"
  },
  {
    keywords: ["מקום", "מיקום", "כתובת", "איפה", "להגיע", "location", "where"],
    answer: "המרפאה שלנו ממוקמת ברחוב הילדים 10, קומה 2, תל אביב. יש חניה מסודרת בחניון הבניין לנוחיותכם."
  },
  {
    keywords: ["שעות", "מתי", "פתוח", "פעילות", "hours", "open"],
    answer: "אנחנו פתוחים בימים א' עד ה' בין השעות 09:00 ל-19:00, ובימי שישי בין 09:00 ל-13:00."
  },
  {
    keywords: ["טלפון", "להתקשר", "קשר", "אימייל", "phone", "contact"],
    answer: "ניתן ליצור איתנו קשר בטלפון *5555, או באימייל clinic@smiles.co.il."
  },
  {
    keywords: ["זריקה", "כואב", "פחד", "חרדה", "גז צחוק"],
    answer: "אנחנו מומחים בטיפול בילדים חוששים! אנו משתמשים בשיטות הרגעה מתקדמות, גז צחוק, וגישה חיובית וסבלנית כדי להפוך את הטיפול ללא כואב ורגוע לחלוטין."
  },
  {
    keywords: ["תור", "לקבוע", "פגישה", "book", "appointment"],
    answer: "אפשר לקבוע תור בקלות דרך האתר שלנו (יש כפתור קביעת תור בראש העמוד), או בטלפון *5555."
  },
  {
    keywords: ["טיפולים", "מה אתם עושים", "יישור", "סתימה"],
    answer: "אנו מציעים מגוון טיפולים: בדיקות שגרתיות, ניקוי, סתימות, טיפולי מניעה (איטום חריצים), יישור שיניים וטיפולי חירום וטראומה."
  }
];

export function Smartbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "שלום! אני ד\"ר חיוך, העוזר הווירטואלי של המרפאה. איך אפשר לעזור היום?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const generateResponse = (query: string) => {
    const q = query.toLowerCase();
    
    // Simple matching algorithm simulating Retrieval Augmented Generation (RAG)
    for (const item of knowledgeBase) {
      if (item.keywords.some(kw => q.includes(kw))) {
        return item.answer;
      }
    }
    
    return "שאלה מצוינת! כדי לתת לך את התשובה המדויקת ביותר בנושא זה, אני ממליץ ליצור קשר עם הצוות האנושי שלנו בטלפון *5555.";
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now(), text: input, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate network delay and thinking
    setTimeout(() => {
      const responseText = generateResponse(userMessage.text);
      setMessages(prev => [...prev, { id: Date.now(), text: responseText, sender: "bot" }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 seconds delay
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 font-sans text-right" dir="rtl">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border w-[320px] sm:w-[360px] h-[450px] flex flex-col animate-in fade-in slide-in-from-bottom-5">
          
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-2xl flex justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-sm">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold">ד"ר חיוך (בוט)</h3>
                <p className="text-xs text-white/80">זמין לענות על כל שאלה</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 relative z-10" onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-4">
            {messages.map((msg) => (
              <div key={msg.id} className={cn("flex gap-2 max-w-[85%]", msg.sender === "user" ? "self-end flex-row-reverse" : "self-start")}>
                <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-sm", msg.sender === "user" ? "bg-secondary text-primary" : "bg-primary text-white")}>
                  {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={cn("p-3 rounded-2xl text-sm leading-relaxed shadow-sm", 
                  msg.sender === "user" 
                  ? "bg-white text-foreground rounded-tl-sm border" 
                  : "bg-primary/10 text-foreground rounded-tr-sm"
                )}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-2 self-start max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-4 rounded-2xl bg-primary/10 rounded-tr-sm flex gap-1 items-center shadow-sm">
                  <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                  <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 border-t bg-white rounded-b-2xl flex gap-2">
            <Input 
              placeholder="הקלד/י שאלה..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-slate-50 border-none focus-visible:ring-1 focus-visible:ring-primary rounded-full px-4"
              dir="rtl"
            />
            <Button type="submit" size="icon" className="rounded-full shrink-0 shadow-md" disabled={!input.trim() || isTyping}>
              <Send className="w-4 h-4 mr-1" />
            </Button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <Button 
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full shadow-2xl h-14 px-6 gap-2 hover:-translate-y-1 transition-transform animate-in zoom-in"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="font-bold text-lg hidden sm:inline-block">צריך עזרה?</span>
        </Button>
      )}
    </div>
  );
}
