import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='paddingBox'>
        <h3 className='headerTitle'>About</h3>
        <div className='padding-lg'></div>
        <div className='flex flex-col md:text-left md:flex-row text-center
                max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <motion.div 
                initial={{opacity:0, scale:0.8, x:-50}}
                whileInView={{opacity:1, scale:1, x:0}}
                transition={{duration:0.9}}
                viewport={{ once: true }}
                className='profileContainer'>
                <Image 
                    className='filter grayscale-[50%] hover:grayscale-0 cursor-pointer'
                    alt="profile-pic"
                    layout='fill'
                    objectFit='cover'
                    src="/static/images/Profile.jpeg"/>
            </motion.div>
            
            <motion.div 
                initial={{opacity:0, scale:0.8, x:50}}
                whileInView={{opacity:1, scale:1, x:0}}
                transition={{duration:0.9}}
                viewport={{ once: true }}
                className='space-y-8 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold font-mono text-white
                drop-shadow-lg drop-shadow-black'>
                    A little about myself...
                </h4>
                <p className='text-lg'>
                    👋 Hi, my name is<span className='font-bold font-mono text-salmon'> Soh Pei Xuan </span> 
                    and i'm currently a <span className='text-salmon font-semibold font-mono'>Final Year Computer Science 🖥️ Undergraduate </span>
                    at<span className='font-semibold font-mono text-salmon'> Singapore University of Technology and Design (SUTD)</span>.
                    <br/> 
                    Thus far, I've attempted to build websites, android applications and applied Transformer models to perform 
                    text analysis. I enjoy using my problem-solving abilities to tackle new challenges, and I am
                    constantly looking to pick up new skills and knowledge. 
                </p>
            </motion.div>
        </div>
    </div>
  )
}