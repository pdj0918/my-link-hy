# 💙 My-LinkHY — Toss Design System (TDS) Edition

> **"은행에 다니는 유능한 친구 — 차분하고 효율적인, 군더더기 없는 웹 경험"**  
> 프론트엔드 개발자 **박다정(Park Dajeong)** 의 토스 디자인 시스템(TDS) 기반 링크 프로필입니다.

---

## ✨ Overview & Concept

토스(Toss)의 핵심 디자인 철학인 **간결성(Simplicity)**, **명확한 정보 위계(Clear Hierarchy)**, **단 하나의 주 액션(Single CTA Rule)** 을 모던 프론트엔드 기술(Next.js 15, TypeScript, Tailwind CSS)로 정밀하게 구현한 모바일 퍼스트 프로필 웹 애플리케이션입니다.

* **Flat Canvas & Cool Greys**: 순수 화이트(`bg-white`)와 쿨 그레이 계열(`grey-50`, `grey-100`, `grey-900`)을 기반으로 데이터 잉크 비율을 극대화
* **Toss Blue (`#3182F6`) 단일 강조 원칙**: 화면당 가장 핵심적인 하나의 액션에만 시그니처 블루 색상 적용
* **부드러운 곡률(Aggressive Rounding)**: 16px/20px의 넉넉한 모서리 곡률과 999px 풀 필(Pill) 칩 시스템
* **Pretendard 타이포그래피**: 가독성이 뛰어난 한국어 본문 시스템 폰트 적용
* **해요체 톤앤매너**: 친절하고 명확한 대화형 어조 사용

---

## 🚀 Key Features

* **TDS TopBar (56px)**: 미니멀 헤더 및 원터치 URL 공유 기능
* **프로필 헤더 카드**: 아바타, 직무 소개, 현재 협업 상태 뱃지, 보유 기술 스택 태그
* **카테고리 필터 칩 (TDS Chips)**: 전체 / 소셜 & 기록 / 프로젝트 / 연락처 필터링 지원
* **TDS List-Rows 링크 리스트**:
  * 둥근 라인 아이콘 컨테이너
  * GitHub, Velog 기술 블로그, 프로젝트 소스, 인스타그램
  * 이메일 원클릭 클립보드 복사
* **Floating Primary CTA (56px)**: 하단 그라디언트 보호 레이어 위의 고정형 이메일 제안 버튼
* **TDS 토스트 피드백**: 링크 복사 및 이메일 복사 시 즉각적인 시각적 알림 제공

---

## 🛠️ Tech Stack

* **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
* **Library**: [React 19](https://react.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Pretendard Font
* **Version Control**: Git & GitHub

---

## 💻 Local Development

```bash
# 의존성 설치
npm install

# 로컬 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속하여 확인할 수 있습니다.
