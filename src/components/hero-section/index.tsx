import Image from 'next/image';
import React from 'react';
import showcase from '@/assets/svg/showcase.svg';
import arrow from '@/assets/svg/arrow_outward.svg';
import { Button } from 'antd';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='lg:mx-20 max-sm:mx-5 max-md:mx-10 md:mx-10 flex justify-between sm:flex-col md:flex-row lg:flex-row'>
      <div className='w-[50%] max-sm:w-full md:w-[50%] flex flex-col justify-center gap-10'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-bold text-primary max-md:text-center'>
            <span className='text-4xl'>ECO-MAMA </span>
            Empowering Women’s Mental Health During Climate Change
          </h1>
          <p className='text-sm text-gray-500'>
            ECO-MAMA is a digital health platform that helps vulnerable women to cope with the psychological impact of climate change. By utilizing AI-driven mental health assessments and telepsychiatry, ECO-MAMA provides localized mental health support, while the WOMEN WARRIORS Program empowers women to become advocates for mental health resilience in their communities.
          </p>
        </div>  
        <div className='flex gap-10 flex-wrap max-sm:gap-4'>
          <Link href="/contacts" passHref>
            <Button type="primary" className='custom-btn' style={{ padding: '20px 45px', boxShadow: 'none' }}>
              Get In Touch
            </Button>
          </Link>
          <Link href="/about" passHref>
            <Button type="link">
              Learn More <Image src={arrow} alt='arrow' />
            </Button>
          </Link>
        </div>
        <div className='flex justify-between flex-wrap'>
          <div className='flex gap-2 items-center'>
            <span className='text-5xl font-bold text-primary'>300+</span>
            <div className='flex flex-col text-sm text-gray-500'>
              <span>Women</span>
              <span>Helped</span>
            </div>
          </div>
          <div className='flex gap-2 items-center'>
            <span className='text-5xl font-bold text-primary'>75+</span>
            <div className='flex flex-col text-sm text-gray-500'>
              <span>Place</span>
              <span>Visited</span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[50%] max-sm:hidden flex justify-end'>
        <Image src={showcase} alt='showcase' width={550} className='max-md:w-96' />
      </div>
    </div>
  )
}

export default Hero;
