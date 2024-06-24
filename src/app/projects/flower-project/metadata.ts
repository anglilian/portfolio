import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Flower Project",
  slug: "flower-project",
  startDate: new Date("2019"),
  role: "Illustrator",
  skills: [
    {
      name: "illustrator",
      category: "creative" as SkillCategory,
    },
  ],
  imageSrc: "/images/flower-project.png",
  bannerImage: "/images/flower-project.png",
};
