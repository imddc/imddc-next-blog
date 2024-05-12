import React, { PropsWithChildren } from 'react'
import Header from '~/components/header'

const HomepageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="absolute -top-24 right-44 -z-10 size-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem] dark:bg-[#5b3b3c]"></div>
      <div className="absolute -top-4 left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:-left-60 2xl:-left-20 dark:bg-[#433f68]"></div>

      <Header />
      <main className="scroll-mt-20">{children}</main>
    </>
  )
}

export default HomepageWrapper
