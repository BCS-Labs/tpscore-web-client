'use client'

import { Dispatch, FC, SetStateAction, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { ChainData } from '@/models'
import { ChainLogo } from './ChainLogo'

type Props = {
  chain: ChainData
  locale: string
  timeZone: string
  updatedAtShownId: string | null
  setUpdatedAtShownId: Dispatch<SetStateAction<string | null>>
}

export const ChainItem: FC<Props> = ({
  chain,
  locale,
  timeZone,
  updatedAtShownId,
  setUpdatedAtShownId,
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useOnClickOutside(buttonRef, () => {
    setUpdatedAtShownId(null)
  })

  const updatedAt = `Updated at: ${new Intl.DateTimeFormat(locale, {
    dateStyle: 'medium',
    timeStyle: 'medium',
    timeZone,
  }).format(new Date(chain.updatedAt))}`

  return (
    <button
      ref={buttonRef}
      className="relative button min-w-[200px]"
      onClick={() => {
        setUpdatedAtShownId(prevUpdatedAtShownId => {
          if (prevUpdatedAtShownId === chain.name) {
            return null
          }

          return chain.name
        })
      }}
    >
      <ChainLogo chain={chain.name} />

      <span className="whitespace-nowrap ml-2">
        {`${chain.tps.toFixed(2)} tx/s`}
      </span>

      {updatedAtShownId === chain.name && (
        <div className="absolute inset-0 z-[1] flex items-center justify-center bg-slate-700 rounded-lg text-xs text-center whitespace-nowrap">
          {updatedAt}
        </div>
      )}
    </button>
  )
}
