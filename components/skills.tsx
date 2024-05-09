'use client'

import { clsx } from 'clsx'
import React, { useEffect } from 'react'
import { skills } from '~/lib/data'

const Skills = () => {
  return (
    <section className="max-w-[56rem] mx-auto mb-10">
      <h2 className="text-3xl mb-10 text-center">My Skills</h2>

      <main className="flex-center flex-wrap gap-4">
        {skills.map((skill) => (
          <span
            className="p-4 py-2 border border-white border-opacity-40 bg-white rounded-md cursor-pointer"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </main>
    </section>
  )
}

export default Skills
