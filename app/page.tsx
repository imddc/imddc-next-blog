'use client'

import Header from '~/components/header'
import { SectionContextProvider } from '~/context/section-context'
import { links } from '~/lib/data'

export default function RootPage() {
  return (
    <SectionContextProvider>
      <Header />

      {links.map((link) => (
        <div
          key={link.hash}
          id={link.name}
          className="h-screen w-full bg-transparent"
        >
          {link.name}
        </div>
      ))}
    </SectionContextProvider>
  )
}
