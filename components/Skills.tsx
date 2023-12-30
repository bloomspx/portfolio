import React from 'react'
import { motion } from 'framer-motion'
import SkillCard from './SkillCard'
import languagesData from '../data/Languages.json'
import frameworksData from '../data/Frameworks.json'

type Props = {}

export default function Skills({}: Props) {

  // populate skill cards
  const languages = languagesData;
  const frameworks = frameworksData;

  const languageCards: React.ReactNode[] = [];
  const frameworkCards: React.ReactNode[] = [];

  languages.forEach((skill) => {
    languageCards.push(<SkillCard name={skill.name} directionLeft={true} />);
  })
  frameworks.forEach((skill) => {
    frameworkCards.push(<SkillCard name={skill.name}/>);
  })

  return (
    <div className='paddingContainer'>
      <h3 className='headerTitle'>Skills</h3>
      <h4 className='subtitle'>
        Here are the following <b>languages</b> and <b>frameworks</b> I have used.
      </h4>
      <div className='padding-sm'></div>
      <div className='flex-row '>
          <motion.div 
            initial={{opacity:0, scale:0.8}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:0.9}}
            viewport={{ once: true }}
            className='skillsContainer'>

            <div className='languagesContainer'>
              {languageCards}
            </div>
            <div className='frameworksContainer'>
              {frameworkCards}
            </div>
          </motion.div>
      </div>
    </div>
  )
}