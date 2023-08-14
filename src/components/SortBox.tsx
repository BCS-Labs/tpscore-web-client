'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { ChainsFilterSort, useChainsFilterStore } from '@/store/chainsFilter'

/**
 * Renders styled select with proper focus management
 */
export const SortBox = () => {
  const { sort, setSort } = useChainsFilterStore()
  const [isSelectFocused, setIsSelectFocused] = useState(false)

  return (
    <div
      className={clsx(
        'relative md:w-44 w-40 flex items-center justify-start bg-slate-700 border-[1px] border-slate-600 rounded-lg hover:border-slate-500',
        { ['!border-slate-500']: isSelectFocused }
      )}
    >
      <div className="absolute md:w-[36px] w-[32px] inset-y-0 left-0 flex items-center justify-center select-none pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="md:w-[24px] md:h-[24px] w-[20px] h-[20px] text-slate-400"
        >
          <path
            fill="currentColor"
            d="M10 18h4v-2h-4v2ZM3 6v2h18V6H3Zm3 7h12v-2H6v2Z"
          />
        </svg>
      </div>

      <select
        id="sortBy"
        className="flex-1 md:pl-[34px] pl-[30px] py-2 bg-transparent placeholder:text-slate-400 outline-none text-slate-400 text-base cursor-pointer appearance-none"
        value={sort}
        onChange={e => {
          setSort(e.target.value as ChainsFilterSort)
        }}
        onFocus={() => {
          setIsSelectFocused(true)
        }}
        onBlur={() => {
          setIsSelectFocused(false)
        }}
      >
        <option disabled>Sort By</option>
        <option value="alphabetically">Alphabetically</option>
        <option value="tps-desc">Highest tps</option>
        <option value="tps-asc">Lowest tps</option>
      </select>

      <div className="absolute md:w-[36px] w-[32px] inset-y-0 right-0 flex items-center justify-center select-none pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="md:w-[24px] md:h-[24px] w-[20px] h-[20px] text-slate-400"
        >
          <path
            fill="currentColor"
            d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"
          />
        </svg>
      </div>
    </div>
  )
}
