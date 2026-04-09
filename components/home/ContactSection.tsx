"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <div id="contact" className="container mx-auto px-4 py-24 bg-secondary/10">
      <div className="text-center mb-16 px-4">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
          צור קשר
        </h2>
        <p className="text-muted-foreground text-lg">
          יש לכם שאלה? רוצים להתייעץ? אנחנו כאן בשבילכם.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info & Map */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-none shadow-md bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">טלפון</h3>
                  <a href="tel:*5555" className="text-muted-foreground hover:text-primary transition-colors">*5555</a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">אימייל</h3>
                  <a href="mailto:clinic@smiles.co.il" className="text-muted-foreground hover:text-primary transition-colors">clinic@smiles.co.il</a>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-lg overflow-hidden">
             <div className="bg-secondary/20 h-[300px] w-full flex items-center justify-center relative">
                <div className="text-center">
                    <MapPin className="w-10 h-10 text-primary mx-auto mb-2" />
                    <span className="font-bold text-lg text-foreground">רחוב הילדים 10, תל אביב</span>
                </div>
                <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
             </div>
             <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    שעות פעילות
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <span className="font-medium block">א' - ה':</span>
                        <span className="text-muted-foreground">09:00 - 19:00</span>
                    </div>
                    <div>
                        <span className="font-medium block">יום ו':</span>
                        <span className="text-muted-foreground">09:00 - 13:00</span>
                    </div>
                </div>
             </CardContent>
          </Card>
        </div>

        {/* Form */}
        <Card className="border-none shadow-xl bg-white h-fit">
            <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">השאירו פרטים</h3>
                <form className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="contact-name">שם מלא</Label>
                        <Input id="contact-name" placeholder="שם הורה / ילד" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="contact-phone">טלפון</Label>
                        <Input id="contact-phone" type="tel" placeholder="050-0000000" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="contact-message">הודעה</Label>
                        <Textarea id="contact-message" placeholder="איך נוכל לעזור?" className="min-h-[120px]" />
                    </div>
                    <Button size="lg" className="w-full text-lg shadow-lg" type="button">
                        שלח הודעה
                    </Button>
                </form>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
