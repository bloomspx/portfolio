import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className='h-screen flex flex-col space-y-5
        items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <div className='border-2 border-gray-400 relative w-40 h-40 overflow-hidden mx-auto'>
            <Image 
                alt="profile-pic"
                layout='fill'
                objectFit='cover'
                src="https://media.licdn.com/dms/image/D5603AQHKlyWeJXFDxQ/profile-displayphoto-shrink_400_400/0/1683008099896?e=1689206400&v=beta&t=3zgq6gp9M-zjok-1edloM1v-qMxRlZ8AWO9T1rej82M"/>
        </div>
        <div className='z-20'>
            <h2 className='text-sm font-semibold uppercase text-gray-300 pb-2 tracking-[5px] animate-pulse'>
                Aspiring Software Developer
            </h2>
            <h1 className='text-5xl font-semibold px-10'>
                <span>
                    Hi, I'm <span className='font-bold text-melon'>{typedText}</span>
                </span>
                <Cursor cursorColor='#FFAC99' cursorStyle='|'/>
            </h1>

            <div className='pt-4'>
                <Link href={'#about'}>
                    <button className='profileButton'>About</button>
                </Link>
                <Link href={'#experience'}>
                    <button className='profileButton'>Experience</button>
                </Link>
                <Link href={'#skills'}>
                    <button className='profileButton'>Skills</button>
                </Link>
                <Link href={'#projects'}>
                    <button className='profileButton'>Project</button>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Profile