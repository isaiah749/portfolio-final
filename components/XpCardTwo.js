import React from 'react'
import { motion } from 'framer-motion'

const XpCardTwo = () => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-[350px] md:h-[715px] xl:h-[608px] w-[350px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden '>
        <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{
            duration: 1.2
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        viewport={{
            once: true
        }}
        src="https://averspizza.com/wp-content/themes/avers/images/common/logoMark2.png" alt="" className='rounded-full h-20 w-20 md:h-32 md:w-32 xl:w-[200px] xl:h-[200px] object-cover object-center' />

        <div className='px-0 md:px-10'>
            <h4 className='text-2xl md:text-4xl font-light'>Delivery Driver</h4>
            <p className='text-xs md:text-base uppercase py-5 text-gray-400'>Started work 03.18.2019 - Ended 03.15.2020</p>
            <ul className='list-disc space-y-2 md:space-y-4 ml-5 text-sm md:text-lg'>
                <li>Handled customer orders and inquiries</li>
                <li>Trained new employees</li>
                <li>Learned customer service techniques</li>
            </ul>
        </div>
    </article>
  )
}

export default XpCardTwo