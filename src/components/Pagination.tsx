"use client";

import Link from "next/link";

interface PaginationProps {
  page: number;
  totalPages: number;
}

export default function Pagination({ page, totalPages }: PaginationProps) {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
     
      <div className="hidden md:flex justify-center items-center gap-2">
    
        {page > 3 && (
          <>
            <Link
              href="?page=1"
              className="px-3 py-2 rounded border border-gray-300 bg-white hover:bg-gray-100 transition-colors"
            >
              1
            </Link>
            <span className="px-2 text-gray-400">...</span>
          </>
        )}

       
        {pageNumbers.map((pageNum) => (
          <Link
            key={pageNum}
            href={`?page=${pageNum}`}
            className={`px-4 py-2 rounded-lg border transition-colors font-medium ${
              pageNum === page 
                ? "bg-blue-600 text-white border-blue-600 shadow-sm" 
                : "bg-white border-gray-300 hover:bg-gray-50 hover:border-gray-400"
            }`}
          >
            {pageNum}
          </Link>
        ))}

      
        {page < totalPages - 2 && (
          <>
            <span className="px-2 text-gray-400">...</span>
            <Link
              href={`?page=${totalPages}`}
              className="px-3 py-2 rounded border border-gray-300 bg-white hover:bg-gray-100 transition-colors"
            >
              {totalPages}
            </Link>
          </>
        )}
      </div>

      
      <div className="md:hidden flex justify-center items-center gap-2 w-full">
        {pageNumbers.map((pageNum) => (
          <Link
            key={pageNum}
            href={`?page=${pageNum}`}
            className={`px-4 py-2 rounded-lg border transition-colors font-medium ${
              pageNum === page 
                ? "bg-blue-600 text-white border-blue-600 shadow-sm" 
                : "bg-white border-gray-300 hover:bg-gray-50 hover:border-gray-400"
            }`}
          >
            {pageNum}
          </Link>
        ))}
      </div>

     
     
    </div>
  );
}