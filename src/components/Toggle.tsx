'use client'

import { useChainsFilterStore } from '@/store/chainsFilter'

export const Toggle = () => {
  const { showZeroTps, setShowZeroTps } = useChainsFilterStore()

  return (
    <label className="flex items-center cursor-pointer">
      <span className="mr-3 text-slate-400 text-base whitespace-nowrap">
        {showZeroTps ? 'All' : 'Non-zero'}
      </span>

      <div className="relative">
        <input
          type="checkbox"
          value=""
          checked={showZeroTps}
          onChange={() => {
            setShowZeroTps(!showZeroTps)
          }}
          className="sr-only peer"
        />

        <div className="w-11 h-6 rounded-full peer bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-slate-500" />
      </div>
    </label>
  )
}
