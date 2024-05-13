import { clsx } from 'clsx'
import Link from 'next/link'
import React from 'react'
import { type Post } from '~/lib/types'

interface PostProp {
  post: Post
  idx: number
}

const Post = ({ post, idx }: PostProp) => {
  return (
    <div className="post-card group relative" style={{ order: idx + 1 }}>
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
        <span className="bg:border-gray-700 rounded-full border border-gray-300 px-2 py-1 text-sm duration-700 hover:border-2">
          read more
        </span>
      </Link>
    </div>
  )
}

export default Post
