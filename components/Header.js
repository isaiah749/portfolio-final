import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'
import Link from 'next/link';

const Header = () => {
  return (
    <header className='sticky top-24 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5 '>
        <motion.div
        initial={{
            x: -50,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1
        }}
        className="flex flex-row items-center ">
            <SocialIcon url="https://www.linkedin.com/in/isaiah-morris-9035701a8/" fgColor='gray' bgColor='transparent' />
            <SocialIcon url="https://www.facebook.com/isaiah.morris.161/" fgColor='gray' bgColor='transparent' />
            <SocialIcon url="https://www.instagram.com/big_easyy/" fgColor='gray' bgColor='transparent' />
            <SocialIcon url="https://github.com/isaiah749" fgColor='gray' bgColor='transparent' />
        </motion.div>
        <Link href='#contact'>
            <motion.div
            initial={{
                x: 500,
                scale: 0.5,
                opacity: 0
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 0.7
            }}
            className="cursor-pointer">
                
                <SocialIcon className='' network='email' fgColor='gray' bgColor='transparent' />
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
            </motion.div>
        </Link>
    </header>
  )
}

export default Header