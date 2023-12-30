import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 px-6 flex items-center justify-between max-w-8xl mx-auto 
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
                duration:1.2
            }}
            className='w-10 h-10 bg-black rounded-full flex items-center justify-center pb-1 cursor-default'
        >
            <h1 className='uppercase text-white text-2xl font-bold'>B</h1>
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
                duration:1.2
            }}
            className='flex items-center'
            >
            <SocialIcon 
                className='headerButton'
                url='https://www.linkedin.com/in/pei-xuan-soh/'
                fgColor='white'
                bgColor='transparent'/>
            <SocialIcon 
                className='headerButton'
                url='https://github.com/bloomspx'
                fgColor='white'
                bgColor='transparent'/>
        </motion.div>
    </header>
  )
}