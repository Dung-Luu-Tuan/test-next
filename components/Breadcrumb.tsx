"use client";

import { memo } from "react";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href: string;
  isLast: boolean;
};

type Props = {
  items: BreadcrumbItem[];
};

const Breadcrumb = (props: Props) => {
  const { items } = props;

  return (
    <div className="w-fit container mx-auto px-4 py-4">
      <div className="flex items-center text-sm text-gray-600">
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            {item.isLast ? (
              <span className="font-semibold">{item.label}</span>
            ) : (
              <>
                <Link href={item.href} className="hover:text-foso-green">
                  {item.label}
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mx-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Breadcrumb);
