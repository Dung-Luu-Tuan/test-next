"use client";

import { memo, useState } from "react";
import Link from "next/link";

type CategoryType = {
  name: string;
  count: number;
  href: string;
};

type Props = {};

const SearchSection = (props: Props) => {
  const {} = props;
  const [searchQuery, setSearchQuery] = useState("");

  // Sample categories data - in a real app, this would come from an API
  const categories: CategoryType[] = [
    { name: "Tất cả", count: 108, href: "/blog" },
    { name: "Thiết Kế Website", count: 36, href: "/blog/web-design" },
    { name: "Thiết Kế App Mobile", count: 13, href: "/blog/mobile-design" },
    {
      name: "Quản Lý Sản Xuất",
      count: 25,
      href: "/blog/production-management",
    },
    { name: "Quản Lý Bán Hàng", count: 22, href: "/blog/sales-management" },
    { name: "Báo Chí Nói Về FOSO", count: 7, href: "/blog/press" },
    { name: "Tin Tức FOSO", count: 5, href: "/blog/news" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger a search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="space-y-8">
      {/* Search Section */}
      <div>
        <h3 className="text-xl font-bold mb-4">Tìm Kiếm</h3>
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            placeholder="Tìm kiếm bài viết"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-foso-green"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-foso-green text-white px-4 py-2 rounded-r-md hover:bg-opacity-90"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>
      </div>

      {/* Categories Section */}
      <div>
        <h3 className="text-xl font-bold mb-4">Danh Mục</h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="flex justify-between items-center py-2 px-3 rounded hover:bg-gray-100 w-full"
            >
              <span>{category.name}</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(SearchSection);
