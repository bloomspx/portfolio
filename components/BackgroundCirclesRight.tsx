import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function BackgroundCirclesRight({}: Props) {
  return (
    <div>
    <motion.div 
        initial={{
            opacity:0,
        }}
        animate={{
            scale:[0.6, 1.5, 1.5, 2.5, 1],
            opacity:[0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius:["20%", "60%", "50%", "80%", "20%"],
        }}
        transition={{
            duration:2.5,
        }}
        viewport={{ once: true }}
        className='absolute top-0 right-0 flex flex-row items-center justify-end h-screen'
    >
        <div className='border-l-2 rounded-l-full absolute border-white opacity-5 h-4 w-4 z-0'/>
        <div className='border-l-2 rounded-l-full absolute border-white opacity-5 h-8 w-8 z-0'/>
        <div className='border-l rounded-l-full absolute border-gray-500 opacity-10 h-[150px] w-[150px] z-0
            duration-500 animate-pulse'/>
        <div className='border-l rounded-l-full absolute border-gray-500 opacity-10 h-[450px] w-[450px] z-0'/>
        <div className='border-l rounded-l-full absolute border-gray-500 opacity-5 h-[650px] w-[650px] z-0
            animate-pulse'/>
        <div/>
    </motion.div>
    </div>
  )
}