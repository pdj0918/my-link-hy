# [디자인 시스템] 마이링크 토스 디자인 시스템 (TDS) 가이드

---

## 1. 디자인 철학 & 원칙 (Design Principles)

* **포지셔닝**: **"은행에 다니는 유능한 친구"** — 차분하고 효율적인, 군더더기 없는 인터페이스
* **단일 강조 색상 원칙 (Single Accent Color)**: 화면당 가장 중요한 **단 1개의 핵심 CTA**에만 시그니처 블루(`blue-500`)를 적용
* **플랫 & 클린 캔버스 (Flat Backgrounds)**: 크롬 영역에 텍스처, 노이즈, 불필요한 그라디언트를 배제하고 순수한 면과 여백으로 완성
* **데이터 잉크 비율 (Data-Ink Ratio)**: 장식적인 테두리나 과도한 그림자를 걷어내고 실제 정보가 돋보이도록 설계
* **부드러운 라운딩 (Aggressive Rounding)**: 16px, 20px의 넉넉한 둥근 모서리와 999px 풀 캡슐 칩을 적극 활용
* **타이포그래피**: **Pretendard Variable** 웹폰트 기반의 높은 한글 가독성
* **카피라이팅**: 해요체(Conversational Polite) 기반의 친절하고 명확한 대화형 어조

---

## 2. 컬러 시스템 (Color Palette)

### 2.1. Primitives

| 분류 | 토큰명 | Hex 코드 | 설명 |
| :--- | :--- | :--- | :--- |
| **Brand (Blue)** | `blue-50` | `#EBF3FE` | 연한 블루 배경, 배지, 선택 하이라이트 |
| | `blue-100` | `#C9DFFB` | 칩 테두리, 포커스 링 보조 |
| | `blue-500` | `#3182F6` | **토스 시그니처 브랜드 컬러**, Primary 버튼, 액센트 |
| | `blue-600` | `#2272EE` | Primary 버튼 Hover / Active 누름 효과 |
| **Neutral (Grey)** | `grey-0` (White) | `#FFFFFF` | 카드 배경, 메인 캔버스, 반전 텍스트 |
| | `grey-50` | `#F9FAFB` | 전체 페이지 기본 배경, 인풋 필드 배경 |
| | `grey-100` | `#F2F4F6` | 세컨더리 버튼/칩 배경, 리스트 구분선 |
| | `grey-200` | `#E5E8EB` | 기본 테두리(Border), 비활성 배경 |
| | `grey-400` | `#B0B8C1` | 플레이스홀더, 비활성 텍스트, Chevron 화살표 |
| | `grey-500` | `#8B95A1` | 3차 보조 텍스트, 캡션 |
| | `grey-700` | `#4E5968` | 2차 본문 텍스트, 서브 레이블 |
| | `grey-800` | `#333D4B` | 토스트(Toast) 배경 |
| | `grey-900` | `#191F28` | **기본 텍스트** (완전한 블랙이 아닌 쿨 네이비 틴트) |
| **Status** | `red-500` | `#D93025` | 위험, 오류, 삭제 액션 |
| | `green-500` | `#16A34A` | 성공, 긍정 피드백 |

---

## 3. 타이포그래피 (Typography)

* **Font Family**: `'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif`
* **폰트 굵기(Weights)**: Regular(400), Medium(500), Semibold(600), Bold(700)

| 스케일명 | 폰트 크기 (px) | 행간 (Line-height) | 자간 (Letter-spacing) | 주 용도 |
| :--- | :--- | :--- | :--- | :--- |
| `display-l` | 48px | 64px | -0.02em | 초대형 헤드라인 |
| `title-l` | 28px | 40px | -0.01em | 주요 섹션 타이틀 |
| `title-m` | 24px | 36px | -0.01em | 사용자 이름, 페이지 주요 타이틀 |
| `title-s` | 20px | 30px | -0.01em | 카드 타이틀, 모달 제목 |
| `title-xs` | 18px | 28px | -0.01em | 버튼 텍스트, TopBar 헤더 |
| `body-l` | 16px | 24px | 0.00em | 링크 타이틀, 기본 본문 |
| `body-m` | 14px | 22px | 0.00em | 소개글 본문, 칩 텍스트 |
| `body-s` | 13px | 20px | 0.00em | 부가 설명, 링크 서브타이틀 |
| `body-xs` | 12px | 18px | 0.00em | 태그, 뱃지 레이블 |
| `caption` | 11px | 16px | 0.00em | 소형 뱃지, 미세 캡션 |

---

## 4. 라운딩 및 입체감 (Radius & Elevation)

### 4.1. BorderRadius (곡률)
* `radius-s` (`8px`): 소형 태그, 뱃지
* `radius-m` (`12px`): 인풋 필드, 서브 카드
* `radius-l` (`14px`): 리스트 로우 아이콘 컨테이너
* `radius-xl` (`16px`): 버튼(56px), 안내 상자
* `radius-2xl` (`20px`): 메인 프로필 카드, 리스트 로우 컨테이너
* `radius-full` (`999px`): 원형 아바타, 캡슐형 필터 칩, 원형 버튼

### 4.2. Elevation (그림자)
* `shadow-1`: `0 1px 4px rgba(0, 0, 0, 0.08)` — 카드, 패널 기본 그림자
* `shadow-2`: `0 4px 12px rgba(0, 0, 0, 0.10)` — 플로팅 컴포넌트, 드롭다운
* `shadow-toast`: `0 8px 24px rgba(0, 0, 0, 0.16)` — 상단 토스트 알림창

---

## 5. 핵심 컴포넌트 스펙 (Component Specs)

### ① TopBar (상단 바)
* 높이: 56px, 화이트 배경, 하단 1px 구분선 (`#F2F4F6`), `sticky top-0`
* 28px 원형 이니셜 로고 + 17px 볼드 타이틀 + 36px 원형 공유 버튼

### ② Primary Button (화면당 1개 원칙)
* 높이: 56px, 배경색 `#3182F6` (Toss Blue), 텍스트 화이트, 곡률 `rounded-2xl` (16~20px)
* 클릭/누름 효과: `brightness(0.95)`, `scale(0.98)` (150ms ease-out)

### ③ Category Chips (필터 칩)
* 높이: 36px, 곡률 `rounded-full` (999px), 패딩 좌우 16px
* 활성 상태: `bg-[#191F28]`, 텍스트 화이트
* 비활성 상태: `bg-[#F2F4F6]`, 텍스트 `#4E5968`

### ④ List-Rows (링크 아이템)
* 높이: 64px, 패딩 16px 20px, 카드 내부 경계 1px 구분선 (`#F2F4F6`)
* 좌측 아이콘: 44px 둥근 사각형 (`rounded-xl`), `#F2F4F6` 배경 + 브랜드 라인 아이콘
* 우측 트레일링: Chevron-right 화살표 (`#B0B8C1`)

### ⑤ Toast (피드백 알림)
* 배경: `#333D4B` (쿨 차콜 그레이), 텍스트 화이트, 곡률 `rounded-2xl`
* 체크 아이콘 + 메시지 텍스트, 2.4초 후 자동 소멸
