"use client";

import React, { useState } from "react";

interface LinkItem {
  id: string;
  category: "all" | "social" | "project" | "contact";
  title: string;
  subtitle: string;
  url: string;
  badge?: string;
  iconType: "github" | "velog" | "project" | "instagram" | "email";
  isCopyAction?: boolean;
}

const linkItems: LinkItem[] = [
  {
    id: "github",
    category: "social",
    title: "GitHub 저장소",
    subtitle: "진행했던 오픈소스 프로젝트와 개발 코드를 확인해보세요",
    url: "https://github.com/pdj0918",
    badge: "업데이트",
    iconType: "github",
  },
  {
    id: "velog",
    category: "social",
    title: "기술 블로그 (Velog)",
    subtitle: "개발 중 마주친 문제와 문제 해결 과정을 기록해요",
    url: "https://velog.io",
    iconType: "velog",
  },
  {
    id: "project",
    category: "project",
    title: "My-LinkHY 프로필 프로젝트",
    subtitle: "Next.js 15와 토스 디자인 시스템(TDS)으로 구축된 웹 콘솔",
    url: "https://github.com/pdj0918/my-link-hy",
    badge: "v2.0",
    iconType: "project",
  },
  {
    id: "instagram",
    category: "social",
    title: "인스타그램",
    subtitle: "개발자의 일상과 기록을 사진으로 공유해요",
    url: "https://instagram.com",
    iconType: "instagram",
  },
  {
    id: "email",
    category: "contact",
    title: "이메일 보내기",
    subtitle: "p29522295@gmail.com (클릭 시 주소 복사)",
    url: "mailto:p29522295@gmail.com",
    badge: "빠른 답변",
    iconType: "email",
    isCopyAction: true,
  },
];

