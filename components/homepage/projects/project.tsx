import { clsx } from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import React, { useRef } from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'
import { type Project } from '~/lib/types'

const isLeft = (idx: number) => idx % 2 === 0

const Project: React.FC<{ project: Project; idx: number }> = ({
  project,
  idx
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      className="flex rounded-xl bg-gray-100 border border-gray-200 mb-8 overflow-hidden group"
    >
      <div
        className={clsx('flex-1 py-10 px-7', isLeft(idx) ? 'pr-10' : 'pl-10')}
      >
        <header className="flex items-center gap-4 text-2xl mb-5">
          <span className="hover:underline cursor-pointer">
            {project.title}
          </span>
          <Link href={project.links.github} target="_blank">
            <FaGithub />
          </Link>
          <Link href={project.links.preview} target="_blank">
            <FaLink />
          </Link>
        </header>

        <div className="flex-1 mb-5 min-h-[15rem]">
          {project.description}
          <br />
          ---
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dicta
          accusamus doloribus voluptate beatae debitis molestias quibusdam sint
          illum eos doloremque soluta nihil impedit, similique nostrum officia
          quia quisquam tenetur.
        </div>

        <div>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="mr-2 px-2 py-1 rounded-full bg-gray-800 text-gray-200 text-sm cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className={clsx('flex-1 relative', isLeft(idx) ? 'order-first' : '')}
      >
        <div
          className={clsx(
            'w-[120%] h-[120%] bg-gray-500 absolute top-16 rounded-xl transition duration-500 shadow-2xl',
            isLeft(idx)
              ? 'right-10 group-hover:rotate-6'
              : 'left-10 group-hover:-rotate-6'
          )}
        />
      </div>
    </motion.div>
  )
}

export default Project
