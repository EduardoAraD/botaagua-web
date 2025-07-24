import type { ReactNode } from 'react'

interface ScreenPageProps {
  children: ReactNode
}

const ScreenPage = ({ children }: ScreenPageProps) => {
  return (
    <div className='flex w-full items-center justify-center'>
      <div className='flex w-full max-w-[1440px] flex-col'>
        {children}
      </div>
    </div>
  )
}

const SectionCol = ({ children }: ScreenPageProps) => {
  return (
    <section className='flex flex-col gap-2.5 px-5 py-10'>
      {children}
    </section>
  )
}

ScreenPage.SectionCol = SectionCol;

export default ScreenPage
