import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen md:text-left md:flex-row text-center
            max-w-7xl px-12 justify-evenly mx-auto items-center'>
        <h3 className='headerTitle'>About</h3>
        <motion.div 
            initial={{opacity:0, scale:0.8, x:-50}}
            whileInView={{opacity:1, scale:1, x:0}}
            transition={{duration:0.9}}
            className='border border-gray-400 relative w-52 h-52 overflow-hidden mx-auto rounded-full
                mb-20 md:mb-0 md:rounded-lg md:w-64 md:h-64 md:ml-10 flex-shrink-0 drop-shadow-2xl'>
            <Image 
                className='filter grayscale-[50%] hover:grayscale-0 cursor-pointer'
                alt="profile-pic"
                layout='fill'
                objectFit='cover'
                src="https://media.licdn.com/dms/image/D5603AQHKlyWeJXFDxQ/profile-displayphoto-shrink_800_800/0/1683008099896?e=1689206400&v=beta&t=eGnSwOT_n5NBXXrLsj_eKE8kKPq_iEmWNirtjnBsidM"/>
        </motion.div>
        
        <motion.div 
            initial={{opacity:0, scale:0.8, x:50}}
            whileInView={{opacity:1, scale:1, x:0}}
            transition={{duration:0.9}}
            className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold font-mono'>A little about myself...</h4>
            <p className='text-base'>
                👋 Hi, my name is<span className='font-bold font-mono text-salmon'> Soh Pei Xuan </span> 
                and I am currently a <span className='text-melon font-semibold font-mono'>3rd Year Computer Science 🖥️ Undergraduate </span>
                at<span className='font-semibold font-mono text-salmon'> Singapore University of Technology and Design (SUTD)</span>. 
                Thus far, I've attempted to build websites, android applications and applied Transformer models to perform 
                text analysis. I enjoy using my problem-solving abilities to tackle new challenges, and I am
                constantly looking to pick up new skills and knowledge. 
            </p>
        </motion.div>
    </div>
  )
}