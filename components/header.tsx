'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { useSectionContext } from '~/context/section-context'
import { headerActive, headerBack, popDown, popUp } from '~/lib/animate'
import { links } from '~/lib/data'

const Header = () => {
  const { sectionContext, sectionDispatchContext } = useSectionContext()

  return (
    <>
      <motion.div
        className="fixed left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-40
        shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[24rem] sm:rounded-full z-40"
        // dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75
        {...headerBack}
      />
      <nav className="flex h-12 fixed z-40 top-[0.8rem] left-1/2 -translate-x-1/2 py-2 sm:top-[2.1rem] sm:h-[initial] sm:py-0">
        <motion.ul className="flex items-center gap-4 text-gray-500">
          {links.map((link) => (
            <motion.li
              className="relative h-3/4 break-keep flex-center"
              key={link.name}
              {...popDown}
            >
              <Link
                href={link.hash}
                className={clsx(
                  'relative px-2 py-1 font-bold transition hover:text-gray-900',
                  {
                    'text-gray-800 hover:text-gray-800':
                      sectionContext.link === link.name
                  }
                )}
                onClick={() => sectionDispatchContext.setLink(link.name)}
              >
                <span className="relative z-50">{link.name}</span>
                {sectionContext.link === link.name && (
                  <motion.div
                    className={clsx(
                      'absolute inset-0 rounded-full',
                      'bg-gray-100'
                    )}
                    {...headerActive('selectedId')}
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
