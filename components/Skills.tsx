import React from 'react'
import { motion } from 'framer-motion'
import SkillCard from './SkillCard'

type Props = {}

export default function Skills({}: Props) {

  // populate skill cards
  const languages = [
    {name: 'Python'},
    {name: 'Javascript'},
    {name: 'Java'},
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'PHP'},
    {name: 'MySQL'},
  ];
  const frameworks = [
    {name: 'React'},
    {name: 'NodeJS'},
    {name: 'Github'},
    {name: 'Kubernetes'},
    {name: 'Docker'},
    {name: 'Typescript'},
    {name: 'TailwindCSS'},
    {name: 'Firebase'},
    {name: 'Express'},
    {name: 'Flask'},
    {name: 'Selenium'},
    {name: 'MongoDB'},
    {name: 'Axios'},
  ];

  const languageCards: React.ReactNode[] = [];
  const frameworkCards: React.ReactNode[] = [];

  languages.forEach((skill) => {
    languageCards.push(<SkillCard name={skill.name} directionLeft={true}/>);
  })
  frameworks.forEach((skill) => {
    frameworkCards.push(<SkillCard name={skill.name}/>);
  })

  return (
    <div className='h-screen'>
        <motion.div 
          initial={{opacity:0, scale:0.8}}
          whileInView={{opacity:1, scale:1}}
          transition={{duration:0.9}}
          className='h-screen flex relative flex-row text-center min-h-screen md:text-left  px-10
              max-w-[2000px] justify-center mx-auto items-center'>

          <h3 className='headerTitle'>Skills</h3>
          <p className='absolute top-28 uppercase tracking-[3px] text-gray-400 text-xs'>
            Here are the following <b>languages</b> and <b>frameworks</b> I have used.
          </p>

          <div className='pt-20 pr-20 grid grid-cols-2 gap-5'>
            {languageCards}
          </div>
          <div className='pt-20 grid grid-cols-4 gap-5'>
            {frameworkCards}
          </div>
        </motion.div>
    </div>
  )
}