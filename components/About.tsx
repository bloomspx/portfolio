import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='paddingContainer'>
        <h3 className='headerTitle'>About</h3>
        <div className='padding-lg'></div>
        <div className='flex flex-col md:text-left md:flex-row text-center
                max-w-7xl px-10 justify-evenly mx-auto items-center z-1'>
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
                className='space-y-8 px-0 md:px-10 text-shadow'>
                <h4 className='text-4xl font-semibold font-mono text-white 
                drop-shadow-lg drop-shadow-black'>
                    A little about myself...
                </h4>
                <p className='text-lg'>
                    👋 Hi, my name is<span className='font-bold font-mono text-melon'> Pei Xuan </span> 
                    and I'm currently a <span className='text-melon font-semibold font-mono'>Final Year Computer Science 🖥️ Undergraduate </span>
                    at Singapore University of Technology and Design (SUTD).
                    <br/> <br/> 
                    Thus far, I have experience in <span className='font-semibold'>full-stack web application development, machine learning (training language models and applying transformer models) and mobile app development.</span> 
                    <br/> <br/> 
                    I enjoy using my problem-solving abilities to tackle new challenges and create meaningful projects!
                </p>
                <div className='flex flex-col space-y-4 pt-2 items-center md:items-start'>
                    <p className='text-melon text-lg uppercase font-bold tracking-[2px]'>Experience</p>
                    <div className='grid grid-cols-1 md:grid-cols-4 items-baseline'>
                        <p className='uppercase font-mono font-semibold text-sm'>Aug ── Dec 2022</p>
                        <div className='flex flex-col col-span-3'>
                            <p className='font-semibold text-melon'>Software Engineer (Internship) • Ministry of Home Affairs (MHA)</p>
                            <p>Designed and implemented a React-Flask web application to perform speech-to-text and text analysis on visual and audio content</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}
