import { FC, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useOnClickOutside } from 'usehooks-ts'

type ModalProps = {
  /**
   * Whether Modal is opened or not
   */
  isOpen: boolean
  /**
   * Close handler
   */
  onClose: () => void
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const link = useRef<HTMLAnchorElement | null>(null)

  useOnClickOutside(ref, onClose)

  useEffect(() => {
    link.current?.focus()

    const handler = (ev: KeyboardEvent) => {
      console.log(ev.code)

      if (ev.code === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handler)

    return () => {
      window.removeEventListener('keydown', handler)
    }
  })

  if (!isOpen) {
    return null
  }

  return createPortal(
    <div
      className="fixed left-0 right-0 top-0 z-[4] flex h-full max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-800/70 p-4 md:inset-0"
      role="dialog"
    >
      <div className="relative max-h-full w-full max-w-2xl" ref={ref}>
        <div className="relative rounded-lg bg-gray-700 shadow">
          <div className="flex items-center justify-between rounded-t border-b border-gray-600 p-3 sm:p-4">
            <h3 className="text-xl font-bold text-white">
              Why switch to Chainspect?
            </h3>

            <button
              type="button"
              className="0 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-600 hover:text-white focus-visible:bg-gray-600 focus-visible:text-white"
              onClick={e => {
                e.preventDefault()
                onClose()
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>

              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-3 xs:p-6">
            <p className="mb-3">
              TPScore was merged into Chainspect. Now you can directly compare
              Polkadot Parachains with other L1s at{' '}
              <a
                href="https://chainspect.app/"
                className="outline-none hover:text-white focus-visible:text-white underline"
                ref={link}
              >
                chainspect.app
              </a>
              .
            </p>

            <a href="https://chainspect.app/" className="outline-none">
              <img
                src="https://raw.githubusercontent.com/fromaline/chainspect_app/master/images/product_hunt_3.png"
                alt="Chainspect Interface"
                loading="lazy"
                width="648"
                height="388"
              />
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
