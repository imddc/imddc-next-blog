'use client'

import React from 'react'
import { postType } from '~/lib/data'

interface PostPageProps {
  searchParams: {
    type: (typeof postType)[number]
  }
}

const PostPage = ({ searchParams }: PostPageProps) => {
  const { type } = searchParams

  if (!postType.includes(type)) {
    return <> well , false type - {type}</>
  }

  return <div>PostPage {type}</div>
}

export default PostPage
