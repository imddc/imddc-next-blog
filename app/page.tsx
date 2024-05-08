'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const links = ['home', 'experience', 'skill', 'hobby', 'contact'].map(
  (item) => ({
    name: item,
    hash: `#${item}`
  })
)

export default function RootPage() {
  const [activeSection, setActiveSection] = useState(links[0].name)
  function handleClickItem(section: string) {
    setActiveSection(section)
  }

  return (
    <>
      <motion.div
        className="fixed left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-40
        shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[30rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      />
      <nav className="flex fixed top-[0.8rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.9rem] sm:h-[initial] sm:py-0">
        <motion.ul className="flex items-center gap-4 text-gray-500">
          {links.map((link) => (
            <motion.li
              className="relative h-3/4 break-keep flex-center"
              key={link.name}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => handleClickItem(link.name)}
            >
              <Link
                href={link.hash}
                className={clsx(
                  'relative p-2 z-999 font-bold hover:text-gray-200 transition',
                  {
                    'text-gray-800 hover:text-gray-800':
                      activeSection === link.name
                  }
                )}
                onClick={() => handleClickItem(link.name)}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.div
                    className="absolute inset-0 bg-gray-100 rounded-full -z-10"
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
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
