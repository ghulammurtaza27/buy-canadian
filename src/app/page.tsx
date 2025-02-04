import type React from "react"
import type { Metadata } from "next"
import { Card, CardContent } from "../components/ui/card"
import ProductSearch from "../components/ProductSearch"
import RecentSearches from "../components/RecentSearches"
import { MapPin, ShoppingBag, HeartHandshake, ArrowRight } from "lucide-react"
import { HeroSection } from "@/components/HeroSection"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: 'Buy Canadian',
  description: 'Find and support Canadian products',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />
      <main className="relative">
        <HeroSection />

        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto mb-24 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
              <ProductSearch />
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24">
            <FeatureCard
              icon={<MapPin className="w-6 h-6" />}
              title="Local Support"
              description="Support Canadian businesses and manufacturers"
              className="from-red-500/10 via-red-500/5 to-transparent"
            />
            <FeatureCard
              icon={<ShoppingBag className="w-6 h-6" />}
              title="Quality Products"
              description="Find high-quality Canadian-made goods"
              className="from-blue-500/10 via-blue-500/5 to-transparent"
            />
            <FeatureCard
              icon={<HeartHandshake className="w-6 h-6" />}
              title="Fair Trade"
              description="Support ethical business practices"
              className="from-green-500/10 via-green-500/5 to-transparent"
            />
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 p-12 mb-24 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent dark:from-red-500/10" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500 dark:from-red-500 dark:to-red-400">
                Canadian Manufacturing Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <Stat 
                  number="1.7M+" 
                  label="Manufacturing Jobs"
                  trend="+5% YoY"
                />
                <Stat 
                  number="10%" 
                  label="of Canada's GDP"
                  trend="Growing"
                />
                <Stat 
                  number="$354B" 
                  label="Annual Manufacturing Sales"
                  trend="+8.2% YoY"
                />
              </div>
            </div>
          </div>

          <div className="mb-24">
            <RecentSearches />
          </div>
        </div>
      </main>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  className,
}: {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className={cn("absolute inset-0 bg-gradient-to-br transition-opacity duration-300 group-hover:opacity-100", className)} />
      <div className="relative space-y-4">
        <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-50 to-red-100 dark:from-red-500/20 dark:to-red-500/10 text-red-500 ring-1 ring-red-100 dark:ring-red-500/20">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
        <div className="pt-2 flex items-center text-red-500 font-medium">
          Learn more <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  )
}

function Stat({ 
  number, 
  label, 
  trend 
}: { 
  number: string
  label: string
  trend?: string
}) {
  return (
    <div className="relative group p-6 rounded-2xl bg-gradient-to-br from-red-50 to-transparent dark:from-red-500/5 transition-all duration-300 hover:shadow-lg">
      <div className="space-y-2">
        <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300">
          {number}
        </div>
        <div className="text-sm font-medium text-gray-600 dark:text-gray-400">{label}</div>
        {trend && (
          <div className="text-sm font-medium text-green-600 dark:text-green-400 flex items-center gap-1">
            {trend}
          </div>
        )}
      </div>
    </div>
  )
}

