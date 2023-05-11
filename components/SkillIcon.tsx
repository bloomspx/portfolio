import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

type Props = {
    name: string;
}

export default function SkillIcon({ name }: Props) {
    return (
        <div className='relative flex'>
          <motion.div
            initial={{ 
              y: 16,
              opacity: 0,
            }}
            transition={{ duration: 0.5}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{once:true}}
          >
            <Image
              className='transition duration-300 ease-in-out'
              alt="icon"
              width={25}
              height={25}
              src={`/static/images/${name}.svg`}
            />
          </motion.div>

        </div>
      )
}