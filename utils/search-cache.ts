type CacheEntry = {
  timestamp: number
  data: any[]
}

const cache = new Map<string, CacheEntry>()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export function getCachedResults(query: string): any[] | null {
  const entry = cache.get(query)
  if (!entry) return null

  if (Date.now() - entry.timestamp > CACHE_DURATION) {
    cache.delete(query)
    return null
  }

  return entry.data
}

export function cacheResults(query: string, data: any[]) {
  cache.set(query, {
    timestamp: Date.now(),
    data,
  })
}

