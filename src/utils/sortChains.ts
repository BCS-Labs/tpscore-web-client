import { ChainData } from '@/models'
import { ChainsFilterSort } from '@/store/chainsFilter'

/**
 * Sorts chains in one of three different ways
 * @param chains array of chains
 * @param sort either alphabetically, in ascending or descending order
 * @returns sorted array of chains
 */
export const sortChains = (chains: ChainData[], sort: ChainsFilterSort) => {
  if (!Array.isArray(chains)) {
    return []
  }

  return [...chains].sort((a, b) => {
    if (sort === 'alphabetically') {
      if (a.name < b.name) {
        return -1
      }

      if (a.name > b.name) {
        return 1
      }

      return 0
    }

    if (sort === 'tps-asc') {
      if (a.tps < b.tps) {
        return -1
      }

      if (a.tps > b.tps) {
        return 1
      }

      return 0
    }

    if (sort === 'tps-desc') {
      if (a.tps < b.tps) {
        return 1
      }

      if (a.tps > b.tps) {
        return -1
      }

      return 0
    }

    return 0
  })
}
