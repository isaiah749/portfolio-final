import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Intro</h3>

        <motion.img initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once:true }} 
        src='https://i.imgur.com/lDjRRp8.jpg' 
        className='-mb-14 mt-5 md:mt-0 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] xl:mt-5 object-top '
        />

        <div className='space-y-2 -mt-14 md:-mt-0  px-0 md:px-10 xl:space-y-10'>
            <h4 className='text-4xl font-bold'>About <span className='underline decoration-sky-500'>me</span></h4>
            <p className="text-sm md:text-base">Hi, I'm Isaiah! I am a Fullstack/Software developer. I graduated from Indiana University with my degree in Informatics, Computing, & Engineering in December of 2021, but I have been working professionally as a developer for 2 years. I have expierence using Javascript libraries such as React and next, and have experience with CSS frameworks such as Bootstrap and Tailwind. I have a passion for coding and growing my knowledge with developing and technology. Outside of developing I enjoy spending time with friends, sports, video games, and being active.</p>
        </div>


    </motion.div>
  )
}

export default About

