"use client";

import { memo } from "react";
import BlogList from "./BlogList";
import Pagination from "./Pagination";

type Props = {
  currentPage: number;
  totalPages: number;
};

const BlogSection = (props: Props) => {
  const { currentPage, totalPages } = props;

  return (
    <div className="w-full">
      <BlogList />

      {/* Add some space before the pagination */}
      <div className="mt-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/blog/page"
        />
      </div>
    </div>
  );
};

export default memo(BlogSection);
