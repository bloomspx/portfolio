import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 px-6 flex items-start justify-between max-w-7xl mx-auto 
        z-20 xl:items-center'>
        <motion.div 
            initial={{
                x:-500,
                opacity:0,
                scale:0.5,
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1,
            }}
            transition={{
                duration:1
            }}
            className='flex flex-row items-center'
            >
            {/* Social Icons */}
            <SocialIcon 
                url='https://www.linkedin.com/in/pei-xuan-soh/'
                fgColor='grey'
                bgColor='transparent'/>
            <SocialIcon 
                url='https://github.com/bloomspx'
                fgColor='grey'
                bgColor='transparent'/>
        </motion.div>

        <motion.div
            initial={{
                x:500,
                opacity:0,
                scale:0.5,
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1,
            }}
            transition={{
                duration:1
            }}
            className='flex flex-row items-center cursor-pointer'
        >
            <p className='uppercase hidden md:inline-flex text-sm font-semibold text-gray-400'>Get in Touch</p>
            <SocialIcon 
                className='cursor-pointer'
                network='email'
                fgColor='grey'
                bgColor='transparent'/>
        </motion.div>
    </header>
  )
}