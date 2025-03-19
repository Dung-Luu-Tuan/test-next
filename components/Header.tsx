"use client";

import { memo } from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  const {} = props;

  return (
    <header className="py-4 bg-transparent">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="w-full max-w-screen-xl bg-white rounded-full shadow-lg flex items-center justify-between px-[150px] py-1">
          <Link href="/" className="flex items-center py-3">
            <Image src="/logo.png" alt="Logo" width={135} height={55} />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="nav-link">
              Về Chúng tôi
            </Link>
            <div className="relative group">
              <Link href="/solutions" className="nav-link flex items-center">
                Giải pháp
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="/resources"
                className="nav-link flex items-center font-bold"
              >
                <div className="relative flex items-center">
                  <span className="text-black">Tài nguyên</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
            </div>
            <Link href="/contact" className="nav-link">
              Liên hệ
            </Link>
          </nav>

          {/* Right actions */}
          <div className="flex items-center space-x-4">
            <div className="bg-gray-100 rounded-full flex items-center px-3 py-2">
              <Image
                className="pr-3"
                src="/flag.png"
                alt="Logo"
                width={35}
                height={35}
              />
              <span className="text-sm font-medium">VI</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <Link
              href="/register"
              className="btn-primary bg-[#1AD598] flex justify-center items-center gap-3 text-[#052B1E] font-bold"
            >
              <span>Trở Thành Khách Hàng</span>
              <Image
                className="pr-3"
                src="/right-up.png"
                alt="Logo"
                width={35}
                height={35}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
