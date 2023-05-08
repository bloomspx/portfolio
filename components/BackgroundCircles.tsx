import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
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
        className='relative flex justify-center items-center'
    >
        <div className='border absolute border-salmon opacity-80 rotate-45 h-[200px] w-[200px] mt-52
            duration-300 animate-ping'/>
        <div className='border absolute border-salmon opacity-50 rotate-6 h-[480px] w-[480px] mt-52'/>
        <div className='border absolute border-salmon opacity-70 h-[600px] w-[600px] mt-52
            animate-pulse'/>
        <div/>
    </motion.div>
  )
}