import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Toaster } from "@/components/ui/sonner";
import { StickyBookingBar } from "@/components/features/StickyBookingBar";
import { AccessibilityWidget } from "@/components/features/AccessibilityWidget";
import { Smartbot } from "@/components/features/Smartbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "חיוכים קטנים | מרפאת שיניים לילדים ונוער",
  description: "מרפאת שיניים חמה, רגועה ומקצועית לילדים. חוויה חיובית ומעצימה לטיפול הטוב ביותר.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <body
        className={`${inter.variable} ${nunito.variable} antialiased font-sans bg-background text-foreground overflow-x-hidden`}
      >
        <SmoothScroll>
          <Header />
            <main className="min-h-screen pt-20">
              {children}
            </main>
          <Footer />
          <StickyBookingBar />
          <AccessibilityWidget />
          <Smartbot />
          <Toaster />
        </SmoothScroll>
      </body>
    </html>
  );
}
