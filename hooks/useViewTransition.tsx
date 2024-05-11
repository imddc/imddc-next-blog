import { useState } from 'react'

export const useViewTransition = (fn: (...args: any[]) => void) => {
  const [isViewTransition, setIsViewTransition] = useState(false)

  let viewTransitionFinish: undefined | (() => void)
  let viewTransitionAbort: undefined | (() => void)

  const supportViewTransition =
    document !== undefined && 'startViewTransition' in document

  if (!supportViewTransition) {
    setIsViewTransition(false)
    console.warn('Your browser does not support view transition')
    return
  }

  setIsViewTransition(true)

  const promise = new Promise<void>((resolve, reject) => {
    viewTransitionFinish = resolve
    viewTransitionAbort = reject
  })

  // @ts-expect-error in use
  const transition = document.startViewTransition(() => {
    try {
      fn()
      viewTransitionFinish?.()
    } catch (error) {
      viewTransitionAbort?.()
    }
    return promise
  })

  transition.finished.then(() => {
    viewTransitionFinish = undefined
    viewTransitionAbort = undefined
  })

  return {
    isViewTransition,
    transition
  }
}
