import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

type Props = {}

export default function Projects({}: Props) {

  const projects = [
    {name: 'Chatterbox', 
      desc:'A text-to-speech & text analysis tool', 
      tech:['React', 'Javascript', 'CSS', 'Flask'],
      sum:['Point 1', 'Point 2']}
  ];

  const projectCards: React.ReactNode[] = [];

  projects.forEach((proj) => {
    projectCards.push(<ProjectCard name={proj.name} description={proj.desc} tech={proj.tech} summary={proj.sum}/>);
  })

  return (
    <motion.div 
        initial={{opacity:0, scale:0.8}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:0.9}}
        className='h-screen flex relative overflow-hidden flex-col text-left min-h-screen
            md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='headerTitle'>Projects</h3>

        <div className='w-full mt-16 flex space-x-5 overflow-x-scroll px-10 py-5 snap-x snap-mandatory
          scrollbar-thin scrollbar-track-gray-500/40 scrollbar-thumb-melon/80'>
            {projectCards}
        </div>
    </motion.div>
  )
}