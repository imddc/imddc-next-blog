'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { skills } from '~/lib/data'

const Skills = () => {
  return (
    <motion.section
      className="max-w-[56rem] mx-auto mb-10"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <h2 className="section-title">My Skills</h2>

      <main className="flex-center flex-wrap gap-4">
        {skills.map((skill, idx) => (
          <motion.span
            className="p-4 py-2 border border-white border-opacity-40 bg-white rounded-md cursor-pointer"
            initial={{
              y: 200,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: idx * 0.02
              }
            }}
            viewport={{ once: true }}
            whileInView={'animate'}
            key={skill}
          >
            {skill}
          </motion.span>
        ))}
      </main>
    </motion.section>
  )
}

export default Skills
