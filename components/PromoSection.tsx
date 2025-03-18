"use client";

import Image from "next/image";
import { memo } from "react";

type Props = {};

const PromoSection = (props: Props) => {
  const {} = props;

  return (
    <div className="flex flex-col gap-8 container mx-auto px-4 py-12">
      <Image alt="calendar" src="/banner1.png" width={400} height={650} />
      <Image alt="calendar" src="/banner2.png" width={400} height={650} />
    </div>
  );
};

export default memo(PromoSection);
