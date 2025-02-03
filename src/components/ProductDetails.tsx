import type React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Package, Leaf, Award } from "lucide-react"
import Image from "next/image"
import { getProductOrigin, getPrimaryLocation } from "../../utils/brand-utils"

export default function ProductDetails({ product }: { product: any }) {
  const origin = getProductOrigin(product)

  const getOriginStyles = () => {
    switch (origin) {
      case "Owned by Canada":
        return {
          container: "bg-red-50 border-red-100 dark:bg-red-500/10 dark:border-red-500/20",
          text: "text-red-700 dark:text-red-300",
          badge: "bg-red-50 text-red-700 dark:bg-red-500/20 dark:text-red-300 border-red-100 dark:border-red-500/20",
        }
      case "Owned by US":
        return {
          container: "bg-blue-50 border-blue-100 dark:bg-blue-500/10 dark:border-blue-500/20",
          text: "text-blue-700 dark:text-blue-300",
          badge:
            "bg-blue-50 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 border-blue-100 dark:border-blue-500/20",
        }
      default:
        return {
          container: "bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700",
          text: "text-gray-700 dark:text-gray-300",
          badge: "bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700",
        }
    }
  }

  const styles = getOriginStyles()

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <Card className="overflow-hidden border-0 shadow-lg">
        <CardHeader className="border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center space-x-4">
            <div className="relative h-20 w-20 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              {product.image_url ? (
                <Image
                  src={product.image_url || "/placeholder.svg"}
                  alt={product.product_name}
                  fill
                  className="object-cover"
                />
              ) : (
                <Package className="h-12 w-12 absolute inset-0 m-auto text-gray-400" />
              )}
            </div>
            <div className="flex-grow min-w-0">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 truncate">
                {product.product_name}
              </h1>
              <p className="text-gray-500 dark:text-gray-400">{product.brands}</p>
              <div className="flex items-center mt-1 text-gray-600 dark:text-gray-300">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{getPrimaryLocation(product)}</span>
              </div>
            </div>
            <Badge variant="outline" className={`px-3 py-1 text-sm font-medium border ${styles.badge}`}>
              {origin}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-6">
            {product.ingredients_text && (
              <DetailSection
                icon={<Leaf className="h-5 w-5" />}
                title="Ingredients"
                content={product.ingredients_text}
              />
            )}
            {product.labels && (
              <DetailSection
                icon={<Award className="h-5 w-5" />}
                title="Certifications"
                content={
                  <div className="flex flex-wrap gap-2">
                    {product.labels.split(",").map((label: string) => (
                      <Badge key={label} variant="outline" className="text-sm">
                        {label.trim()}
                      </Badge>
                    ))}
                  </div>
                }
              />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function DetailSection({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode
  title: string
  content: React.ReactNode
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <div className="text-gray-400 dark:text-gray-500">{icon}</div>
        <h2 className="font-medium text-gray-900 dark:text-gray-100">{title}</h2>
      </div>
      <div className="text-gray-700 dark:text-gray-300">{content}</div>
    </div>
  )
}

