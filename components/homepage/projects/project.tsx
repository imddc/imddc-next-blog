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
      className="group mb-8 flex overflow-hidden rounded-xl border border-gray-200 bg-gray-200/50 transition-colors hover:bg-gray-300/50 dark:border-gray-800 dark:bg-gray-800/50 dark:hover:bg-gray-700/50"
    >
      <div
        className={clsx('flex-1 px-7 py-10', isLeft(idx) ? 'pr-10' : 'pl-10')}
      >
        <header className="mb-5 flex items-center gap-4 text-xl">
          <span className="cursor-pointer hover:underline">
            {project.title}
          </span>
          <Link href={project.links.github} target="_blank">
            <FaGithub />
          </Link>
          <Link href={project.links.preview} target="_blank">
            <FaLink />
          </Link>
        </header>
        <div className="mb-5 flex-1 md:min-h-60">{project.description}</div>
        <div>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="mr-2 cursor-pointer rounded-full bg-gray-800 px-2 py-1 text-center text-xs text-gray-200 transition-colors duration-500 hover:bg-gray-600 dark:bg-gray-700/50 dark:text-gray-50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* right */}
      <div
        className={clsx(
          'relative hidden flex-1 md:block',
          isLeft(idx) && 'order-first'
        )}
      >
        <div
          className={clsx(
            'absolute top-16 size-[120%] rounded-xl bg-gray-500 shadow-2xl duration-500',
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
