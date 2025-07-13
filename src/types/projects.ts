import { SkillCategory } from "@/constants/skillColours";

export interface ProjectMetadata {
  title: string;
  startDate: Date;
  endDate?: Date | string | null; // Allow different types for end date
  location?: string;
  skills: { name: string; category: SkillCategory }[]; // Adjusted to include skill category
  imageSrc: string;
  slug: string;
  bannerImage?: string;
  link?: string;
  linkLabel?: string;
  role?: string;
  isFeatured?: boolean;
}
