import './globals.css'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TPScore',
  description:
    'TPScore simplifies TPS Data Analysis for non-technical crypto users.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className="min-h-screen bg-gradient-to-b from-gray-700 to-slate-800 text-blue-100"
    >
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📊</text></svg>"
        />
      </head>

      <body className={clsx(inter.className, 'min-h-screen flex flex-col')}>
        {children}
      </body>
    </html>
  )
}
