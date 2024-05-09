import { clsx } from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '~/components/header'
import { SectionContextProvider } from '~/context/section-context'

import '~/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Imddc',
  description: "Imddc's blog"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={clsx(inter.className, 'relative')}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <SectionContextProvider>
          <Header />
          {children}
        </SectionContextProvider>
      </body>
    </html>
  )
}
