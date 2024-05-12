'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useRef } from 'react'
import { useSetHeaderInView } from '~/hooks/useSetHeaderInView'
import { popUp } from '~/lib/animate'

const createPost = (id: number) => {
  return {
    id: id,
    title: 'title' + id,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit fugit quaerat cum, unde fuga suscipit repellat, velit in quas nesciunt minima asperiores, ex aspernatur neque ratione eaque culpa est obcaecati.' +
      id,
    color: '#f86',
    link: 'link' + id,
    tags: ['tag1', 'tag2']
  }
}

const posts = Array.from({ length: 9 }).map((_, i) => createPost(i))

const Posts = () => {
  const ref = useRef(null)
  useSetHeaderInView(ref, 'posts')

  return (
    <motion.section
      id="posts"
      ref={ref}
      className="mb-28 relative overflow-hidden scroll-mt-28"
      {...popUp}
    >
      <div className="max-w-[56rem] mx-auto">
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
            <div
              key={post.id}
              className={
                'flex-[12rem] aspect-square flex-shrink-0 rounded-md p-4 relative group border border-gray-200 bg-gradient-to-b from-gray-200 to-gray-50'
              }
            >
              <h1 className="line-clamp-1">{post.title}</h1>
              <div
                style={{ backgroundColor: post.color }}
                className="h-1 w-1/3"
              ></div>
              {post.tags.map((tag) => (
                <Link href={'*'} key={tag} className="mr-2 text-sm">
                  #
                  <span className="hover:underline hover:text-gray-500 duration-300">
                    {tag}
                  </span>
                </Link>
              ))}

              <p className="text-ellipsis text-wrap line-clamp-3">
                {post.description}
              </p>

              <Link
                href={'*'}
                className="absolute bottom-0 right-3 group-hover:bottom-3 opacity-0 group-hover:opacity-100 rounded-full px-2 duration-700"
              >
                <span className="border-2 border-gray-200 rounded-full px-2 py-1 hover:border-2 ">
                  read more
                </span>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>

      <span className="absolute w-full inset-0 pointer-events-none bg-gradient-to-r from-gray-50 md:from-5% via-transparent to-gray-50 md:to-95% dark:bg-gray-50/50" />
    </motion.section>
  )
}

export default Posts
