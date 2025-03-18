"use client";

import Image from "next/image";
import { memo } from "react";

type Props = {};

const BlogHero = (props: Props) => {
  const {} = props;

  return (
    <div className="py-10 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center items-center">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-4">
              Blog <span className="text-foso-green2">FOSO</span> -
              <div className="mt-2">
                Cập Nhật Tin Tức{" "}
                <span className="relative inline-block font-bold">
                  Mới Nhất
                  <span className="absolute left-0 bottom-0 w-full h-6 bg-[#A3F3DD] rounded-full -z-10"></span>
                </span>
              </div>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mt-6">
              Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
            </p>
          </div>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 md:bottom-auto md:top-1/2 md:transform md:-translate-y-1/2 opacity-70 md:opacity-100">
        <div className="w-32 h-32 md:w-48 md:h-48 relative">
          <Image
            alt="calendar"
            src="/calendar-icon.png"
            width={282}
            height={268}
          />
        </div>
      </div>

      <div className="absolute right-0 bottom-0 md:bottom-auto md:top-1/2 md:transform md:-translate-y-1/2 opacity-70 md:opacity-100">
        <div className="w-32 h-32 md:w-48 md:h-48 relative">
          <Image alt="hand" src="/hand-pencil.png" width={282} height={268} />
        </div>
      </div>
    </div>
  );
};

export default memo(BlogHero);
