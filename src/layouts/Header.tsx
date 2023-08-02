import { FC, PropsWithChildren } from 'react'

export const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="flex flex-wrap md:flex-row flex-col items-center justify-between min-h-[72px] py-2 md:px-6 px-4 bg-slate-700">
      {children}
    </header>
  )
}
