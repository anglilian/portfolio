import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "How to Rewrite Malaysian History",
  slug: "capstone-project",
  startDate: new Date("2021-07-01"),
  endDate: new Date("2022-04-01"),
  role: "Capstone Project",
  skills: [
    {
      name: "Web dev, Canva",
      category: "creative" as SkillCategory,
    },
    {
      name: "Python",
      category: "coding" as SkillCategory,
    },
    {
      name: "Writing",
      category: "writing" as SkillCategory,
    },
  ],
  imageSrc: "/images/projects/capstone/capstone.png",
};
