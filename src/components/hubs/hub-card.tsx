import { Clock4 } from 'lucide-react';
import Image from 'next/image';
import { format } from 'date-fns';
import Link from 'next/link';

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
interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  const formattedDate = format(new Date(blog.createdAt), 'MMM dd, yyyy');

  // Calculate read time based on description length (since content isn't in the response)
  const readTime = Math.ceil((blog.description?.split(' ').length || 0) / 200);

  return (
    <Link href={`/hubs/${blog.id}`} passHref>
    <div className="p-4 shadow-lg bg-white rounded-2xl max-w-sm w-full">
      <div className="relative w-full h-40">
        <Image
          src={blog.photo_url}
          alt={blog.title}
          fill
          className="rounded-xl object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex gap-2 items-center">
          <Clock4 className="stroke-gray-500 w-4 h-4" />
          <span className="text-gray-500 text-sm">{readTime} min read</span>
        </div>
        <h2 className="text-gray-700 font-semibold text-sm line-clamp-2">
          {blog.title}
        </h2>
        <p className="text-gray-500 text-sm line-clamp-3">
          {blog.description}
        </p>
        <div className="flex gap-2 items-center mt-2">
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">{blog.author}</span>
            <span className="text-gray-400 text-xs">{formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default BlogCard;