"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function RecentSearches() {
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  useEffect(() => {
    const searches = JSON.parse(localStorage.getItem("recentSearches") || "[]")
    setRecentSearches(searches)
  }, [])

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Recent Searches</CardTitle>
      </CardHeader>
      <CardContent>
        {recentSearches.length > 0 ? (
          <ul className="space-y-2">
            {recentSearches.map((search, index) => (
              <li key={index}>
                <Link href={`/results?query=${encodeURIComponent(search)}`} className="text-blue-500 hover:underline">
                  {search}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No recent searches</p>
        )}
      </CardContent>
    </Card>
  )
}

