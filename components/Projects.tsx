import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

type Props = {}

export default function Projects({}: Props) {

  const projects = [
    {name: 'Chatterbox', 
      img: 'Chatterbox',
      desc:'A speech-to-text & text analysis web-app',
      url: 'https://github.com/bloomspx/Chatterbox/tree/new', 
      tech:['React', 'Javascript','Flask', 'NodeJS', 'CSS'],
      sum:['Applied Vosk Speech Recognition to perform speech-to-text conversion', 
        'Applied HuggingFace NLP Transformers to perform text analysis (summary, sentiment analysis & topic modelling)',
        'Deployed contanerized applications on Minishift with REST API Architecture'
        ]},
    {name: 'Ascenda Loyalty Hotel Booking', 
      img: 'Ascenda',
      desc:'A hotel booking web-app built using MERN framework',
      url: 'https://github.com/bloomspx/ESC_Ascenda', 
      tech:['React', 'Javascript','Express', 'MongoDB', 'Selenium', 'NodeJS', 'CSS'],
      sum:['Designed & built Destination Search, Hotel Search Results, Hotel Room Details pages using React', 
        'Implemented Express API calls from frontend to backend',
        'Designed Selenium tests in Java to test webpages'
        ]},
    {name: 'Portfolio', 
      img: 'Portfolio',
      desc:'A personal portfolio webpage',
      url: 'https://github.com/bloomspx/portfolio', 
      tech:['React', 'Typescript', 'TailwindCSS', 'NodeJS', 'CSS'],
      sum:['Implemented Framer Motion and Tailwind CSS',
        "Inspired and Modified from Sonny Sangha's Portfolio Project",
        ]},
    {name: 'Studify', 
      img: 'Studify',
      desc:'An Android app designed to make group study more efficient',
      url: 'https://github.com/bloomspx/studify', 
      tech:['Java', 'Firebase'],
      sum:['Designed Home & Login Fragments using MVVM architecture', 
        'Implemented Firebase Authentication for user login & user database integration',
        ]},
  ];

  const projectCards: React.ReactNode[] = [];

  projects.forEach((proj) => {
    projectCards.push(
      <ProjectCard name={proj.name} img={proj.img} description={proj.desc} 
        url={proj.url} tech={proj.tech} summary={proj.sum}/>);
  })

  return (
    <motion.div 
        initial={{opacity:0, scale:0.8}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:0.9}}
        className='h-[110vh] flex relative overflow-hidden flex-col text-left min-h-screen
            md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='headerTitle'>Projects</h3>

        <div className='w-full mt-16 flex space-x-5 overflow-x-scroll px-10 py-5 snap-x snap-mandatory
          scrollbar-thin scrollbar-track-gray-500/40 scrollbar-thumb-melon/80'>
            {projectCards}
        </div>
    </motion.div>
  )
}