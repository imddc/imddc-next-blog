'use client'

import clsx from 'clsx'
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
    tags: [
      {
        name: 'tag' + id,
        link: 'tag link'
      },
      {
        name: 'tag' + id,
        link: 'tag link'
      }
    ]
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
            <div
              key={post.id}
              className={clsx(
                'group relative aspect-square flex-[12rem] shrink-0 rounded-md border border-gray-200 p-4 dark:border-gray-600/50 ',
                'bg-gradient-to-b from-gray-200 to-gray-50 ',
                'dark:from-gray-700/50 dark:to-gray-500/50'
              )}
            >
              <h1 className="line-clamp-1">{post.title}</h1>
              <div
                style={{ backgroundColor: post.color }}
                className="mb-1 h-1 w-1/3"
              />

              <section className="mb-1">
                {post.tags.map((tag) => (
                  <Link href={tag.link} key={tag.name} className="mr-2 text-xs">
                    #
                    <span className="duration-300 hover:text-gray-500 hover:underline">
                      {tag.name}
                    </span>
                  </Link>
                ))}
              </section>

              <p className="line-clamp-3 text-sm">{post.description}</p>

              <Link
                href={post.link}
                className="absolute bottom-0 right-3 opacity-0 duration-700 group-hover:bottom-3 group-hover:opacity-100"
              >
                <span className="rounded-full border border-gray-200/50 px-2 py-1 text-sm duration-700 hover:border-2">
                  read more
                </span>
              </Link>
            </div>
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
