'use client';

import BlogHero from '@/components/BlogHero';
import BlogList from '@/components/BlogList';
import Breadcrumb from '@/components/Breadcrumb';
import Pagination from '@/components/Pagination';
import PromoSection from '@/components/FeaturedCard';
import SearchSection from '@/components/SearchSection';
import FeaturedCard from '@/components/FeaturedCard';

export default function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  // Get current page from URL query or default to 1
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  const totalPages = 10; // Example total pages

  const breadcrumbItems = [
    { label: 'Trang chủ', href: '/', isLast: false },
    { label: 'Tài nguyên', href: '/resources', isLast: false },
    { label: 'Blog', href: '/blog', isLast: true },
  ];

  return (
    <main className="min-h-screen">
      <Breadcrumb items={breadcrumbItems} />
      <BlogHero />

      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <BlogList />
          </div>
          <div className="lg:col-span-4">
            <SearchSection />
            <div className="mt-8">
              <FeaturedCard
                title="Miễn phí dùng thử"
                ctaLabel="Trải Nghiệm Ngay"
                ctaUrl="/demo"
                image1={{
                  src: '/laptop.png',
                  alt: 'Laptop',
                  width: 400,
                  height: 150,
                }}
                image2={{
                  src: '/robot.png',
                  alt: 'Robot',
                  width: 200,
                  height: 200,
                }}
                image3={{
                  src: '/mrp.png',
                  alt: 'MRP',
                  width: 200,
                  height: 200,
                }}
              />
              <FeaturedCard
                title="Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát triển!"
                ctaLabel="Trải Nghiệm Ngay"
                ctaUrl="/demo"
                image1={{
                  src: '/screen2.png',
                  alt: 'Screen',
                  width: 400,
                  height: 650,
                }}
              />
            </div>
          </div>
        </div>

        {/* Pagination outside the grid to span full width */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/blog/page"
        />
      </div>
    </main>
  );
}
