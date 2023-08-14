/**
 * Raw chain data from the database
 */
export type RawChain = {
  chain_name: string
  blocktime: number
}

/**
 * Raw tps data from the database
 */
export type RawTpsEntry = {
  processing_started_at: string
  chain_name: string
  datetime_start: string
  datetime_finish: string
  block_start: number
  block_finish: number
  avg_n_txns_in_block: number
  tps: number
}

/**
 * Processed chain data
 */
export type Chain = {
  name: string
  tps: number
  updatedAt: string
}
