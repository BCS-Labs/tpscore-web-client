import { create } from 'zustand'

export type ChainsFilterSort = 'alphabetically' | 'tps-asc' | 'tps-desc'

export const SORTING_TYPES: ChainsFilterSort[] = [
  'alphabetically',
  'tps-asc',
  'tps-desc',
]

type ChainsFilterStore = {
  search: string
  sort: ChainsFilterSort
  setSearch: (search: string) => void
  setSort: (sort: ChainsFilterSort) => void
}

export const useChainsFilterStore = create<ChainsFilterStore>(set => ({
  search: '',
  sort: 'alphabetically',
  setSearch: (search: string) => set({ search }),
  setSort: (sort: ChainsFilterSort) => set({ sort }),
}))
