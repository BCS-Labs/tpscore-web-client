import { ChainData } from '@/models'

/**
 * Counts total tps of multiple chains
 * @param chains array of chains
 * @returns total tps
 */
export const countTotalTps = (chains: ChainData[]) => {
  if (!Array.isArray(chains)) {
    return 0
  }

  return chains.reduce((acc, chainData) => acc + chainData.tps, 0)
}
