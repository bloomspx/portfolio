import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean;
  name: string;
};

function SkillCard({ directionLeft, name }: Props) {
  return (
    <div className='relative flex cursor-pointer group'>
      <motion.div
        initial={{ 
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1}}
        whileInView={{ opacity: 1, x: 0}}
      >
        <Image
          className='rounded-full border border-gray-500 p-2 filter group-hover:grayscale
            transition duration-300 ease-in-out'
          alt="icon"
          width={72}
          height={72}
          src={`/static/images/${name}.svg`}
        />
      </motion.div>

      <div className='absolute opacity-0 transition duration-300 ease-in-out
        group-hover:opacity-90 group-hover:bg-white h-[72px] w-[72px] rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-sm font-mono font-bold text-black opacity-100 truncate'>{name}</p>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
