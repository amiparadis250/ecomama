// app/hubs/[id]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Clock4, Calendar, User } from 'lucide-react';
import { format } from 'date-fns';
import { Spin } from "antd";

interface Blog {
  id: string;
  title: string;
  description: string;
  photo_url: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

export default function BlogPage({ params }: { params: { id: string } }) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://ecomama-be.onrender.com/api/hubs/${params.id}`);
        const data = await response.json();
        setBlog(data.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
       <Spin size="large" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Blog not found</h1>
      </div>
    );
  }

  const readTime = Math.ceil((blog.description?.split(' ').length || 0) / 200);
  const formattedDate = format(new Date(blog.createdAt), 'MMMM dd, yyyy');

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {blog.title}
        </h1>
        
        {/* Meta information */}
        <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock4 className="w-4 h-4" />
            <span>{readTime} min read</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative w-full h-[400px] mb-8">
        <Image
          src={blog.photo_url}
          alt={blog.title}
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="prose max-w-none">
        {/* Convert newlines to paragraphs */}
        {blog.description.split('\n\n').map((paragraph, index) => (
          paragraph.trim() && (
            <p key={index} className="text-gray-700 mb-4 leading-relaxed">
              {paragraph}
            </p>
          )
        ))}
      </div>

      {/* Share buttons or related content could go here */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Share this article</h2>
        <div className="flex gap-4">
          {/* Add your social share buttons here */}
        </div>
      </div>
    </article>
  );
}