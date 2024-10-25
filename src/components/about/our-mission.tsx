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
      <p className='text-gray-500 text-sm'>ECO-MAMA empowers vulnerable women in Africa, particularly Rwanda, by providing accessible, AI-driven mental health support and education to address climate-induced stress. Through digital tools and the WOMEN WARRIORS Program, we train women to promote mental health resilience, reduce stigma, and raise awareness in their communities, aligning with SDG13 and SDG3.</p>
    </div>
  )
}

export default OurMission
