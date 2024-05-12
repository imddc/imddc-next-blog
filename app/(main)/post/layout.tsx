import React from 'react'

interface PostLayoutProps extends React.PropsWithChildren {}

const PostLayout = ({ children }: PostLayoutProps) => {
  return <>{children}</>
}

export default PostLayout
