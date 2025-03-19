'use client';

import { useState } from 'react';

const contents = [
  { title: 'Quy trình 5S là gì?', href: '#section1' },
  { title: 'Lợi ích quy trình 5S đem lại', href: '#section2' },
  { 
    title: 'Tại sao doanh nghiệp nên áp dụng quy trình 5S?', href: '#section3', children: [
      { title: 'Cải thiện rõ nét môi trường làm việc', href: '#section3-1' },
      { title: 'Tiết kiệm thời gian đáng kể', href: '#section3-2' },
      { title: 'Tăng năng suất làm việc', href: '#section3-3' },
      { title: 'Tiết kiệm chi phí', href: '#section3-4' },
      { title: 'Tăng chất lượng sản phẩm', href: '#section3-5' },
    ]
  },
  { 
    title: 'Quy trình 5S gồm các bước:', href: '#section4', children: [
      { title: 'Seiri (Ngăn nắp)', href: '#section4-1' },
      { title: 'Seiton (Sắp xếp)', href: '#section4-2' },
      { title: 'Seiso (Vệ sinh)', href: '#section4-3' },
      { title: 'Seiketsu (Tiêu chuẩn hóa)', href: '#section4-4' },
      { title: 'Shitsuke (Kỷ luật)', href: '#section4-5' },
    ]
  },
  { 
    title: 'Quy trình được thực hiện như sau:', href: '#section5', children: [
      { title: 'Giai đoạn chuẩn bị', href: '#section5-1' },
      { title: 'Triển khai rộng rãi', href: '#section5-2' },
      { title: 'Thực hiện vệ sinh toàn bộ doanh nghiệp', href: '#section5-3' },
      { title: 'Sàng lọc, sắp xếp và đánh giá', href: '#section5-4' },
      { title: 'Đánh giá', href: '#section5-5' },
    ]
  },
  { title: 'Quy trình 5S có giống với Kaizen?', href: '#section6' },
  { title: 'Đối tượng nào nên áp dụng 5S', href: '#section7' },
  { title: 'Các yếu tố tạo nên thành công cho quy trình 5S', href: '#section8' },
];

export default function TableOfContents() {
  const [open, setOpen] = useState(true);

  return (
    <div className="p-4">
      <div 
        className="flex justify-between items-center cursor-pointer mb-4"
        onClick={() => setOpen(!open)}
      >
        <h3 className="font-semibold text-gray-800">Nội Dung Bài Viết</h3>
        <span className="ml-2">
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transform rotate-180"
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
          )}
        </span>
      </div>

      {open && (
        <ul className="space-y-2 text-sm">
          {contents.map((item, index) => (
            <li key={index}>
              <a href={item.href} className={`text-gray-800 hover:text-green-600`}>
                {index + 1}. {item.title}
              </a>
              {item.children && (
                <ul className="pl-4 mt-1 space-y-1 text-gray-700">
                  {item.children.map((child, idx) => (
                    <li key={idx}>
                      <a href={child.href} className="hover:text-green-500">
                        {index + 1}.{idx + 1} {child.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
