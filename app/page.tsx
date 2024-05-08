'use client'

import Header from '~/components/header'
import { SectionContextProvider } from '~/context/section-context'
import { links } from '~/lib/data'

export default function RootPage() {
  return (
    <SectionContextProvider>
      <Header />
    </SectionContextProvider>
  )
}
