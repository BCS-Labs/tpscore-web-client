'use client'

import clsx from 'clsx'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function GlobalError({
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <html
      lang="en"
      className="min-h-screen bg-gradient-to-b from-gray-700 to-slate-800 text-blue-100"
    >
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔍</text></svg>"
        />
      </head>

      <body className={clsx(inter.className, 'min-h-screen flex flex-col')}>
        <div className="min-h-screen flex items-center justify-center container px-3">
          <div>
            <h2 className="mb-5 text-center text-3xl">Something went wrong!</h2>
            <button className="button mx-auto" onClick={() => reset()}>
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
