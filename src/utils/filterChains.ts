import { ChainData } from '@/models'

export const filterChains = (chains: ChainData[], search: string) => {
  if (!Array.isArray(chains)) {
    return []
  }

  if (search) {
    const lowerCasedSearch = search.toLowerCase()

    return chains.filter(chain =>
      chain.name.toLowerCase().includes(lowerCasedSearch)
    )
  }

  return chains
}
