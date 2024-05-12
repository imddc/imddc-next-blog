import { clsx } from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '~/components/header'
import Setting from '~/components/setting/setting'
import { SectionContextProvider } from '~/context/section-context'
import { ThemeContextProvider } from '~/context/theme-context'

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
    <ThemeContextProvider>
      <html lang="en" className="scroll-smooth theme-light">
        <body
          suppressHydrationWarning
          className={clsx(inter.className, 'relative dark:bg-[--black]')}
        >
          <div className="bg-[#fbe2e3] dark:bg-[#165e7c] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
          <div className="bg-[#dbd7fb] dark:bg-[#853414] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

          <SectionContextProvider>
            <Header />
            <main className="scroll-mt-20">{children}</main>

            <Setting />
          </SectionContextProvider>
        </body>
      </html>
    </ThemeContextProvider>
  )
}
