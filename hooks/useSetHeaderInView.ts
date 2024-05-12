'use client'

import { useEffect, type RefObject } from 'react'
import { useSectionContext } from '~/context/section-context'
import { useThrottleFn } from '~/hooks/useThrottle'
import { links } from '~/lib/data'

export const useSetHeaderInView = (
  ref: RefObject<HTMLDivElement>,
  section: (typeof links)[number]['name']
) => {
  const { sectionDispatchContext, sectionContext } = useSectionContext()

  const handleScroll = useThrottleFn(() => {
    const scrollTop = document.documentElement.scrollTop
    const offsetTop = ref.current?.offsetTop
    const distance = scrollTop - offsetTop!

    // 120 (112) 为 scroll-margin-top 的值
    if (distance >= -150 && distance <= 120) {
      if (Date.now() - sectionContext.time < 1000) {
        // too soon
        return
      }

      sectionDispatchContext.setLink(section)
    }
  }, 100)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [ref, section, sectionContext, sectionDispatchContext, handleScroll])
}