const techBadges = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "UI/UX Design",
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      showToast("프로필 링크가 복사되었어요");
    }
  };

  const handleItemClick = async (item: LinkItem, e: React.MouseEvent) => {
    if (item.isCopyAction) {
      e.preventDefault();
      if (navigator.clipboard) {
        await navigator.clipboard.writeText("p29522295@gmail.com");
        showToast("이메일 주소가 클립보드에 복사되었어요");
      }
      setTimeout(() => {
        window.location.href = item.url;
      }, 400);
    }
  };

  const filteredItems =
    selectedCategory === "all"
      ? linkItems
      : linkItems.filter((item) => item.category === selectedCategory);

  const renderIcon = (type: LinkItem["iconType"]) => {
    switch (type) {
      case "github":
        return (
          <svg className="w-5 h-5 text-[#191F28]" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        );
      case "velog":
        return (
          <svg className="w-5 h-5 text-[#20C997]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        );
      case "project":
        return (
          <svg className="w-5 h-5 text-[#3182F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case "instagram":
        return (
          <svg className="w-5 h-5 text-[#E1306C]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case "email":
        return (
          <svg className="w-5 h-5 text-[#3182F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col justify-between items-center selection:bg-blue-100 selection:text-[#3182F6]">
      {/* 최상단 네비게이션 바 (TopBar) */}
      <header className="w-full bg-white border-b border-[#F2F4F6] sticky top-0 z-30 flex justify-center">
        <div className="w-full max-w-lg h-14 px-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#3182F6] flex items-center justify-center text-white text-xs font-bold">
              DJ
            </div>
            <span className="text-[17px] font-semibold text-[#191F28] tracking-tight">
              박다정 프로필
            </span>
          </div>

          <button
            onClick={handleShare}
            aria-label="링크 공유하기"
            className="w-9 h-9 rounded-full bg-[#F2F4F6] active:bg-[#E5E8EB] flex items-center justify-center transition-colors text-[#4E5968]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>
      </header>

      {/* 메인 콘텐츠 영역 (모바일 앱 스타일 max-w-lg) */}
      <main className="w-full max-w-lg px-5 pt-8 pb-32 flex-1">
        {/* 프로필 헤더 카드 */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#F2F4F6] mb-4">
          <div className="flex items-start justify-between">
            <div className="w-16 h-16 rounded-full bg-[#EBF3FE] flex items-center justify-center border border-[#C9DFFB]">
              <span className="text-xl font-bold text-[#3182F6]">다정</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3FE] text-[#3182F6] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#3182F6]"></span>
              커피챗 환영
            </div>
          </div>

          <div className="mt-4">
            <h1 className="text-2xl font-bold text-[#191F28] tracking-tight">
              박다정
            </h1>
            <p className="text-[15px] font-medium text-[#4E5968] mt-1">
              Frontend Developer
            </p>
            <p className="text-[14px] text-[#6B7684] mt-2 leading-relaxed">
              복잡한 비즈니스 로직을 사용자가 직관적으로 이해할 수 있는 웹 인터페이스로 설계하고 개발합니다.
            </p>
          </div>

          {/* 주요 기술 스택 태그 */}
          <div className="mt-5 pt-4 border-t border-[#F2F4F6]">
            <span className="text-xs font-medium text-[#8B95A1] block mb-2">
              주요 기술 스택
            </span>
            <div className="flex flex-wrap gap-1.5">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-[#F2F4F6] text-[#4E5968] text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 카테고리 필터 칩 */}
        <div className="flex gap-2 py-3 overflow-x-auto no-scrollbar mb-2">
          {[
            { id: "all", label: "전체" },
            { id: "social", label: "소셜 & 기록" },
            { id: "project", label: "프로젝트" },
            { id: "contact", label: "연락처" },
          ].map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`h-9 px-4 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#191F28] text-white shadow-sm"
                    : "bg-[#F2F4F6] text-[#4E5968] active:bg-[#E5E8EB]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 리스트 로우 (TDS List-Rows 형태) */}
        <section className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#F2F4F6]">
          {filteredItems.map((item, idx) => (
            <a
              key={item.id}
              href={item.url}
              target={item.isCopyAction ? "_self" : "_blank"}
              rel="noopener noreferrer"
              onClick={(e) => handleItemClick(item, e)}
              className={`flex items-center justify-between p-4 transition-colors active:bg-[#F9FAFB] ${
                idx !== filteredItems.length - 1 ? "border-b border-[#F2F4F6]" : ""
              }`}
            >
              <div className="flex items-center gap-3.5 flex-1 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-[#F2F4F6] flex items-center justify-center shrink-0">
                  {renderIcon(item.iconType)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[15px] font-semibold text-[#191F28] truncate">
                      {item.title}
                    </span>
                    {item.badge && (
                      <span className="px-1.5 py-0.5 rounded text-[11px] font-semibold bg-[#EBF3FE] text-[#3182F6]">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[13px] text-[#8B95A1] truncate mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* 오른쪽 chevron-right */}
              <div className="text-[#B0B8C1] shrink-0 ml-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </section>

        {/* 안내 카드 */}
        <div className="mt-4 p-4 rounded-xl bg-[#F2F4F6] text-center">
          <p className="text-xs text-[#6B7684]">
            궁금한 점이나 함께하고 싶은 프로젝트가 있다면 편하게 연락해주세요.
          </p>
        </div>
      </main>

      {/* 하단 고정 액션 버튼 (TDS button-primary 1-Action Rule) */}
      <footer className="fixed bottom-0 left-0 right-0 z-20 flex justify-center pointer-events-none">
        <div className="w-full max-w-lg p-5 pointer-events-auto bg-gradient-to-t from-white via-white/90 to-transparent pt-6">
          <a
            href="mailto:p29522295@gmail.com"
            className="flex items-center justify-center h-14 w-full rounded-2xl bg-[#3182F6] active:brightness-95 active:scale-[0.98] transition-all text-white font-semibold text-[17px] shadow-sm tracking-tight"
          >
            이메일로 커피챗 제안하기
          </a>
        </div>
      </footer>

      {/* 토스트 메시지 (TDS Toast) */}
      {toastMessage && (
        <div className="fixed top-16 z-50 transition-all duration-200">
          <div className="bg-[#333D4B] text-white px-5 py-3 rounded-2xl shadow-lg text-sm font-medium flex items-center gap-2">
            <svg className="w-4 h-4 text-[#3182F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}
