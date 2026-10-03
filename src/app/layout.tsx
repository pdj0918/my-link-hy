import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "박다정 | 프론트엔드 개발자",
  description: "사용자 중심의 가치를 만드는 프론트엔드 개발자 박다정의 링크 프로필입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="antialiased min-h-screen bg-[#F9FAFB] text-[#191F28]">
        {children}
      </body>
    </html>
  );
}
