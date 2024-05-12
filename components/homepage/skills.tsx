'use client'

import { motion, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { useSetHeaderInView } from '~/hooks/useSetHeaderInView'
import { popUp, skillItemVariants } from '~/lib/animate'
import { skills } from '~/lib/data'

const Skills = () => {
  const ref = useRef(null)
  useSetHeaderInView(ref, 'skills')

  return (
    <motion.section
      id="skills"
      ref={ref}
      className="mx-auto mb-28 max-w-4xl scroll-mt-28"
      {...popUp}
    >
      <h2 className="section-title">My Skills</h2>

      <main className="flex-center flex-wrap gap-4">
        {skills.map((skill, idx) => (
          <motion.span
            key={skill}
            className="cursor-pointer rounded-md border border-gray-50 bg-gray-50 p-4 py-2 dark:border-gray-900/40 dark:bg-gray-600/50"
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
