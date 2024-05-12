'use client'

import { useEffect, useRef, type RefObject } from 'react'
import { useSectionContext } from '~/context/section-context'
import { links } from '~/lib/data'

const useThrottleFn = (fn: (...args: any[]) => void, delay: number) => {
  const timer = useRef<NodeJS.Timeout | null>(null)
  return (...args: any[]) => {
    if (timer.current) {
      return
    }
    timer.current = setTimeout(() => {
      fn(...args)
      timer.current = null
    }, delay)
  }
}

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

      console.log('jonh')

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
