import { clsx } from 'clsx'
import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import Setting from '~/components/setting/setting'
import { SectionContextProvider } from '~/context/section-context'
import { ThemeContextProvider } from '~/context/theme-context'

import '~/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

const sans = Nunito({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-remote-sans',
  display: 'swap'
})

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
    <html lang="en" className={clsx('scroll-smooth', sans.variable)}>
      <body
        suppressHydrationWarning
        className={clsx(
          inter.className,
          'relative bg-gray-100 transition-colors dark:bg-gray-900 dark:text-gray-50/90'
        )}
      >
        <ThemeContextProvider>
          <SectionContextProvider>
            {children}
            <Setting />
          </SectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
