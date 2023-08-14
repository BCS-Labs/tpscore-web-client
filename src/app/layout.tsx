import './globals.css'
import { FC, ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://tpscore.xyz/'),
  title: 'TPScore',
  description:
    'TPScore simplifies TPS Data Analysis for non-technical crypto users.',
  openGraph: {
    title: 'TPScore',
    description:
      'TPScore simplifies TPS Data Analysis for non-technical crypto users.',
    url: 'https://tpscore.xyz/',
  },
}

type Props = {
  /**
   * Content of the page
   */
  children: ReactNode
}

/**
 * Root layout of the whole app
 */
const RootLayout: FC<Props> = ({ children }) => {
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
        {children}
      </body>
    </html>
  )
}

export default RootLayout
