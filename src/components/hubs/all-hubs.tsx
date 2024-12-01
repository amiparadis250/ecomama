"use client";
interface Blog {
    id: string;
    title: string;
    description: string;
    photo_url: string;
    author: string;
    createdAt: string;
    updatedAt: string;
  }
  
  interface BlogResponse {
    message: string;
    data: Blog[];
  }
  
  // AllHubs.tsx
  import { useEffect, useState } from 'react';
  import { Button, Spin } from 'antd';
  import BlogCard from './hub-card';
  import { getAllBlogs } from '@/utils/axios/allblogs';
  import { CustomButton } from '../hubs/CustomButton';
  
  
  const AllHubs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await getAllBlogs();
          // Access the data array from the response
          setBlogs(response.data);
        } catch (error) {
          console.error("Error fetching blogs:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchBlogs();
    }, []);
  
    return (
      <div className="lg:px-20 max-sm:px-5 max-md:px-10 md:px-10 py-10">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-6 max-sm:text-center">Recent Hubs</h1>
          
        </div>
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <Spin size="large" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default AllHubs;