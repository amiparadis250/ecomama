import { images } from '@/utils/constant/images'
import Image from 'next/image'
import React from 'react'

const Showcase = () => {
  return (
      <div className='lg:px-20 max-sm:px-5 max-md:px-10 md:px-10 py-10'>
      <Image src={images.aboutShowcase} alt="showcase" />
    </div>
  )
}

export default Showcase
