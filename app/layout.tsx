import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

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
      <body className="font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
