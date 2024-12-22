import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "I Lava You",
  slug: "i-lava-you",
  startDate: new Date("2017"),
  role: "Illustrator",
  skills: [
    {
      name: "illustrator",
      category: "creative" as SkillCategory,
    },
  ],
  imageSrc: "/images/projects/i-lava-you/i-lava-you.png",
  bannerImage: "/images/projects/i-lava-you/i-lava-you.png",
};
