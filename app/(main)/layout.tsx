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
    <html lang="en" className={clsx('scroll-smooth')}>
      <body
        suppressHydrationWarning
        className={clsx(
          inter.className,
          'relative bg-gray-100 dark:bg-gray-900 dark:text-gray-50/90'
        )}
      >
        <ThemeContextProvider>
          <SectionContextProvider>
            <div className="absolute -top-24 right-44 -z-10 size-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem] dark:bg-[#5b3b3c]"></div>
            <div className="absolute -top-4 left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:-left-60 2xl:-left-20 dark:bg-[#433f68]"></div>

            <Header />
            <main className="scroll-mt-20">{children}</main>

            <Setting />
          </SectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
