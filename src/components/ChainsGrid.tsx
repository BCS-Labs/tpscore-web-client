'use client'

import { FC, useState } from 'react'
import { sanitize } from 'dompurify'
import { ChainData } from '@/models'
import { useChainsFilterStore } from '@/store/chainsFilter'
import { ChainItem } from './ChainItem'

type Props = {
  chains: ChainData[]
}

export const ChainsGrid: FC<Props> = ({ chains }) => {
  const { search, sort } = useChainsFilterStore()
  const [updatedAtShownId, setUpdatedAtShownId] = useState<string | null>(null)

  const filteredChains = search
    ? chains.filter(chain =>
        chain.name.toLowerCase().includes(search.toLowerCase())
      )
    : chains

  const sortedChains = [...filteredChains].sort((a, b) => {
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

  const { locale, timeZone } = Intl.DateTimeFormat().resolvedOptions()

  if (sortedChains.length > 0) {
    return (
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {sortedChains.map(chain => (
          <ChainItem
            key={chain.name}
            chain={chain}
            locale={locale}
            timeZone={timeZone}
            updatedAtShownId={updatedAtShownId}
            setUpdatedAtShownId={setUpdatedAtShownId}
          />
        ))}
      </div>
    )
  }

  if (search !== '') {
    return (
      <span className="block mx-auto text-center">
        Oops, no chains with{' '}
        <span className="text-bold text-blue-400">{sanitize(search)}</span> name
      </span>
    )
  }

  return <span className="block mx-auto text-center">Oops, no chains...</span>
}
