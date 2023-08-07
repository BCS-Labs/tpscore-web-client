import { ChainRow, TpsEntryRow } from '@/app/page'
import { ChainData } from '@/models'

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
