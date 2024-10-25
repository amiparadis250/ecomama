import { allBlogs as blogs } from '@/utils/constant/blogs/blogs'
import { Button } from 'antd'
import React from 'react'
import BlogCard from './hub-card'

const AllHubs = () => {
    return (
        <div className='lg:px-20 max-sm:px-5 max-md:px-10 md:px-10 py-10'>
            <div className='w-full flex justify-between items-center'>
                <h1 className='text-2xl font-bold mb-6 max-sm:text-center'>Recent Hubs</h1>
                <Button type="primary" className='custom-btn' style={{ padding: '20px 45px', boxShadow: 'none', background: '#ffff', color: '#004fb6', border: '2px solid #004fb6', fontWeight: "normal" }}>View All</Button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {blogs.map((blog, index) => (
                    <BlogCard key={index} blog={blog} />
                ))}
            </div>
        </div>
    )
}

export default AllHubs
