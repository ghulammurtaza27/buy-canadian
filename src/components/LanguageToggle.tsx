"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <Button onClick={toggleLanguage} variant="outline" size="sm" className="w-[100px] text-sm font-medium">
      {language === "en" ? "Français" : "English"}
    </Button>
  )
}

