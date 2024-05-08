'use client'

import Header from '~/components/header'
import Skills from '~/components/skills'
import { SectionContextProvider } from '~/context/section-context'

export default function RootPage() {
  return (
    <SectionContextProvider>
      <Header />
      <Skills />
    </SectionContextProvider>
  )
}
