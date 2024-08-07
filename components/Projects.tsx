import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import projectsData from '../data/Projects.json'

type Props = {}

export default function Projects({}: Props) {

  const projects = projectsData

  const projectCards: React.ReactNode[] = [];

  projects.forEach((proj) => {
    projectCards.push(
      <ProjectCard name={proj.name} img={proj.img} description={proj.desc} 
        url={proj.url} tech={proj.tech} summary={proj.sum}/>);
  })

  return (
    <div className='paddingContainer'>
      <h3 className='headerTitle'>Projects</h3>
      <div className='padding-sm'></div>
      <div 
        className='max-w-7xl px-6 grid grid-cols-1 mx-6 md:mx-auto md:grid-cols-2 
        gap-8 justify-items-center text-left'
      >
        {projectCards}
      </div>
    </div>
  )
}