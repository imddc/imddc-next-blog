import React from 'react'
import PostsHeader from '~/components/posts/header'

interface PostLayoutProps extends React.PropsWithChildren {}

const PostLayout = ({ children }: PostLayoutProps) => {
  return (
    <div className="flex-col-center pt-20">
      <PostsHeader />
      {children}
    </div>
  )
}

export default PostLayout
