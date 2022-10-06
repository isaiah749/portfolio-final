import React from 'react'
import { motion } from 'framer-motion'
import stripelogo from '../styles/images/Vector 1.png'

const XpCard = () => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 snap-mandatory h-[350px] md:h-full w-[350px] md:w-[600px] xl:w-[900px] snap-start bg-[#292929] py-10 pl-5 pr-14 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden xl:h-[38rem]'>
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
        src="https://cdn.shopify.com/s/files/1/0274/1351/2301/files/SkullGraphicSpinningsmall.gif?v=1627671973" alt="" className='rounded-full h-28 w-28 md:h-32  md:w-32 xl:w-[200px] xl:h-[200px] object-cover object-center' />

        <div className='px-0 md:px-10'>
            <h4 className='text-xl md:text-4xl font-light -mt-8 '>Lead Developer</h4>
            <div className='flex space-x-2 my-2 items-center -mb-3 '>
                <img className='md:h-10 h-5 md:w-10 w-5 rounded-full' src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="" />
                <img className='md:h-10 h-5 md:w-10 w-5 rounded-full' src="https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png" alt="" />
                <img className='md:h-10 h-5 md:w-10 w-5 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png" alt="" />
                <img className='md:h-10 h-5 md:w-10 w-5 rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                <img className='md:h-10 h-5 md:w-10 w-5 rounded-full' src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" alt="" />
                <img className='md:h-10 h-5 md:w-10 w-5 rounded-full object-contain' src="https://seeklogo.com/images/S/shopify-logo-1C711BCDE4-seeklogo.com.png" alt="" />
                <img className='md:h-10 h-5 md:w-10 w-5 rounded-full object-contain' src="https://www.svgrepo.com/show/353814/google-gsuite.svg" alt="" />
                <img className='md:h-10 h-5 md:w-10 w-5 rounded-full object-contain' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/2048px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png" alt="" />
            </div>
            <p className='uppercase py-5 text-gray-400 text-xs md:text-base mt-0 '>Started work: 10.02.20 - <span className='italic'>Current</span></p>
            <ul className='list-disc space-y-0 md:space-y-4 ml-5 pb-5 text-xs md:text-lg -mt-3 md:mt-0'>
                <li>Build and maintain websites/E-commerce storefronts (Stripe & Shopify)</li>
                <li>Build and maintain databases</li>
                <li>Install support software</li>
                <li>Create Excel functions to simplify data entry</li>
                <li>Customer Service</li>
                <li>Business decisons/solutions</li>
                <li>Grew a company from annually grossing 40k/year to 2mil/year</li>
            </ul>
        </div>
    </article>
  )
}

export default XpCard