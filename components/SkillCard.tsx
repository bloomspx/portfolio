import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean;
  name: string;
};

function SkillCard({ directionLeft, name }: Props) {
  return (
    <div className='flex flex-col items-center gap-4 cursor-pointer'>
      <motion.div
        initial={{ 
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1}}
        whileInView={{ opacity: 1, x: 0}}
        viewport={{ once: true }}>
        <Image
          className='skillIcon'
          alt="icon"
          width={72}
          height={72}
          src={`/static/images/${name}.svg`}
        />
      </motion.div>

      <div className={`flex justify-center py-1 px-3 rounded-md
        font-semibold text-shadow shadow-md shadow-gray-800
        ${directionLeft ? 'bg-dark-blue' : 'bg-dark-salmon'}`
      }>
        {name}
      </div>  
    </div>
  )
}

export default SkillCard
