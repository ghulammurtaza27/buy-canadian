"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Locale } from "../i18n.config"

interface RecentSearchesProps {
  lang: Locale
}

export default function RecentSearches({ lang }: RecentSearchesProps) {
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  useEffect(() => {
    // Get searches from localStorage
    const searches = JSON.parse(localStorage.getItem("recentSearches") || "[]")
    setRecentSearches(searches)

    // Add event listener for new searches
    const handleNewSearch = (event: StorageEvent) => {
      if (event.key === "recentSearches") {
        setRecentSearches(JSON.parse(event.newValue || "[]"))
      }
    }
    window.addEventListener("storage", handleNewSearch)

    return () => window.removeEventListener("storage", handleNewSearch)
  }, [])

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>
          {lang === "fr" ? "Recherches Récentes" : "Recent Searches"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {recentSearches.length > 0 ? (
          <ul className="space-y-2">
            {recentSearches.map((search, index) => (
              <li key={index}>
                <Link 
                  href={`/${lang}/results?query=${encodeURIComponent(search)}`} 
                  className="text-blue-500 hover:underline"
                >
                  {search}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">
            {lang === "fr" ? "Aucune recherche récente" : "No recent searches"}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

