import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative bg-secondary pt-20 pb-10 mt-20">
      {/* Decorative Wave Top */}
        <div className="absolute top-0 left-0 right-0 -mt-20 overflow-hidden leading-none rotate-180">
            <svg
            className="relative block w-full h-[80px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            >
            <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-secondary"
            ></path>
            </svg>
        </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* About */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-2xl text-primary">ד״ר יעל פרונט D.M.D</h3>
            <p className="text-muted-foreground leading-relaxed">
              מומחית ברפואת שיניים לילדים
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">קישורים מהירים</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">טיפולים</Link></li>
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">נעים להכיר</Link></li>
              <li><Link href="#for-parents" className="text-muted-foreground hover:text-primary transition-colors">מידע להורים</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">רשמו אותי לבדיקה</Link></li>
              <li><Link href="/accessibility" className="text-muted-foreground hover:text-primary transition-colors">הצהרת נגישות</Link></li>
              <li><Link href="/legal" className="text-muted-foreground hover:text-primary transition-colors">מדיניות פרטיות</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">צור קשר</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span>שד׳ מוריה 64, חיפה</span>
                  <a href="https://waze.com/ul" target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">ניווט למרפאה</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:04-8344034" dir="ltr" className="hover:text-primary transition-colors">04-8344034</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="https://wa.me/972509344035" dir="ltr" className="hover:text-primary transition-colors">050-9344035 (WhatsApp)</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:drfront.yael@gmail.com" className="hover:text-primary transition-colors">drfront.yael@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">פעילות המרפאה</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex justify-between">
                <span>ימי א׳, ג׳, ה׳, ו׳</span>
                <span dir="ltr">7:30 - 14:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
          <div>
            © {new Date().getFullYear()} ד״ר יעל פרונט. כל הזכויות שמורות.
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/accessibility" className="hover:text-primary transition-colors">הצהרת נגישות</Link>
            <Link href="/legal" className="hover:text-primary transition-colors">מדיניות פרטיות</Link>
            <span className="hidden md:inline">|</span>
            <a href="https://waze.com/ul" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">ניווט למרפאה</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
