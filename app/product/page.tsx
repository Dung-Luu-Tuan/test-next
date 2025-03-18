import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/Header";
import BlogHero from "@/components/BlogHero";
import BlogList from "@/components/BlogList";
import SearchSection from "@/components/SearchSection";
import PromoSection from "@/components/PromoSection";
import Pagination from "@/components/Pagination";

export default function ProductPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  // Get current page from URL query or default to 1
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  const totalPages = 10; // Example total pages

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/", isLast: false },
    { label: "Tài nguyên", href: "/resources", isLast: false },
    { label: "Blog", href: "/blog", isLast: false },
    { label: "Quản lí sản xuất", href: "/blog", isLast: true },
  ];

  return (
    <main className="min-h-screen">
      <Breadcrumb items={breadcrumbItems} />
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8"></div>
          <div className="lg:col-span-4">
            <SearchSection />
            <div className="mt-8">
              <PromoSection />
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
