import { icons } from '@/utils/constant/icons'
import Image from 'next/image'
import React from 'react'

const OurVision = () => {
  return (
    <div className='w-1/2 max-sm:w-full drop-shadow-md bg-white p-4 rounded-md flex flex-col gap-3'>
      <div className='flex justify-center items-center gap-2'>
        <Image src={icons.rocket} alt="our mission" />
        <span className='text-2xl text-primary font-semibold'>Our Vision</span>
      </div>
      <p className='text-gray-500 text-sm'>o build a world where every woman impacted by climate change has access to compassionate, personalized mental health care and utilizes cutting-edge technology in healthier communities worldwide</p>
    </div>
  )
}

export default OurVision
