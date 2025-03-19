'use client';

import Link from 'next/link';
import Image from 'next/image';

type BlogPost = {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
  date: string;
  readTime: string;
  ctaLabel: string;
  ctaUrl: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Tại sao BOM quan trọng trong quản lý sản xuất?',
    imageUrl: '/bom.png',
    category: 'Quản Lý Sản Xuất',
    date: '17/11/2022',
    readTime: '10 phút đọc',
    ctaLabel: 'Khám phá thêm',
    ctaUrl: '/blog/bom-management',
  },
  {
    id: 2,
    title: 'Tại sao BOM quan trọng trong quản lý sản xuất?',
    imageUrl: '/bom.png',
    category: 'Quản Lý Sản Xuất',
    date: '17/11/2022',
    readTime: '10 phút đọc',
    ctaLabel: 'Khám phá thêm',
    ctaUrl: '/blog/bom-importance',
  },
  {
    id: 3,
    title: 'Tại sao BOM quan trọng trong quản lý sản xuất?',
    imageUrl: '/bom.png',
    category: 'Quản Lý Sản Xuất',
    date: '17/11/2022',
    readTime: '10 phút đọc',
    ctaLabel: 'Khám phá thêm',
    ctaUrl: '/blog/bom-importance',
  },
];

export default function RelatedPosts() {
  return (
    <div className="w-full my-12">
      <h2 className="text-2xl font-bold mb-6">Bài Viết Liên Quan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="overflow-hidden">
            <Link href={post.ctaUrl}>
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </Link>
            <div className="pt-4">
              <Link
                href={post.ctaUrl}
                className="block text-base font-semibold mb-2"
              >
                {post.title}
              </Link>
              <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <Link
                href={post.ctaUrl}
                className="text-sm text-gray-500 font-medium hover:underline"
              >
                {post.ctaLabel}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
