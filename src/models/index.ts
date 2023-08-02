export type Chain = {
  chain_name: string
  blocktime: number
}

export type TpsEntry = {
  processing_started_at: string
  chain_name: string
  datetime_start: string
  datetime_finish: string
  block_start: number
  block_finish: number
  avg_n_txns_in_block: number
  tps: number
}

export type ChainData = {
  name: string
  tps: number
  updatedAt: string
}
