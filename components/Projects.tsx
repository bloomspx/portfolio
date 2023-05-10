import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

type Props = {}

export default function Projects({}: Props) {
  return (
    <motion.div 
        initial={{opacity:0, scale:0.8}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:0.9}}
        className='h-screen flex relative overflow-hidden flex-col text-left
            md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='headerTitle'>Projects</h3>

        <div className='w-full mt-16 flex space-x-5 overflow-x-scroll px-10 py-5 snap-x snap-mandatory'>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    </motion.div>
  )
}