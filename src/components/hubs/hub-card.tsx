import { Clock4 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const BlogCard = ({ blog }:any) => {
    return (
        <div className='p-4 shadow-lg bg-white drop-shadow-md rounded-2xl max-w-sm w-full'>
            <Image
                src={blog.cover}
                alt='cover'
                width={400}
                height={140}
                className='rounded-xl w-full object-cover h-40'
            />
            <div className='flex flex-col gap-2 mt-2'>
                <div className='flex gap-2 items-center'>
                    <Clock4 className='stroke-gray-500 w-4 h-4' />
                    <span className='text-gray-500 text-sm'>4 min read</span>
                </div>
                <h1 className='text-gray-700 font-semibold text-sm'>{blog.title}</h1>
                <p className='text-gray-500 text-xs'>{blog.description}</p>
                <div className='flex gap-2 items-center mt-2'>
                    <Image
                        src={blog.author.image}
                        alt='author'
                        className='rounded-full w-8 h-8 object-cover'
                    />
                    <div className='flex flex-col'>
                        <span className='text-gray-500 text-xs'>{blog.author.name}</span>
                        <span className='text-gray-400 text-[.6em]'>{blog.createdAt}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
