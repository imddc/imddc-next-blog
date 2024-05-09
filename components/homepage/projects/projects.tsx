'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { popUp } from '~/lib/animate'
import { projects } from '~/lib/data'

import Project from './project'

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
          <Project key={project.title} project={project} idx={idx} />
        ))}
      </section>
    </motion.section>
  )
}

export default Projects
