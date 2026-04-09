"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function StickyBookingBar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  // Show only when scrolled a bit and not on booking page
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t shadow-2xl z-40 md:hidden"
        >
          <div className="flex gap-4">
            <Button className="flex-1 rounded-full shadow-lg" asChild>
              <Link href="#book">
                <Calendar className="w-4 h-4 ml-2" />
                קביעת תור מהיר
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full shadow-sm bg-white" asChild>
              <a href="tel:*5555">
                <Phone className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
