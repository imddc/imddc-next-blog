import { clsx } from 'clsx'
import Link from 'next/link'
import React from 'react'
import { type Post } from '~/lib/types'

interface PostProp {
  post: Post
}

const Post = ({ post }: PostProp) => {
  return (
    <div
      key={post.id}
      className={clsx(
        'group relative aspect-square flex-[12rem] shrink-0 rounded-md border border-gray-200 p-4 dark:border-gray-600/50 ',
        'bg-gradient-to-b from-gray-200 to-gray-50 ',
        'dark:from-gray-700/50 dark:to-gray-500/50'
      )}
    >
      <h1 className="line-clamp-1">{post.title}</h1>
      <div style={{ backgroundColor: post.color }} className="mb-1 h-1 w-1/3" />

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
  )
}

export default Post
