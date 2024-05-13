import React from 'react'
import { TbArrowBack } from 'react-icons/tb'

interface PostLayoutProps extends React.PropsWithChildren {}

const PostLayout = ({ children }: PostLayoutProps) => {
  return (
    <div className="flex-col-center pt-20">
      <header className=" py-4">
        <div className="flex-center size-14 rounded-full border bg-gray-50 p-2">
          <TbArrowBack size={24} className="" />
        </div>
      </header>
      {children}
    </div>
  )
}

export default PostLayout
