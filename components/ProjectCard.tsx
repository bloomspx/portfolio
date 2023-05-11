import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    name:string,
    description:string,
    tech:object,
    summary:object,
}

export default function ProjectCard({name, description, tech, summary}: Props) {

    const techIcons: React.ReactNode[] = [];

    // tech.forEach((proj) => {
    //     projectCards.push(<ProjectCard name={proj.name} description={proj.desc} tech={proj.tech} summary={proj.sum}/>);
    // })

  return (
    <article className='flex flex-col rounded-lg items-center space-y-3 flex-shrink-0
        w-[500px] md:w-[600px] bg-[#292929] snap-center p-10
        hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden'>
        <motion.div 
            initial={{opacity:0, y:-100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1}}
            viewport={{once:true}}
            className='relative overflow-hidden object-cover object-center rounded-lg w-48 h-32'>
            <Image 
                alt=""
                layout='fill'
                src={`/${name}.png`}/>
        </motion.div>

        <div className='px-0 md:px-6'>
            <h4 className='text-3xl font-light'>{name}</h4>
            <p className='uppercase font-semibold text-gray-300 text-sm'>
                {description}
            </p>
            <div className='flex space-x-2 my-2'>
                {/* Technologies Used */}
                <Image
                    alt="icon"
                    width={20}
                    height={20}
                    src="/react.svg"/>
                <Image
                    alt="icon"
                    width={20}
                    height={20}
                    src="/javascript.svg"/>
                <Image
                    alt="icon"
                    width={20}
                    height={20}
                    src="/css.svg"/>
                <Image
                    alt="icon"
                    width={20}
                    height={20}
                    src="/flask.svg"/>
            </div>

            <ul className='list-disc space-y-0 ml-5 text-sm'>
                <li>Points</li>
                <li>Points</li>
                <li>Points</li>
                <li>Points</li>
            </ul>
        </div>
    </article>
  )
}