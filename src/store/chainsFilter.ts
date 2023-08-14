import { create } from 'zustand'

export type ChainsFilterSort = 'alphabetically' | 'tps-asc' | 'tps-desc'

type ChainsFilterStore = {
  /**
   * Search input state
   */
  search: string
  /**
   * Sort select state
   */
  sort: ChainsFilterSort
  /**
   * Updates search input state
   */
  setSearch: (search: string) => void
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
  sort: 'alphabetically',
  setSearch: (search: string) => set({ search }),
  setSort: (sort: ChainsFilterSort) => set({ sort }),
}))
