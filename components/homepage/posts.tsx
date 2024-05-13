'use client'

import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import Post from '~/components/Post'
import { useSetHeaderInView } from '~/hooks/useSetHeaderInView'
import { popUp } from '~/lib/animate'
import { posts } from '~/lib/data'

const Posts = () => {
  const ref = useRef(null)
  useSetHeaderInView(ref, 'posts')

  return (
    <motion.section
      id="posts"
      ref={ref}
      className="relative mb-28 scroll-mt-28 overflow-hidden"
      {...popUp}
    >
      <div className="mx-auto max-w-4xl">
        <h1 className="section-title">My Posts</h1>

        <motion.div
          className="flex-center gap-4"
          drag="x"
          dragConstraints={{ left: -400, right: 400 }}
          dragTransition={{
            power: 0.2
          }}
        >
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </motion.div>
      </div>

      <span
        className={
          'pointer-events-none absolute inset-0 w-full bg-gradient-to-r ' +
          'from-gray-100/80 via-transparent to-gray-100/80 ' +
          'dark:from-gray-900/80 dark:via-gray-900/10 dark:to-gray-900/80'
        }
      />
    </motion.section>
  )
}

export default Posts
