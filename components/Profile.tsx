import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundSquares from './BackgroundSquares';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {}

function Profile({}: Props) {
    
    // hook that generates typewriter words
    const [typedText, count] = useTypewriter ({
        words: [
            "Pei Xuan!",
            "an aspiring software engineer.",
        ],
        loop: true,
        typeSpeed:100,
        deleteSpeed:80,
        delaySpeed:1500,
    });

  return (
    <div className=' h-[120vh] flex flex-col space-y-5
        items-center justify-center text-center overflow-hidden'>
        <BackgroundSquares/>
        <div className='z-20'>
            <h2 className='text-lg font-semibold uppercase text-gray-300 pb-2 tracking-[5px] animate-pulse'>
                Learn. Grow. Repeat.
            </h2>
            <h1 className='text-5xl font-semibold px-10'>
                <span>
                    Hi, I'm <span className='font-bold text-melon'>{typedText}</span>
                </span>
                <Cursor cursorColor='#FFAC99' cursorStyle='|'/>
            </h1>

            <div className='pt-6'>
                <Link href={'#about'}>
                    <button className='profileButton'>About</button>
                </Link>
                <Link href={'#projects'}>
                    <button className='profileButton'>Projects</button>
                </Link>
                <Link href={'#skills'}>
                    <button className='profileButton'>Skills</button>
                </Link>
                <Link href={'#contact'}>
                    <button className='profileButton'>Contact</button>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Profile