'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'
import { popUp } from '~/lib/animate'

const projects = [
  {
    title: 'waterfall-vue',
    description: 'an easy to use waterfall component for vue3.',
    links: [
      {
        icon: <FaGithub />,
        link: 'https://github.com/imddc/vue-waterfall'
      },
      {
        icon: <FaLink />,
        link: 'https://vue-waterfall.vercel.app'
      }
    ],
    tags: ['vue3', 'TypeScript', 'UnoCSS']
  },
  {
    title: 'mouse-animate',
    description:
      'Provide an animation that follows the mouse, simple and easy to use, no need for configuration.',
    links: [
      {
        icon: <FaGithub />,
        link: 'https://github.com/imddc/mouse-animation'
      },
      {
        icon: <FaLink />,
        link: 'https://vue-waterfall.vercel.app'
      }
    ],
    tags: ['vue3', 'TypeScript', 'UnoCSS']
  }
]

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="max-w-[56rem] mx-auto mb-28"
      {...popUp}
    >
      <h1 className="section-title">My Projects</h1>
      <section>
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex rounded-md bg-gray-100 border border-gray-200 mb-8 overflow-hidden group"
          >
            <div className="flex-1 py-10 px-7">
              <header className="flex items-center gap-2 text-2xl mb-5">
                <span className="hover:underline cursor-pointer">
                  {project.title}
                </span>
                {project.links.map((link) => (
                  <Link
                    key={link.link}
                    href={link.link}
                    target="_blank"
                    className="ml-2"
                  >
                    {link.icon}
                  </Link>
                ))}
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
            <div className="flex-1 relative">
              <div className="w-[120%] h-[120%] bg-gray-500 absolute inset-10 rounded-xl group-hover:-rotate-6 transition duration-500" />
            </div>
          </div>
        ))}
      </section>
    </motion.section>
  )
}

export default Projects
