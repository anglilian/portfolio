import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Whale Shark",
  slug: "whale-shark",
  startDate: new Date("November 2019"),
  role: "Illustrator",
  skills: [
    {
      name: "illustrator",
      category: "creative" as SkillCategory,
    },
  ],
  imageSrc: "/images/projects/whale-shark/whale-shark.png",
  bannerImage: "/images/projects/whale-shark/whale-shark.png",
};
