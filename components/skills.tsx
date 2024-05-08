import { clsx } from 'clsx'
import React, { useEffect } from 'react'
import { useSectionContext } from '~/context/section-context'

const sections = ['blog', 'about', 'post', 'panda', 'address']

const Skills = () => {
  const { sectionDispatchContext } = useSectionContext()

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target.id)
        if (entry.target.id === 'post') {
          sectionDispatchContext.setLink('hobby')
        } else if (entry.target.id === 'about') {
          sectionDispatchContext.setLink('skills')
        } else {
          return
        }
      }
    })
  })

  useEffect(() => {
    const dom = document.getElementById('post')
    dom && observer.observe(dom)
  }, [])

  useEffect(() => {
    const dom = document.getElementById('about')
    dom && observer.observe(dom)
  }, [])

  return (
    <div>
      {sections.map((section, idx) => (
        <div
          id={section}
          key={section}
          className={clsx('h-screen border-b-2', {
            'bg-red-500': idx === 2
          })}
        >
          {section}
        </div>
      ))}
    </div>
  )
}

export default Skills
