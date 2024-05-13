'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React from 'react'
import { TbArrowBack } from 'react-icons/tb'
import { popDown } from '~/lib/animate'

const PostsHeader = () => {
  const router = useRouter()

  return (
    <motion.header className="py-4" {...popDown}>
      <div
        className={clsx(
          'flex-center size-14 cursor-pointer rounded-full border p-2',
          'bg-gray-50 dark:border-gray-900 dark:bg-gray-800'
        )}
        onClick={() => router.back()}
      >
        <TbArrowBack size={24} className="" />
      </div>
    </motion.header>
  )
}

export default PostsHeader
