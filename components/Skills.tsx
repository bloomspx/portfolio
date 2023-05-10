import React from 'react'
import { motion } from 'framer-motion'
import SkillCard from './SkillCard'

type Props = {}

export default function Skills({}: Props) {

  // populate skill cards
  const languages = [
    {source: '/python.svg', name: 'Python'},
    {source: '/javascript.svg', name: 'Javascript'},
    {source: '/java.svg', name: 'Java'},
    {source: '/html-5.svg', name: 'HTML'},
    {source: '/css.svg', name: 'CSS'},
    {source: '/php.svg', name: 'PHP'},
    {source: '/mysql.svg', name: 'MySQL'},
  ]
  const frameworks = [
    {source: '/react.svg', name: 'React'},
    {source: '/nodejs.svg', name: 'NodeJS'},
    {source: '/github.svg', name: 'Github'},
    {source: '/kubernetes.svg', name: 'Kubernetes'},
    {source: '/docker.svg', name: 'Docker'},
    {source: '/typescript.svg', name: 'Typescript'},
    {source: '/tailwindcss.svg', name: 'TailwindCSS'},
    {source: '/firebase.svg', name: 'Firebase'},
    {source: '/express.svg', name: 'Express'},
    {source: '/flask.svg', name: 'Flask'},
    {source: '/mongodb.svg', name: 'MongoDB'},
    {source: '/axios.svg', name: 'Axios'},
  ];

  const languageCards: React.ReactNode[] = [];
  const frameworkCards: React.ReactNode[] = [];

  languages.forEach((skill) => {
    languageCards.push(<SkillCard source={skill.source} name={skill.name} directionLeft={true}/>);
  })
  frameworks.forEach((skill) => {
    frameworkCards.push(<SkillCard source={skill.source} name={skill.name} directionLeft={false}/>);
  })

  return (
    <div className='h-screen'>
        <motion.div 
          initial={{opacity:0, scale:0.8}}
          whileInView={{opacity:1, scale:1}}
          transition={{duration:0.9}}
          className='h-screen flex relative flex-col text-center min-h-screen md:text-left 
              xl:flex-row xl:px-10 xl:space-y-0 max-w-[2000px] justify-center mx-auto items-center'>
          
          <h3 className='headerTitle'>Skills</h3>
          <p className='absolute top-28 uppercase tracking-[3px] text-gray-400 text-xs'>
            Here are the following <b>languages</b> and <b>frameworks</b> I have used.
          </p>

          <div className='pt-20 pr-20 grid grid-cols-2 gap-5'>
            {languageCards}
          </div>
          <div className='pt-20 grid grid-cols-3 gap-5'>
            {frameworkCards}
          </div>
        </motion.div>
    </div>
  )
}