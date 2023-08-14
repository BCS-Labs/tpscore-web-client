import { Chain } from '@/models'

/**
 * Filters chains, that have provided search string in their names
 * @param chains array of chains
 * @param search search string
 * @returns filtered array of chains
 */
export const filterChains = (chains: Chain[], search: string) => {
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
