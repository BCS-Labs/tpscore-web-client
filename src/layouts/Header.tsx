'use client'
import { FC, ReactNode, useState } from 'react'
import { Modal } from '@/components/Modal'

type Props = {
  /**
   * Content of the header
   */
  children: ReactNode
}

/**
 * Renders header of the whole app
 */
export const Header: FC<Props> = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <>
      <header className="flex flex-col min-h-[72px] py-2 md:px-6 px-4 bg-slate-700">
        <div className="flex flex-wrap lg:flex-row flex-col items-center justify-between mb-3">
          {children}
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-center justify-start space-x-1 sm:text-lg text-base text-red-400">
            <span>
              TPScore was merged into the Chainspect platform, for up to date
              metrics visit:{' '}
              <span className="inline-flex items-center justify-start space-x-1">
                <a
                  href="https://chainspect.app/"
                  className="outline-none underline hover:text-white"
                >
                  chainspect.app
                </a>

                <button
                  className="hover:text-white focus-visible:text-white outline-none"
                  onClick={() => {
                    setIsOpened(prevIsOpened => !prevIsOpened)
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                </button>
              </span>
            </span>
          </div>
        </div>
      </header>

      <Modal
        isOpen={isOpened}
        onClose={() => {
          setIsOpened(false)
        }}
      />
    </>
  )
}
