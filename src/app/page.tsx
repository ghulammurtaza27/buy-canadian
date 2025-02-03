import ProductSearch from "../components/ProductSearch"
import RecentSearches from "../components/RecentSearches"
import { MapPin, ShoppingBag, HeartHandshake, MapIcon as Maple } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type React from "react" // Import React

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <main className="relative container mx-auto px-4 py-12">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="mb-6 relative">
            <div className="absolute inset-0 flex items-center justify-center filter blur-sm opacity-50">
              <Maple className="h-24 w-24 text-red-600/50" />
            </div>
            <Maple className="h-24 w-24 text-red-600 mx-auto relative" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500 dark:from-red-500 dark:to-red-400">
            Buy Canadian
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
            Support local businesses and make informed shopping choices
          </p>
          <div className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-red-200 dark:via-red-800 to-transparent mb-4" />
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            In response to recent US tariffs, it's more important than ever to support Canadian products and strengthen
            our economy.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto mb-12 shadow-lg">
          <CardContent className="p-4 md:p-6">
            <ProductSearch />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12">
          <FeatureCard
            icon={<MapPin className="w-6 h-6" />}
            title="Support Local"
            description="Every Canadian purchase strengthens our local communities and economy"
          />
          <FeatureCard
            icon={<ShoppingBag className="w-6 h-6" />}
            title="Quality Products"
            description="Canadian products are known for their high quality and strict standards"
          />
          <FeatureCard
            icon={<HeartHandshake className="w-6 h-6" />}
            title="Fair Trade"
            description="Support fair labor practices and ethical manufacturing"
          />
        </div>

        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent dark:from-red-500/10" />
          <div className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-800/50">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
              Did You Know?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
              <Stat number="1.7M+" label="Jobs in Manufacturing" />
              <Stat number="10%" label="of Canada's GDP" />
              <Stat number="$354B" label="Annual Manufacturing Sales" />
            </div>
          </div>
        </div>

        <RecentSearches />
      </main>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 md:p-8 transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent dark:from-red-500/10" />
      <div className="relative">
        <div className="mb-4 inline-flex p-3 rounded-xl bg-red-50 dark:bg-red-500/10 text-red-500">{icon}</div>
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="space-y-2">
      <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">{number}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
    </div>
  )
}

