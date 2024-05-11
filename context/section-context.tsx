'use client'

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState
} from 'react'
import { LinkType } from '~/lib/types'

type SectionContextType = {
  link: LinkType
  time: number
}
type SectionDispatchContextType = {
  setLink: React.Dispatch<React.SetStateAction<LinkType>>
  setTime: React.Dispatch<React.SetStateAction<number>>
}

const SectionContext = createContext<SectionContextType | null>(null)
const SectionDispatchContext = createContext<SectionDispatchContextType | null>(
  null
)

export const SectionContextProvider = ({ children }: PropsWithChildren) => {
  const [link, setLink] = useState<LinkType>('intro')
  const [time, setTime] = useState(0)

  return (
    <SectionContext.Provider value={{ link, time }}>
      <SectionDispatchContext.Provider value={{ setLink, setTime }}>
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
