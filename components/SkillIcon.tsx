import React from 'react'
import Image from 'next/image';

type Props = {
    name: string;
}

export default function SkillIcon({ name }: Props) {
    return (
        <div className='relative flex'>
          <div>
            <Image
              className='transition duration-300 ease-in-out'
              alt="icon"
              width={25}
              height={25}
              src={`/static/images/${name}.svg`}
            />
          </div>
        </div>
      )
}