import { ChainData } from '@/models'
import { ChainsFilterSort } from '@/store/chainsFilter'

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
