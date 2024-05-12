'use client'

import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { useSetHeaderInView } from '~/hooks/useSetHeaderInView'
import { popUp } from '~/lib/animate'
import { projects } from '~/lib/data'

import Project from './project'

const Projects = () => {
  const ref = useRef(null)
  useSetHeaderInView(ref, 'projects')

  return (
    <motion.section
      id="projects"
      ref={ref}
      className="mx-auto mb-28 max-w-3xl scroll-mt-28"
      {...popUp}
    >
      <h1 className="section-title">My Projects</h1>
      <section className="px-4">
        {projects.map((project, idx) => (
          <Project key={project.title} project={project} idx={idx} />
        ))}
      </section>
    </motion.section>
  )
}

export default Projects
