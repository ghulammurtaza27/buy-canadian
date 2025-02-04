import { Suspense } from "react"
import Link from "next/link"
import ProductList from "../../components/ProductList"
import LoadingSpinner from "../../components/LoadingSpinner"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Card } from "@/components/ui/card"

interface Product {
  code: string
  product_name: string
  brands: string
  image_url?: string
  ingredients_text?: string
  labels?: string
  ownership?: string
  countries?: string
  countries_tags?: string[]
}

async function getProductInfo(query: string) {
  try {
    // Add search tags and better filtering
    const apiUrl = `http://localhost:3000/api/search?query=${encodeURIComponent(query)}&fields=product_name,code,brands,countries,countries_tags,image_url,ingredients_text,labels&tagtype_0=brands&tag_contains_0=contains&tag_0=${encodeURIComponent(query)}`
    
    const response = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 0 }
    })
    
    if (!response.ok) {
      console.error(`API error: ${response.status} ${response.statusText}`)
      return []
    }
    
    const data = await response.json()
    return data.products || []
  } catch (error) {
    console.error("Search error:", error)
    return []
  }
}

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function ResultsPage({ 
  searchParams 
}: PageProps) {
  const query = searchParams?.query
  const searchQuery = typeof query === 'string' ? decodeURIComponent(query) : ''

  if (!searchQuery) {
    return (
      <div className="container mx-auto p-8">
        <h1>No search query provided</h1>
      </div>
    )
  }

  const products = await getProductInfo(searchQuery)

  return (
    <Suspense
      fallback={
        <div className="container mx-auto p-8">
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
            <LoadingSpinner size="lg" />
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Searching products...
            </p>
          </div>
        </div>
      }
    >
      <Results products={products} query={searchQuery} />
    </Suspense>
  )
}

async function Results({ products, query }: { products: Product[], query: string }) {
  if (!products.length) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">No results found</h1>
        <p>Try searching with different terms</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-4 sm:py-8 min-h-screen">
      <Card className="mb-4 sm:mb-8 p-4 sm:p-6 sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
          <div>
            <h1 className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">Search Results</h1>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Showing results for &quot;{query}&quot;</p>
          </div>
          <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
            <Link href="/" className="whitespace-nowrap">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Search
            </Link>
          </Button>
        </div>
      </Card>

      <div className="space-y-4 sm:space-y-8">
        <ProductInfo query={query} />
      </div>
    </div>
  )
}

async function ProductInfo({ query }: { query: string }) {
  const products = await getProductInfo(query)

  return products.length > 0 ? (
    <div className="grid gap-4 sm:gap-6">
      <ProductList products={products} query={query} />
    </div>
  ) : (
    <Card className="p-6 sm:p-8 text-center">
      <p className="text-lg sm:text-xl mb-2 sm:mb-4 text-gray-900 dark:text-white">No products found.</p>
      <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-4 sm:mb-6">Try a different search term or browse our categories.</p>
      <Button asChild>
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return to Home
        </Link>
      </Button>
    </Card>
  )
}

