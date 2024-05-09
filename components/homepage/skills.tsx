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
