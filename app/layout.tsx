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
      <body className={inter.className}>
        <SectionContextProvider>
          <Header />
          {children}
        </SectionContextProvider>
      </body>
    </html>
  )
}
