"use client";

import { memo } from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  imageUrl: string;
  category: string;
  date?: string;
  readTime?: string;
  ctaLabel: string;
  ctaUrl: string;
};

const BlogCard = (props: Props) => {
  const { title, imageUrl, category, date, readTime, ctaLabel, ctaUrl } = props;

  return (
    <div className="overflow-hidden">
      <div className="relative h-auto">
        <Image alt="calendar" src={imageUrl} width={505} height={400} />
        <div className="absolute top-4 left-4">
          <span className="bg-foso-blue text-white py-1 rounded text-xs">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6 pl-0">
        <h3 className="text-xl font-bold mb-4">{title}</h3>

        {date && readTime && (
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <div className="flex items-center mr-4">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{readTime}</span>
            </div>
          </div>
        )}

        <Link
          href={ctaUrl}
          className="font-medium text-gray-500 flex items-center hover:underline"
        >
          {ctaLabel}
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default memo(BlogCard);
