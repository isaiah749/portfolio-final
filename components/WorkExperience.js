import React from 'react'
import { motion } from 'framer-motion'
import XpCard from './XpCard'
import data from '../context/workExperience.json'
import XpCardTwo from './XpCardTwo'

const WorkExperience = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>Experience</h3>
        
        <div className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-sky-500/80 xl:overflow-x-hidden ">
            <XpCard  />
            <XpCardTwo />
        </div>

    </motion.div>
  )
}

export default WorkExperience