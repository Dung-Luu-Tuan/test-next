"use client";

import { memo } from "react";
import Link from "next/link";
import BlogCard from "./BlogCard";
import Image from "next/image";

type Props = {};

const BlogList = (props: Props) => {
  const {} = props;

  // Sample blog posts data - in a real app, this would come from an API
  const blogPosts = [
    {
      id: 1,
      title: "Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!",
      imageUrl: "/bom.png",
      category: "Cộng đồng",
      ctaLabel: "Tham Gia Ngay",
      ctaUrl: "/product",
      type: "featured",
    },
    {
      id: 2,
      title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
      imageUrl: "/bom.png",
      category: "Quản Lý Sản Xuất",
      date: "17/11/2022",
      readTime: "10 phút đọc",
      ctaLabel: "Khám phá thêm",
      ctaUrl: "/product",
      type: "regular",
    },
    {
      id: 3,
      title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
      imageUrl: "/bom.png",
      category: "Quản Lý Sản Xuất",
      date: "17/11/2022",
      readTime: "10 phút đọc",
      ctaLabel: "Khám phá thêm",
      ctaUrl: "/product",
      type: "regular",
    },
    {
      id: 4,
      title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
      imageUrl: "/bom.png",
      category: "Quản Lý Sản Xuất",
      date: "17/11/2022",
      readTime: "10 phút đọc",
      ctaLabel: "Khám phá thêm",
      ctaUrl: "/product",
      type: "regular",
    },
    {
      id: 5,
      title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
      imageUrl: "/bom.png",
      category: "Quản Lý Sản Xuất",
      date: "17/11/2022",
      readTime: "10 phút đọc",
      ctaLabel: "Khám phá thêm",
      ctaUrl: "/product",
      type: "regular",
    },
    {
      id: 6,
      title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
      imageUrl: "/bom.png",
      category: "Quản Lý Sản Xuất",
      date: "17/11/2022",
      readTime: "10 phút đọc",
      ctaLabel: "Khám phá thêm",
      ctaUrl: "/product",
      type: "regular",
    },
    {
      id: 7,
      title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
      imageUrl: "/bom.png",
      category: "Quản Lý Sản Xuất",
      date: "17/11/2022",
      readTime: "10 phút đọc",
      ctaLabel: "Khám phá thêm",
      ctaUrl: "/product",
      type: "regular",
    },
  ];

  // Featured blog post (first one)
  const featuredPost = blogPosts.find((post) => post.type === "featured");

  // Regular blog posts
  const regularPosts = blogPosts.filter((post) => post.type === "regular");

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-8">Tất Cả Bài Viết</h2>

      {/* Featured Post */}
      {featuredPost && (
        <div className="bg-foso-blue rounded-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {featuredPost.title}
              </h3>
              <Link
                href={featuredPost.ctaUrl}
                className="border border-white text-white rounded-full py-2 px-6 inline-flex items-center w-fit mt-4 font-medium transition duration-300 hover:bg-white hover:text-foso-blue"
              >
                {featuredPost.ctaLabel}
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="relative h-48 md:h-auto bg-foso-blue bg-opacity-30 mt-16">
              {/* Decorative elements to simulate an image */}
              <div className="absolute inset-0 flex justify-center items-center">
                <Image
                  alt="screen"
                  src="/screen.png"
                  width={554}
                  height={268}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Regular Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {regularPosts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            imageUrl={post.imageUrl}
            category={post.category}
            date={post.date}
            readTime={post.readTime}
            ctaLabel={post.ctaLabel}
            ctaUrl={post.ctaUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(BlogList);
