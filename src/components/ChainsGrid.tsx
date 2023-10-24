'use client'

import { FC, useState } from 'react'
import { sanitize } from 'dompurify'
import { Chain } from '@/models'
import { useChainsFilterStore } from '@/store/chainsFilter'
import { sortChains } from '@/utils/sortChains'
import { filterChains } from '@/utils/filterChains'
import { ChainItem } from './ChainItem'

type Props = {
  /**
   * Array of chains
   */
  chains: Chain[]
}

/**
 * Renders grid with chain items or `no chains` messages
 */
export const ChainsGrid: FC<Props> = ({ chains }) => {
  const { search, sort, showZeroTps } = useChainsFilterStore()
  const [updatedAtShownId, setUpdatedAtShownId] = useState<string | null>(null)

  const filteredChainsByZeroTps = showZeroTps
    ? chains
    : chains.filter(chain => chain.tps >= 0.0001)

  const filteredChains = filterChains(filteredChainsByZeroTps, search)

  const sortedChains = sortChains(filteredChains, sort)

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
