import React from 'react'
import { motion } from 'framer-motion'
import data from '../context/projects.json'
import { useRouter } from 'next/router'
const Projects = () => {

    const projects = [1, 2, 3, 4, 5]
    const router = useRouter();

    return (
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-[fit-content] py-5 relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '>
            <h3 className="absolute top-24 sm:top-0 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
            <div className=' relative w-screen lg:w-[1750px] flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-sky-500/80  lg:items-center -mt-10 z-20  '>
                {
                    data.map((project, i) => (
                        <motion.div key={i} className="w-full flex-shrink-0 snap-center flex flex-col md:space-y-5 items-center justify-center p-10 md:p-44 h-screen">
                            <motion.img 
                            initial={{
                                y: -300,
                                opacity: 0
                            }}
                            transition={{
                                duration: 1.2
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            src={project.image} alt='' className='h-[25%] sm:h-[45%] md:h-[25%] md:mt-5 p-5 md:p-0 lg:mt-0 xl:w-[50%] xl:h-full' />
                            <div className='space-y-2 -mb-10 md:space-y-5 px-0 md:px-10 max-w-6xl '>
                                <h4 className='text-2xl font-semibold text-center md:text-3xl lg:text-4xl'>
                                    <span className='underline decoration-sky-500/50'>Project {i + 1} of {data.length}:</span> <span className='cursor-pointer hover:underline decoration-sky-500/50' onClick={() => router.push(`${project.link}`)} >{project.title}</span>
                                </h4>
                                <p className='text-xs md:text-lg text-center md:text-left '>
                                    {project.summary}
                                </p>
                            </div>
                        </motion.div>

                    ))
                }

            </div>

            <div className='w-full absolute top-[30%] bg-sky-500/10 left-0 h-[500px] -skew-y-12 ' />



        </motion.div>
    )
}

export default Projects