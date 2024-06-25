import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "How to Rewrite Malaysian History",
  slug: "capstone-project",
  startDate: new Date("July 2021"),
  endDate: new Date("April 2022"),
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
  ],
  imageSrc: "/images/capstone.png",
};
