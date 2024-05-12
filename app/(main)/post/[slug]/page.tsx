import React from 'react'

interface PostSlugPageProps {
  params: { slug: string }
}

const PostSlugPage = ({ params: { slug } }: PostSlugPageProps) => {
  return <div>PostSlugPage {slug}</div>
}

export default PostSlugPage
