import { ChainRow, TpsRow } from '@/app/page'
import { Chain } from '@/models'

/**
 * Processes raw chain and tps data from DB into convenient structure
 * @param chainRows DB chain rows
 * @param tpsRows DB tps rows
 * @returns processed chain data
 */
export const processChainsData = (chainRows: ChainRow[], tpsRows: TpsRow[]) => {
  if (!Array.isArray(chainRows) || !Array.isArray(tpsRows)) {
    return []
  }

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
    <Record<string, Chain>>{}
  )

  const chains = chainRows.reduce(
    (acc, chainRow) => {
      const chainData = chainDataMap[chainRow.chain_name]

      if (chainData) {
        return [...acc, chainData]
      }

      return acc
    },
    <Chain[]>[]
  )

  return chains
}
