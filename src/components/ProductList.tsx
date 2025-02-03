"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Package } from "lucide-react"
import { getProductOrigin } from "../../utils/brand-utils"

export default function ProductList({ products, query }: { products: any[]; query: string }) {
  const getOriginStyles = (origin: string) => {
    switch (origin) {
      case "Owned by Canada":
        return "bg-red-50 text-red-700 dark:bg-red-500/20 dark:text-red-300 border-red-100 dark:border-red-500/20"
      case "Owned by US":
        return "bg-blue-50 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 border-blue-100 dark:border-blue-500/20"
      default:
        return "bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700"
    }
  }

  const getPrimaryLocation = (product: any) => {
    if (!product.countries) return "Location unknown"
    return product.countries.split(",")[0].trim()
  }

  return (
    <div className="grid gap-4 max-w-full">
      {products.map((product) => {
        const origin = getProductOrigin(product)
        return (
          <Link href={`/product/${product.code}?from=${encodeURIComponent(query || "")}`} key={product.code}>
            <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="p-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="relative h-16 w-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0">
                    {product.image_url ? (
                      <Image
                        src={product.image_url || "/placeholder.svg"}
                        alt={product.product_name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <Package className="h-8 w-8 absolute inset-0 m-auto text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 break-words">
                      {product.product_name}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 break-words">{product.brands}</p>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <MapPin className="h-4 w-4 shrink-0 mr-1" />
                      <span className="truncate">{getPrimaryLocation(product)}</span>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={`whitespace-nowrap mt-2 sm:mt-0 px-3 py-1 text-sm font-medium border ${getOriginStyles(origin)}`}
                  >
                    {origin}
                  </Badge>
                </div>
              </div>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}

