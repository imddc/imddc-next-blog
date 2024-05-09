'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { popUp } from '~/lib/animate'

const Intro = () => {
  return (
    <motion.section
      id="intro"
      {...popUp}
      className="max-w-[56rem] mx-auto mb-28 text-center pt-28 px-4"
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
          whileHover={{
            rotate: 30,
            scale: 1.4,
            animationDuration: '0.5s'
          }}
        >
          👋🏻
        </motion.div>
      </header>
      <h1 className="text-2xl font-bold mb-3">Hi, I&apos;m DuC</h1>

      <p>
        this is a website that I made to practice my skills in web development.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
        voluptates quisquam, aperiam quasi tempora fuga. Quidem praesentium odit
        eos! Dolor, quod? Cupiditate, aspernatur minus! Doloribus, non fugit.
        Doloribus, quod suscipit!
      </p>
    </motion.section>
  )
}

export default Intro
