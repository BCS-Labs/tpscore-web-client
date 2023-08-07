import { ChainRow, TpsEntryRow } from '@/app/page'
import { ChainData } from '@/models'
import { ChainsFilterSort } from '@/store/chainsFilter'

export const processChainsData = ({
  chainRows,
  tpsRows,
}: {
  chainRows: ChainRow[]
  tpsRows: TpsEntryRow[]
}) => {
  const chainDataMap = tpsRows.reduce(
    (acc, tpsRow) => {
      if (!acc[tpsRow.chain_name]) {
        acc[tpsRow.chain_name] = {
          name: tpsRow.chain_name,
          tps: tpsRow.tps,
          updatedAt: tpsRow.datetime_finish,
        }
      }

      return acc
    },
    <Record<string, ChainData>>{}
  )

  const chainsData = chainRows.reduce(
    (acc, chainRow) => {
      const chainData = chainDataMap[chainRow.chain_name]

      if (chainData) {
        return [...acc, chainData]
      }

      return acc
    },
    <ChainData[]>[]
  )

  const totalTps = chainsData.reduce((acc, chainData) => {
    return acc + chainData.tps
  }, 0)

  return { chainsData, totalTps }
}

export const filterChains = (chains: ChainData[], search: string) => {
  if (search) {
    return chains.filter(chain =>
      chain.name.toLowerCase().includes(search.toLowerCase())
    )
  }

  return chains
}

export const sortChains = (chains: ChainData[], sort: ChainsFilterSort) => {
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
        return 1
      }

      if (a.tps > b.tps) {
        return -1
      }

      return 0
    }

    if (sort === 'tps-desc') {
      if (a.tps < b.tps) {
        return -1
      }

      if (a.tps > b.tps) {
        return 1
      }

      return 0
    }

    return 0
  })
}
