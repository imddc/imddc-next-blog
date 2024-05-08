'use client'

import { clsx } from 'clsx'
import { motion, type Variants } from 'framer-motion'
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
        className="fixed top-5 left-1/2 -translate-x-1/2 bg-black p-2 rounded-full"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      >
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
                className={clsx(
                  'relative p-2 z-999 font-bold hover:text-gray-200 transition',
                  {
                    'text-gray-800 hover:text-gray-800':
                      activeSection === link.name
                  }
                )}
                href={link.hash}
                onClick={() => setActiveSection(link.name)}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    className="absolute inset-0 bg-gray-100 rounded-full -z-10"
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </>
  )
}
