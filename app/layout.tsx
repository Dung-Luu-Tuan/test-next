import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import CornerBackground from "@/components/CornerBackground";

export const metadata: Metadata = {
  title: "FOSO Blog - Cập Nhật Tin Tức Mới Nhất",
  description:
    "Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="relative font-sans">
        <CornerBackground />
        <Header />
        {children}
      </body>
    </html>
  );
}
