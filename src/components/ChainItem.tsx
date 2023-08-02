'use client'

import { FC, useState } from 'react'
import { ChainData } from '@/models'
import { ChainLogo } from './ChainLogo'

type Props = {
  chain: ChainData
  locale: string
  timeZone: string
}

export const ChainItem: FC<Props> = ({ chain, locale, timeZone }) => {
  const [isUpdatedAtShown, setIsUpdateAtShown] = useState(false)

  const updatedAt = `Updated at: ${new Intl.DateTimeFormat(locale, {
    dateStyle: 'medium',
    timeStyle: 'medium',
    timeZone,
  }).format(new Date(chain.updatedAt))}`

  return (
    <button
      className="relative button min-w-[200px]"
      onClick={() => {
        setIsUpdateAtShown(prevIsUpdatedAtShown => !prevIsUpdatedAtShown)
      }}
      onMouseLeave={() => {
        setIsUpdateAtShown(false)
      }}
      onBlur={() => {
        setIsUpdateAtShown(false)
      }}
    >
      <ChainLogo chain={chain.name} />

      <span className="whitespace-nowrap ml-2">
        {`${chain.tps.toFixed(2)} tx/s`}
      </span>

      {isUpdatedAtShown && (
        <div className="absolute inset-0 z-[1] flex items-center justify-center bg-slate-700 rounded-lg text-xs text-center whitespace-nowrap">
          {updatedAt}
        </div>
      )}
    </button>
  )
}
