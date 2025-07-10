import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Fear the Wolves",
  slug: "fear-the-wolves",
  startDate: new Date("2018-01-01"),
  role: "Illustrator",
  skills: [
    {
      name: "illustrator",
      category: "creative" as SkillCategory,
    },
  ],
  imageSrc: "/images/projects/fear-the-wolves/fear-the-wolves.png",
};
