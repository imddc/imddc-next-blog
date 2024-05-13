'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'
import Post from '~/components/Post'
import { popUp } from '~/lib/animate'
import { posts, postType } from '~/lib/data'

interface PostPageProps {
  searchParams: {
    type: (typeof postType)[number]
  }
}

const PostPage = ({ searchParams }: PostPageProps) => {
  const { type } = searchParams

  if (type && !postType.includes(type)) {
    return <> well , false type - {type}</>
  }

  return (
    <motion.main className="p-4 md:p-6 lg:p-8" {...popUp}>
      <h1 className="mb-4 text-center text-4xl">
        All Posts {type ? `of "${type}"` : ''}
      </h1>

      <div className="p-6">
        <div
          className={clsx(
            'grid grid-cols-[repeat(2,180px)] gap-4',
            'sm:auto-rows-[180px] sm:grid-cols-[repeat(3,180px)]',
            'md:auto-rows-[180px] md:grid-cols-[repeat(4,180px)] md:p-6',
            'lg:auto-rows-[220px] lg:grid-cols-[repeat(4,220px)] lg:gap-6 lg:p-8'
          )}
        >
          {posts.map((post) => (
            <div key={post.id}>
              <Post post={post}></Post>
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  )
}

export default PostPage
