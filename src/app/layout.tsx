import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "박다정 | Frontend Developer",
  description: "사용자 중심의 경험과 깔끔한 코드를 고민하는 프론트엔드 개발자 박다정입니다.",
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
