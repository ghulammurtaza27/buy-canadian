"use client"

import { useRouter, useSearchParams, notFound } from "next/navigation"
import { useEffect, useState } from "react"
import ProductDetails from "../../../components/ProductDetails"
import LoadingSpinner from "../../../components/LoadingSpinner"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

type Props = {
  params: any
  searchParams: any
}

export default function ProductPage({ params, searchParams }: Props) {
  const { code } = params
  const router = useRouter()
  const [product, setProduct] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://world.openfoodfacts.org/api/v0/product/${code}.json`
        )
        if (!response.ok) {
          throw new Error("Failed to fetch product data")
        }
        const data = await response.json()
        if (!data.product) {
          notFound()
        }
        setProduct(data.product)
      } catch (error) {
        console.error("Error fetching product:", error)
        notFound()
      } finally {
        setIsLoading(false)
      }
    }
    fetchProduct()
  }, [code])

  const handleBack = () => {
    const query = searchParams?.from
    if (query) {
      router.push(`/results?query=${encodeURIComponent(query.toString())}`)
    } else {
      router.push("/")
    }
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[400px]">
        <LoadingSpinner />
      </div>
    )
  }

  if (!product) {
    return notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8 p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Product Details</h1>
            <p className="text-gray-500 dark:text-gray-400">View detailed information about this product</p>
          </div>
          <Button onClick={handleBack} variant="outline" size="sm" className="whitespace-nowrap">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Results
          </Button>
        </div>
      </Card>

      <ProductDetails product={product} />
    </div>
  )
}

