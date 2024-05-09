'use client'

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState
} from 'react'
import { links } from '~/lib/data'

type LinkType = (typeof links)[number]['name']
type SectionContextType = {
  link: LinkType
}
type SectionDispatchContextType = {
  setLink: React.Dispatch<React.SetStateAction<LinkType>>
}

const SectionContext = createContext<SectionContextType | null>(null)
const SectionDispatchContext = createContext<SectionDispatchContextType | null>(
  null
)

export const SectionContextProvider = ({ children }: PropsWithChildren) => {
  const [link, setLink] = useState<LinkType>('intro')

  return (
    <SectionContext.Provider value={{ link }}>
      <SectionDispatchContext.Provider value={{ setLink }}>
        {children}
      </SectionDispatchContext.Provider>
    </SectionContext.Provider>
  )
}

export const useSectionContext = () => {
  const sectionContext = useContext(SectionContext)
  const sectionDispatchContext = useContext(SectionDispatchContext)
  if (!sectionContext) {
    throw new Error(
      'useSectionContext must be used within a SectionContextProvider'
    )
  }
  if (!sectionDispatchContext) {
    throw new Error(
      'useSectionContextDispatch must be used within a SectionContextDispatchProvider'
    )
  }

  return {
    sectionContext,
    sectionDispatchContext
  }
}
