"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Accessibility, Eye, Type, Link as LinkIcon, Minus, Plus, Settings2, Palette, ImageOff, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(1); // multiplier
  const [config, setConfig] = useState({
    highContrast: false,
    invertColors: false,
    highlightLinks: false,
    readableFont: false,
    stopAnimations: false,
  });

  // Apply properties to HTML element
  useEffect(() => {
    const html = document.documentElement;
    
    // Reset classes and data attributes we control
    html.removeAttribute("data-a11y-contrast");
    html.removeAttribute("data-a11y-invert");
    html.removeAttribute("data-a11y-links");
    html.removeAttribute("data-a11y-font");
    html.removeAttribute("data-a11y-animations");

    if (config.highContrast) html.setAttribute("data-a11y-contrast", "true");
    if (config.invertColors) html.setAttribute("data-a11y-invert", "true");
    if (config.highlightLinks) html.setAttribute("data-a11y-links", "true");
    if (config.readableFont) html.setAttribute("data-a11y-font", "true");
    if (config.stopAnimations) html.setAttribute("data-a11y-animations", "true");

    html.style.fontSize = `${fontSize * 100}%`;

  }, [config, fontSize]);

  const toggleSetting = (key: keyof typeof config) => {
    setConfig(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const changeFontSize = (delta: number) => {
    setFontSize(prev => {
      const newSize = prev + delta;
      return Math.min(Math.max(newSize, 0.8), 2.0); // limits: 80% to 200%
    });
  };

  const resetAll = () => {
    setFontSize(1);
    setConfig({
      highContrast: false,
      invertColors: false,
      highlightLinks: false,
      readableFont: false,
      stopAnimations: false,
    });
  };

  return (
    <div className="fixed bottom-6 left-6 z-[100] flex flex-col items-start gap-4">
      {/* Menu Options */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border p-4 w-72 max-h-[80vh] overflow-y-auto animate-in fade-in slide-in-from-bottom-5">
          <div className="flex justify-between items-center mb-4 pb-2 border-b">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Accessibility className="w-5 h-5 text-blue-600" />
              הגדרות נגישות
            </h3>
          </div>

          <div className="space-y-4">
            {/* Font Size */}
            <div className="space-y-2 text-sm">
              <div className="font-medium text-foreground">גודל טקסט</div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => changeFontSize(-0.1)}>
                  <Minus className="w-4 h-4" />
                </Button>
                <div className="flex-1 text-center font-bold font-mono">
                  {Math.round(fontSize * 100)}%
                </div>
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => changeFontSize(0.1)}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <hr />

            {/* Toggles */}
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant={config.highContrast ? "default" : "outline"} 
                className="h-auto py-3 px-2 flex flex-col gap-2 shadow-none"
                onClick={() => toggleSetting("highContrast")}
              >
                <Eye className="w-5 h-5" />
                <span className="text-xs whitespace-normal">ניגודיות גבוהה</span>
              </Button>
              <Button 
                variant={config.invertColors ? "default" : "outline"} 
                className="h-auto py-3 px-2 flex flex-col gap-2 shadow-none"
                onClick={() => toggleSetting("invertColors")}
              >
                <Palette className="w-5 h-5" />
                <span className="text-xs whitespace-normal">היפוך צבעים</span>
              </Button>
              <Button 
                variant={config.highlightLinks ? "default" : "outline"} 
                className="h-auto py-3 px-2 flex flex-col gap-2 shadow-none"
                onClick={() => toggleSetting("highlightLinks")}
              >
                <LinkIcon className="w-5 h-5" />
                <span className="text-xs whitespace-normal">הדגשת קישורים</span>
              </Button>
              <Button 
                variant={config.readableFont ? "default" : "outline"} 
                className="h-auto py-3 px-2 flex flex-col gap-2 shadow-none"
                onClick={() => toggleSetting("readableFont")}
              >
                <Type className="w-5 h-5" />
                <span className="text-xs whitespace-normal">גופן קריא</span>
              </Button>
              <Button 
                variant={config.stopAnimations ? "default" : "outline"} 
                className="h-auto py-3 px-2 flex flex-col gap-2 shadow-none"
                onClick={() => toggleSetting("stopAnimations")}
              >
                <ImageOff className="w-5 h-5" />
                <span className="text-xs whitespace-normal">עצירת אנימציות</span>
              </Button>
            </div>

            <Button variant="ghost" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50" onClick={resetAll}>
              <RefreshCcw className="w-4 h-4 mr-2" />
              איפוס הגדרות נגישות
            </Button>
            <div className="text-[10px] text-center text-muted-foreground pt-2">
              בהצהרת הנגישות באתר ניתן למצוא מידע נוסף בהתאם לתקן.
            </div>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <Button 
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={cn(
          "w-14 h-14 rounded-full shadow-2xl transition-all",
          isOpen ? "bg-white text-blue-600 border-2 border-blue-600 hover:bg-muted" : "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1"
        )}
      >
        <Accessibility className="w-7 h-7" />
        <span className="sr-only">פתיחת תפריט נגישות</span>
      </Button>
    </div>
  );
}
