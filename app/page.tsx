'use client'

import {
  motion,
  useMotionValue,
  useTransform,
  type Variants
} from 'framer-motion'
import { useState } from 'react'

export default function RootPage() {
  return (
    <div className="w-screen h-screen flex-center">
      <motion.div
        className="rounded-full bg-orange-300 w-52 h-52"
        animate={{ x: [0, 100, 0] }}
      />
      <motion.circle
        className="bg-orange-300 w-52 h-52"
        cx={500}
        animate={{ cx: [null, 100, 200] }}
        transition={{ duration: 3, times: [0, 0.2, 1] }}
      />
    </div>
  )
}
