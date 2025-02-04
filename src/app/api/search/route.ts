import { NextResponse } from 'next/server'
import { getProductOrigin } from '../../../../utils/brand-utils'

export const maxDuration = 59
export const dynamic = 'force-dynamic'

// Cache results in memory
const cache = new Map<string, { data: any, timestamp: number }>()
const CACHE_TTL = 1000 * 60 * 5 // 5 minutes

async function fetchWithFallback(url: string): Promise<Response> {
  // Check cache first
  const cacheKey = url
  const cached = cache.get(cacheKey)
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    const productsWithOwnership = cached.data.map((product: any) => ({
      ...product,
      ownership: getProductOrigin(product)
    }))
    return new Response(JSON.stringify({ products: productsWithOwnership }))
  }

  try {
    // Primary API request
    const response = await fetch(url, {
      headers: {
        "User-Agent": "BuyCanadian/1.0",
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(15000), // 15 second timeout
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    
    // Add ownership to products before caching
    const productsWithOwnership = data.products.map((product: any) => ({
      ...product,
      ownership: getProductOrigin(product)
    }))
    
    // Cache the successful response
    cache.set(cacheKey, {
      data: productsWithOwnership,
      timestamp: Date.now()
    })

    return new Response(JSON.stringify({ products: productsWithOwnership }))
  } catch (primaryError) {
    console.error('Primary API error:', primaryError)

    // If we have stale cache, use it
    if (cached) {
      console.log('Using stale cache data')
      const productsWithOwnership = cached.data.map((product: any) => ({
        ...product,
        ownership: getProductOrigin(product)
      }))
      return new Response(JSON.stringify({ products: productsWithOwnership, fromCache: true }))
    }

    // Fallback to a more reliable endpoint or simplified search
    const fallbackUrl = `https://world.openfoodfacts.org/api/v2/search?query=${encodeURIComponent(url.split('search_terms=')[1].split('&')[0])}&fields=product_name,code,brands,countries,countries_tags`
    
    try {
      const fallbackResponse = await fetch(fallbackUrl, {
        headers: { "User-Agent": "BuyCanadian/1.0" },
        signal: AbortSignal.timeout(10000), // 10 second timeout for fallback
      })

      if (!fallbackResponse.ok) {
        throw new Error('Fallback API also failed')
      }

      const fallbackData = await fallbackResponse.json()
      const productsWithOwnership = fallbackData.products.map((product: any) => ({
        ...product,
        ownership: getProductOrigin(product)
      }))

      return new Response(JSON.stringify({ products: productsWithOwnership }))
    } catch (fallbackError) {
      console.error('Fallback API error:', fallbackError)
      throw new Error('All API attempts failed')
    }
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')

    if (!query) {
      return NextResponse.json({ products: [] })
    }

    // Update the API URL to better match brand names
    const apiUrl = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&fields=product_name,code,brands,countries,countries_tags,image_url,ingredients_text,labels&tagtype_0=brands&tag_contains_0=contains&tag_0=${encodeURIComponent(query)}`
    
    const response = await fetchWithFallback(apiUrl)
    const data = await response.json()

    return NextResponse.json({
      products: data.products || [],
      timestamp: Date.now()
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    })

  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json({ 
      products: [],
      error: 'Search temporarily unavailable',
      timestamp: Date.now()
    })
  }
} 