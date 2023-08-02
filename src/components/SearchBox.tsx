'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { useChainsFilterStore } from '@/store/chainsFilter'

export const SearchBox = () => {
  const { search, setSearch } = useChainsFilterStore()
  const [isInputFocused, setIsInputFocused] = useState(false)

  return (
    <div
      className={clsx(
        'relative md:w-44 w-40 flex items-center justify-start bg-slate-700 border-[1px] border-slate-600 rounded-lg hover:border-slate-500',
        { ['!border-slate-500']: isInputFocused }
      )}
    >
      <div className="absolute md:w-[36px] w-[32px] inset-y-0 left-0 flex items-center justify-center select-none pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="md:w-[24px] md:h-[24px] w-[20px] h-[20px] text-slate-400"
        >
          <path
            fill="currentColor"
            d="m18 16.6 4.3 4.3-1.4 1.4-4.3-4.3a9 9 0 1 1 1.4-1.4Zm-2-.7A7 7 0 0 0 11 4a7 7 0 1 0 4.9 12l.1-.1Z"
          />
        </svg>
      </div>

      <input
        type="search"
        placeholder="Search chains"
        className="flex-1 md:pl-[34px] pl-[30px] py-2 bg-transparent placeholder:text-slate-400 outline-none text-slate-300 text-base"
        spellCheck={false}
        size={1}
        value={search}
        onChange={e => {
          setSearch(e.target.value)
        }}
        onFocus={() => {
          setIsInputFocused(true)
        }}
        onBlur={() => {
          setIsInputFocused(false)
        }}
      />
    </div>
  )
}
