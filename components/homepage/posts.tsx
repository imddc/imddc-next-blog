'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { popUp } from '~/lib/animate'

const Posts = () => {
  return (
    <motion.section
      id="posts"
      className="max-w-[56rem] mx-auto mb-28"
      {...popUp}
    >
      <h1 className="section-title">My Posts</h1>
      <section>this is posts content</section>
    </motion.section>
  )
}

export default Posts
