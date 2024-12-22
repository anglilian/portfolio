import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Misi Jelajah Digital",
  slug: "misi-jelajah-digital",
  startDate: new Date("August 2021"),
  role: "Media Management & Communications",
  skills: [
    { name: "Scratch", category: "coding" as SkillCategory },
    { name: "Audio visual production", category: "creative" as SkillCategory },
    { name: "Coding", category: "education" as SkillCategory },
  ],
  imageSrc: "/images/projects/misi-jelajah-digital/misi-jelajah-digital.png",
  bannerImage: "/images/projects/misi-jelajah-digital/misi-jelajah-digital.png",
};
