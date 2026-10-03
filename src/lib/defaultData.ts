import { ProfileData } from "@/types/profile";

export const STORAGE_KEY = "mylink_profile_data";

export const DEFAULT_PROFILE_DATA: ProfileData = {
  name: "박다정",
  role: "Frontend Developer",
  bio: "복잡한 비즈니스 로직을 사용자가 직관적으로 이해할 수 있는 웹 인터페이스로 설계하고 개발합니다.",
  avatarText: "다정",
  statusBadge: "커피챗 환영",
  techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX Design"],
  primaryCtaText: "이메일로 커피챗 제안하기",
  primaryCtaUrl: "mailto:p29522295@gmail.com",
  links: [
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
  ],
};
