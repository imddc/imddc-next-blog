import { useRef } from 'react'

export const useThrottleFn = (fn: (...args: any[]) => void, delay: number = 300) => {
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
