import { AnimationProps, MotionProps } from 'framer-motion'

export const headerBack: MotionProps = {
  initial: { y: -100, x: '-50%', opacity: 0 },
  animate: { y: 0, x: '-50%', opacity: 1 }
}
export const headerActive = (layoutId: string): MotionProps => ({
  layoutId,
  transition: {
    type: 'spring',
    stiffness: 400,
    damping: 30
  }
})

export const introAvatarHover: MotionProps = {
  whileHover: { rotate: 30, scale: 1.4 },
  transition: { duration: 0.7, stiffness: 125 }
}

export const popUp: AnimationProps = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 }
}
export const popDown: AnimationProps = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 }
}

export const skillItemVariants = (idx: number): MotionProps => ({
  custom: idx,
  initial: 'initial',
  variants: {
    initial: {
      y: 200,
      opacity: 0
    },
    animate: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.05 * index
      }
    })
  },
  viewport: { once: true },
  whileInView: 'animate'
})
