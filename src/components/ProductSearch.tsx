"use client"

import { useState, useCallback, useRef } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Barcode, Camera, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import dynamic from "next/dynamic"

const BarcodeScanner = dynamic(() => import("./BarcodeScanner"), { ssr: false })

const CANADA_US_FACTS = [
  "🤝 The US and Canada share the world's longest international border at 5,525 miles",
  "🛍️ The US and Canada have the largest bilateral trading relationship in the world",
  "🍁 Over 75% of Canadian exports go to the United States",
  "🏪 Nearly 400,000 people cross the US-Canada border every day",
  "📦 Trade between the US and Canada exceeds $1.7 billion per day",
  "🤓 Did you know? The first US-Canada free trade agreement was signed in 1988",
  "🌎 NAFTA was replaced by USMCA (CUSMA in Canada) in 2020",
  "🏭 Over 60% of Canada's manufacturing is exported to the US"
]

export default function ProductSearch() {
  const [query, setQuery] = useState("")
  const [isScanning, setIsScanning] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [currentFact, setCurrentFact] = useState(0)
  const router = useRouter()

  const handleScan = (data: string | null) => {
    if (data) {
      setQuery(data)
      setIsScanning(false)
      router.push(`/results?query=${encodeURIComponent(data)}`)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    
    setIsLoading(true)
    // Start fact rotation
    const interval = setInterval(() => {
      setCurrentFact(prev => (prev + 1) % CANADA_US_FACTS.length)
    }, 3000)
    
    router.push(`/results?query=${encodeURIComponent(query.trim())}`)
    
    // Cleanup interval if component unmounts
    return () => clearInterval(interval)
  }

  return (
    <div className="w-full relative z-[99]">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent dark:from-red-500/10 rounded-2xl" />
        <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Enter product name or barcode"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 bg-white dark:bg-gray-900 transition-all duration-200"
              />
            </div>
            <div className="flex gap-2">
              <Button type="submit" className="flex-1 sm:flex-none" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsScanning(!isScanning)}
                className="flex-1 sm:flex-none"
              >
                {isScanning ? (
                  <>
                    <Camera className="w-4 h-4 mr-2" />
                    Stop
                  </>
                ) : (
                  <>
                    <Barcode className="w-4 h-4 mr-2" />
                    Scan
                  </>
                )}
              </Button>
            </div>
          </form>
          
          {isScanning && (
            <div className="mt-4">
              <BarcodeScanner onScan={handleScan} />
            </div>
          )}
          
          {isLoading && (
            <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg animate-in slide-in-from-bottom-4 fade-in duration-700">
              <div className="flex items-center justify-center mb-4">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 dark:text-gray-300 animate-in fade-in slide-in-from-bottom duration-700">
                {CANADA_US_FACTS[currentFact]}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

