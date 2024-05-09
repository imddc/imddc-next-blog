'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { popUp } from '~/lib/animate'

const Intro = () => {
  return (
    <motion.section id="intro" {...popUp}>
      <div>motion</div>
      <div>intro</div>
    </motion.section>
  )
}

export default Intro
