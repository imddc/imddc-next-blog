'use client'

import Header from '~/components/header'
import { SectionContextProvider } from '~/context/section-context'

export default function RootPage() {
  return (
    <SectionContextProvider>
      <Header />
    </SectionContextProvider>
  )
}
