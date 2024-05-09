'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'
import { popUp } from '~/lib/animate'
import { projects } from '~/lib/data'

const isLeft = (idx: number) => idx % 2 === 0

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="max-w-[56rem] mx-auto mb-28"
      {...popUp}
    >
      <h1 className="section-title">My Projects</h1>
      <section>
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className="flex rounded-md bg-gray-100 border border-gray-200 mb-8 overflow-hidden group"
          >
            <div className="flex-1 py-10 px-7">
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
              className={clsx(
                'flex-1 relative',
                isLeft(idx) ? 'order-first' : ''
              )}
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
          </div>
        ))}
      </section>
    </motion.section>
  )
}

export default Projects
