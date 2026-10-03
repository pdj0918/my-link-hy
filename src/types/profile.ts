export interface LinkItem {
  id: string;
  category: "all" | "social" | "project" | "contact";
  title: string;
  subtitle: string;
  url: string;
  badge?: string;
  iconType: "github" | "velog" | "project" | "instagram" | "email";
  isCopyAction?: boolean;
}

export interface ProfileData {
  name: string;
  role: string;
  bio: string;
  avatarText: string;
  statusBadge: string;
  techStack: string[];
  links: LinkItem[];
  primaryCtaText: string;
  primaryCtaUrl: string;
}
