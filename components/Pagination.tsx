"use client";

import { memo } from "react";
import Link from "next/link";

type Props = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

const Pagination = (props: Props) => {
  const { currentPage, totalPages, basePath } = props;

  // Define visible page numbers
  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Add page 1
    pageNumbers.push(1);

    // Add page 2 if total pages are at least 2
    if (totalPages >= 2) {
      pageNumbers.push(2);
    }

    // Add page 3 if total pages are at least 3
    if (totalPages >= 3) {
      pageNumbers.push(3);
    }

    // Add ellipsis if total pages are more than 4
    if (totalPages > 4) {
      pageNumbers.push("...");
    }

    // Add pages 8, 9, 10 if total pages are at least 8, 9, 10
    if (totalPages >= 8) {
      pageNumbers.push(8);
    }

    if (totalPages >= 9) {
      pageNumbers.push(9);
    }

    if (totalPages >= 10) {
      pageNumbers.push(10);
    }

    return pageNumbers;
  };

  const pageNumbers = renderPageNumbers();

  return (
    <div className="w-full flex items-center justify-between py-8 mt-8 border-t border-gray-200">
      {/* Previous Page */}
      <Link
        href={currentPage > 1 ? `${basePath}/${currentPage - 1}` : "#"}
        className={`flex items-center text-sm ${
          currentPage === 1
            ? "text-gray-300 cursor-not-allowed"
            : "text-gray-500 hover:text-foso-green"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        Trang trước
      </Link>

      {/* Page Numbers */}
      <div className="flex space-x-1">
        {pageNumbers.map((page, index) =>
          page === "..." ? (
            <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-500">
              ...
            </span>
          ) : (
            <Link
              key={`page-${page}`}
              href={`${basePath}/${page}`}
              className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-sm ${
                currentPage === page
                  ? "bg-foso-green text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {page}
            </Link>
          )
        )}
      </div>

      {/* Next Page */}
      <Link
        href={currentPage < totalPages ? `${basePath}/${currentPage + 1}` : "#"}
        className={`flex items-center text-sm ${
          currentPage === totalPages
            ? "text-gray-300 cursor-not-allowed"
            : "text-gray-500 hover:text-foso-green"
        }`}
      >
        Trang kế tiếp
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
};

export default memo(Pagination);
