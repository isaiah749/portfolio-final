import React from 'react'
import Typed from 'react-typed'
import BackgroundCircles from './BackgroundCircles'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center pt-10 lg:pt-20 overflow-hidden ">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover md:h-44 md:w-44"
        src="https://i.imgur.com/izZGk8h.jpg"
        alt=""
      />
      <div className='z-20'>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px] whitespace-nowrap md:text-lg">
          Fullstack Developer
        </h2>
        <h1 className="text-xl lg:text-6xl font-semibold px-10 md:text-3xl">
          <span className="mr-3">
            <Typed
              strings={[
                "Hi, I'm Isaiah Morris",
                'Welcome To My Portfolio',
                'Fullstack Developer'
              ]}
              typeSpeed={60}
              backSpeed={60}
              loop
              className="font-bold"
            />
          </span>
        </h1>
        <div className="pt-5">
          <Link href='#about'>
            <button className="heroButton">About</button>
          </Link>

          <Link href='#experience'>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href='#skills'>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href='#projects'>
            <button className="heroButton">Projects</button>
          </Link>
          <Link href={'https://drive.google.com/file/d/1uH9rQGwtTT_Gxgj0u86KjffwPQF0S40Y/view?usp=sharing'}>
            <button className='heroButton'>My Resume</button>        
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
