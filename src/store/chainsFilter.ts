import { create } from 'zustand'

export type ChainsFilterSort = 'alphabetically' | 'tps-asc' | 'tps-desc'

type ChainsFilterStore = {
  /**
   * Search input state
   */
  search: string
  /**
   * Zero TPS toggle state
   */
  showZeroTps: boolean
  /**
   * Sort select state
   */
  sort: ChainsFilterSort
  /**
   * Updates search input state
   */
  setSearch: (search: string) => void
  /**
   * Updates zero TPS toggle state
   */
  setShowZeroTps: (showZeroTps: boolean) => void
  /**
   * Updates sort select state
   */
  setSort: (sort: ChainsFilterSort) => void
}

/**
 * Stores filters states of the tps dashboard
 */
export const useChainsFilterStore = create<ChainsFilterStore>(set => ({
  search: '',
  showZeroTps: false,
  sort: 'alphabetically',
  setSearch: search => set({ search }),
  setShowZeroTps: showZeroTps => set({ showZeroTps }),
  setSort: sort => set({ sort }),
}))
