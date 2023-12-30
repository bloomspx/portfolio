import Image from 'next/image'
import React, { useState } from 'react'
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
        techIcons.push(<SkillIcon key={skill} name={skill}/>);
    })
    
    summary.forEach((point, index) => {
        summaryPoints.push(<li key={index}>{point}</li>);
    })

  return (
    <motion.article 
        className='projectCard'
        initial={{ opacity:0.5, y:200 }}
        transition={{ duration:0.5 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once: true }}
    >
        <div className='webpageHeader'>
            <div className='circle bg-red-400'></div>
            <div className='circle bg-yellow-400'></div>
            <div className='circle bg-green-400'></div>
        </div>

        <div className='imageContainer'>
            <Image 
                alt=""
                layout="fill"
                objectFit="cover"
                src={`/static/images/${img}.png`}
                className='rounded-t-md px-1'
            />
            <div className="summaryBody">
                <div className='summaryContent'>{summaryPoints}</div>
            </div>
        </div>
        
        <div className='w-full h-1.5 bg-neutral-800'></div>

        <div className='projectContainer'>
            <motion.h1
                initial={{ y: 16, opacity: 0 }}
                transition={{ duration: 0.5}}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{once:true}}
                className='text-2xl font-semibold text-shadow-md'>
                {name}
            </motion.h1>
            <motion.p 
                initial={{ y: 16, opacity: 0 }}
                transition={{ duration: 0.5}}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{once:true}}
                className='text-gray-400 text-shadow-md'>
                    {description}
            </motion.p>

            <motion.div 
                initial={{ y: 16, opacity: 0 }}
                transition={{ duration: 0.5}}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{once:true}}
                className='projectBody'
            >
                <div className='iconsContainer'>
                    {techIcons}
                </div>
            <SocialIcon 
                className='transition-all hover:animate-pulse-once'
                url={url}
                bgColor='white'
                fgColor='transparent'
            />
            </motion.div>
        </div>
    </motion.article>
  )
}