'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { useSectionContext } from '~/context/section-context'
import {
  headerActiveSection,
  headerBackgroundPopDown,
  popDown,
  popUp
} from '~/lib/animate'
import { links } from '~/lib/data'

const Header = () => {
  const { sectionContext, sectionDispatchContext } = useSectionContext()

  const setActiveSection = (section: (typeof links)[number]['name']) => {
    if (sectionContext.link === section) return
    sectionDispatchContext.setLink(section)
    sectionDispatchContext.setTime(Date.now())
  }

  return (
    <>
      <motion.div
        className="fixed left-1/2 z-40 h-[4.5rem] w-full -translate-x-1/2 rounded-none border border-gray-50/40 bg-gray-50/50
         shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-96 sm:rounded-full dark:border-gray-700/40 dark:bg-gray-950/70"
        {...headerBackgroundPopDown}
      />
      <nav className="fixed left-1/2 top-[0.8rem] z-40 flex h-12 -translate-x-1/2 py-2 sm:top-[2.1rem] sm:h-[initial] sm:py-0">
        <motion.ul className="flex items-center gap-4 text-gray-500">
          {links.map((link) => (
            <motion.li
              className="flex-center relative h-3/4 break-keep"
              key={link.name}
              {...popDown}
            >
              <Link
                href={link.hash}
                className={clsx(
                  'relative px-2 py-1 font-bold text-gray-500 transition hover:text-gray-800 dark:hover:text-gray-200',
                  {
                    'text-gray-800 hover:text-gray-800 dark:hover:text-gray-800':
                      sectionContext.link === link.name
                  }
                )}
                onClick={() => setActiveSection(link.name)}
              >
                <span className="relative z-50">{link.name}</span>
                {sectionContext.link === link.name && (
                  <motion.div
                    className={clsx(
                      'absolute inset-0 rounded-full',
                      'bg-gray-50'
                    )}
                    {...headerActiveSection('selectedId')}
                    {...popUp}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </>
  )
}

export default Header
