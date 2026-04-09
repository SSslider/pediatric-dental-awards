"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navItems = [
  { name: "בית", href: "/" },
  { name: "טיפולים", href: "#services" },
  { name: "ביקור ראשון", href: "#first-visit" },
  { name: "להורים", href: "#for-parents" },
  { name: "צור קשר", href: "#contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
            ח
          </div>
          <span className="font-heading font-bold text-xl md:text-2xl text-foreground">
            חיוכים קטנים
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-base font-medium transition-colors hover:text-primary relative group",
                pathname === item.href || (item.href !== "/" && pathname === "/" && typeof window !== "undefined" && window.location.hash === item.href) ? "text-primary" : "text-foreground/80"
              )}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Call to Action */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:*5555"
            className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            <Phone className="w-4 h-4" />
            *5555
          </a>
          <Button asChild className="rounded-full px-6 font-bold shadow-lg hover:shadow-xl transition-all">
            <Link href="#book">קביעת תור בקליק</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-6 mt-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-xl font-medium transition-colors hover:text-primary",
                    pathname === item.href || (item.href !== "/" && pathname === "/" && typeof window !== "undefined" && window.location.hash === item.href) ? "text-primary" : "text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <hr className="my-2" />
              <Button asChild className="w-full rounded-full text-lg py-6">
                <Link href="#book" onClick={() => setIsOpen(false)}>
                  קביעת תור
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full rounded-full text-lg py-6">
                <a href="tel:*5555">
                  <Phone className="w-4 h-4 ml-2" />
                  חייגו אלינו *5555
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
