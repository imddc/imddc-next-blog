'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { FaGithub } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { useSetHeaderInView } from '~/hooks/useSetHeaderInView'
import { introAvatarHover, popUp } from '~/lib/animate'

const socialLinks = [
  {
    href: 'https://github.com/imddc',
    icon: <FaGithub size={22} />
  }
]

const Intro = () => {
  const ref = useRef(null)
  useSetHeaderInView(ref, 'intro')

  return (
    <motion.section
      id="intro"
      ref={ref}
      {...popUp}
      className="mx-auto mb-28 max-w-4xl scroll-mt-28 px-4 pt-28 text-center"
    >
      <header className="flex-center relative mx-auto mb-10 w-fit ">
        <Image
          height={200}
          width={200}
          src="/avatar.png"
          alt="imddc"
          priority
          className="size-24 rounded-full border-4 border-white sm:size-36"
        />

        <motion.div
          className="absolute bottom-0 right-0 size-10 cursor-pointer select-none rounded-full text-3xl"
          {...introAvatarHover}
        >
          👋🏻
        </motion.div>
      </header>

      <section className="mb-10">
        <p className="mb-4 font-bold">Hi, I&apos;m</p>
        <TypeAnimation
          sequence={['DuC', 2000, 'Frontend Developer', 1000]}
          speed={50}
          repeat={Infinity}
          style={{ fontSize: '2.25rem' }}
        />
      </section>

      <section className="flex-center gap-4">
        {socialLinks.map((link) => (
          <Link
            key={link.href}
            className="flex-center size-10 rounded-full bg-gray-100 dark:bg-gray-900/70"
            href={link.href}
            target="_blank"
          >
            {link.icon}
          </Link>
        ))}
      </section>
    </motion.section>
  )
}

export default Intro
