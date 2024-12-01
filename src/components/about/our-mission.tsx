import { icons } from '@/utils/constant/icons'
import Image from 'next/image'
import React from 'react'

const OurMission = () => {
  return (
    <div className='w-1/2 max-sm:w-full drop-shadow-md bg-white p-4 rounded-md flex flex-col gap-3'>
      <div className='flex justify-center items-center gap-2'>
        <Image src={icons.rocket} alt="our mission" />
        <span className='text-2xl text-primary font-semibold'>Our Mission</span>
      </div>
      <p className='text-gray-500 text-sm'>To empower women by providing accessible, innovative, ensuring early intervention, individualized treatment, and a supportive community to improve well-being and resilience</p>
    </div>
  )
}

export default OurMission
