import React from "react";

interface SocialLink {
  id: string;
  title: string;
  url: string;
  icon?: string;
  description?: string;
}

const socialLinks: SocialLink[] = [
  {
    id: "1",
    title: "GitHub",
    url: "https://github.com",
    description: "개발 프로젝트 & 학습 기록",
    icon: "💻",
  },
  {
    id: "2",
    title: "기술 블로그",
    url: "https://velog.io",
    description: "배운 것을 기록하고 공유하는 공간",
    icon: "📝",
  },
  {
    id: "3",
    title: "인스타그램",
    url: "https://instagram.com",
    description: "일상 & 캠퍼스 라이프",
    icon: "📸",
  },
  {
    id: "4",
    title: "이메일 보내기",
    url: "mailto:contact@example.com",
    description: "언제든 편하게 연락주세요!",
    icon: "✉️",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm mx-auto flex flex-col items-center text-center">
        {/* 프로필 이미지 / 아바타 */}
        <div className="relative mb-6">
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-sky-400 via-indigo-400 to-pink-400 p-1 shadow-lg shadow-sky-500/10">
            <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-4xl select-none">
              🌸
            </div>
          </div>
          <span className="absolute bottom-1 right-2 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" />
        </div>

        {/* 이름 & 태그 */}
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
          박다정
        </h1>
        <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 mt-1 tracking-wide uppercase">
          Frontend Developer · @dajeong
        </p>

        {/* 소개글 */}
        <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-xs break-keep">
          사용자 중심의 경험과 깔끔한 코드를 고민하는 개발자입니다. 새로운 기술을 탐구하고 아이디어를 실제 프로덕트로 만드는 과정을 좋아합니다. ✨
        </p>

        {/* 관심사 태그 */}
        <div className="flex flex-wrap gap-1.5 justify-center mt-4">
          <span className="px-2.5 py-1 bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-300 rounded-full text-xs font-medium">
            #Frontend
          </span>
          <span className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 rounded-full text-xs font-medium">
            #React / Next.js
          </span>
          <span className="px-2.5 py-1 bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-300 rounded-full text-xs font-medium">
            #UI/UX
          </span>
          <span className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-300 rounded-full text-xs font-medium">
            #기록과성장
          </span>
        </div>

        {/* 구분선 */}
        <div className="w-16 h-px bg-slate-200 dark:bg-slate-800 my-6" />

        {/* 링크 목록 */}
        <div className="w-full space-y-3">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center p-3.5 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-md hover:border-sky-400 dark:hover:border-sky-400 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-xl mr-3 flex-shrink-0">{link.icon}</span>
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {link.title}
                </p>
                {link.description && (
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {link.description}
                  </p>
                )}
              </div>
              <svg
                className="w-4 h-4 text-slate-400 group-hover:text-sky-500 group-hover:translate-x-0.5 transition-all flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          ))}
        </div>

        {/* 하단 푸터 */}
        <footer className="mt-12 text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} 박다정. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
