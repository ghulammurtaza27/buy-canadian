"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type LanguageContextType = {
  language: "en" | "fr"
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.search": "Search Products",
    "search.placeholder": "Enter product name or barcode",
    "search.button": "Search",
    "search.scan": "Scan",
    "search.stop": "Stop",
    "results.title": "Search Results for",
    "results.back": "Back to Search",
    "origin.canada": "Made in Canada",
    "origin.usa": "Made in USA",
    "origin.other": "Not Canadian or American",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "nav.search": "Rechercher des produits",
    "search.placeholder": "Entrez le nom du produit ou le code-barres",
    "search.button": "Rechercher",
    "search.scan": "Scanner",
    "search.stop": "Arrêter",
    "results.title": "Résultats pour",
    "results.back": "Retour à la recherche",
    "origin.canada": "Fabriqué au Canada",
    "origin.usa": "Fabriqué aux États-Unis",
    "origin.other": "Non canadien ou américain",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<"en" | "fr">("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "en" | "fr"
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "fr" : "en"
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  const t = (key: string) => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

