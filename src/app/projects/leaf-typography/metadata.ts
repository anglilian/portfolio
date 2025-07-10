import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Leaf Typography",
  slug: "leaf-typography",
  startDate: new Date("2018-04-01"),
  location: "San Francisco",
  role: "Illustrator",
  skills: [
    {
      name: "illustrator",
      category: "creative" as SkillCategory,
    },
  ],
  imageSrc: "/images/projects/leaf-typography/leaf-typeface.png",
  bannerImage: "/images/projects/leaf-typography/leaf-typeface.png",
};
