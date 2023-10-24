import { FC, ReactNode } from 'react'

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
  return (
    <header className="flex flex-wrap lg:flex-row flex-col items-center justify-between min-h-[72px] py-2 md:px-6 px-4 bg-slate-700">
      {children}
    </header>
  )
}
