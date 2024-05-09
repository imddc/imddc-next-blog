'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { FaGithub } from 'react-icons/fa'
import { useSetHeaderInView } from '~/hooks/useSetHeaderInView'
import { introAvatarHover, popUp } from '~/lib/animate'

const socialLinks = [
  {
    href: 'https://github.com/imddc',
    icon: <FaGithub size={26} />
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
      className="max-w-[56rem] mx-auto mb-28 text-center pt-28 px-4 scroll-mt-28"
    >
      <header className="flex-center mb-10 w-fit mx-auto relative ">
        <Image
          height={200}
          width={200}
          src="/avatar.png"
          alt="imddc"
          priority
          className="border-4 border-white rounded-full size-24 sm:size-36"
        />

        <motion.div
          className="absolute bottom-0 right-0 size-10 rounded-full text-3xl cursor-pointer select-none"
          {...introAvatarHover}
        >
          👋🏻
        </motion.div>
      </header>

      <section className="mb-10">
        <h1 className="text-2xl font-bold mb-3">Hi, I&apos;m DuC</h1>
        <p>
          this is a website that I made to practice my skills in web
          development. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Itaque voluptates quisquam, aperiam quasi tempora fuga. Quidem
          praesentium odit eos! Dolor, quod? Cupiditate, aspernatur minus!
          Doloribus, non fugit. Doloribus, quod suscipit!
        </p>
      </section>

      <section className="flex-center gap-4">
        {socialLinks.map((link) => (
          <Link
            key={link.href}
            className="size-12 flex-center bg-gray-100 rounded-full"
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
