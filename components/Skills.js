import React from 'react'
import { motion } from 'framer-motion'
import SkillBar from './SkillBar'

const Skills = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-[fit-content] py-10 md:py-20 flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-12 md:top-6  uppercase tracking-[20px] text-gray-500 text-2xl">My Skills</h3>
        <div className="border border-gray-500 py-5 h-[25rem] md:h-[40rem] mt-16 w-full lg:w-[900px] pl-2 pr-10 overflow-y-scroll rounded-lg scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-sky-500/80  lg:-mt-0   ">
            <SkillBar />
        </div>
    </motion.div>
  )
}

export default Skills