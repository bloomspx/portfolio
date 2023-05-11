import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import SkillIcon from './SkillIcon';
import { SocialIcon } from 'react-social-icons';

type Props = {
    name:string,
    img:string,
    description:string,
    tech:Array<string>,
    summary:Array<string>,
    url:string,
}

export default function ProjectCard({name, img, description, tech, summary, url}: Props) {

    const techIcons: React.ReactNode[] = [];
    const summaryPoints: React.ReactNode[] = [];

    tech.forEach((skill) => {
        techIcons.push(<SkillIcon name={skill}/>);
    })
    
    summary.forEach((point, index) => {
        summaryPoints.push(<li key={index}>{point}</li>);
    })

  return (
    <article className='flex flex-col rounded-lg items-center space-y-3 flex-shrink-0
        w-[500px] md:w-[600px] bg-[#292929] snap-center p-10 shadow-2xl
        hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden'>
        <motion.div 
            initial={{opacity:0, y:-100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1}}
            viewport={{once:true}}
            className='relative overflow-hidden object-cover object-center rounded-lg w-60 h-36'>
            <Image 
                alt=""
                fill={true}
                src={`/static/images/${img}.png`}/>
        </motion.div>

        <div className='px-0 md:px-6'>
            <div className='flex flex-row items-center'>
                <h4 className='text-3xl font-light'>{name} | </h4>
                <SocialIcon 
                    className='transition-all hover:animate-pulse-once hover:bg-salmon/50 hover:rounded-full'
                    url={url}
                    fgColor='white'
                    bgColor='transparent'/>
            </div>
            <p className='uppercase font-semibold text-gray-300 text-sm'>
                {description}
            </p>
            <div className='flex space-x-2 my-2'>
                {techIcons}
            </div>

            <ul className='list-disc space-y-0 ml-5 text-sm'>
                {summaryPoints}
            </ul>
        </div>
    </article>
  )
}