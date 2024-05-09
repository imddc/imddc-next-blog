'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { popUp, skillItemVariants } from '~/lib/animate'
import { skills } from '~/lib/data'

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="max-w-[56rem] mx-auto mb-28 scroll-mt-28"
      {...popUp}
    >
      <h2 className="section-title">My Skills</h2>

      <main className="flex-center flex-wrap gap-4">
        {skills.map((skill, idx) => (
          <motion.span
            key={skill}
            className="p-4 py-2 border border-white border-opacity-40 bg-white rounded-md cursor-pointer"
            {...skillItemVariants(idx)}
          >
            {skill}
          </motion.span>
        ))}
      </main>
    </motion.section>
  )
}

export default Skills
