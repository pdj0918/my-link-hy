import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "박다정 | Nintendo 2001 Console Hardware Edition",
  description: "Nintendo.com circa 2001 Console Hardware Chrome — 프론트엔드 개발자 박다정의 링크 스테이션",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
