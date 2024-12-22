import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "City of Stars",
  slug: "city-of-stars",
  startDate: new Date("2016"),
  role: "Illustrator",
  skills: [
    {
      name: "illustrator",
      category: "creative" as SkillCategory,
    },
  ],
  imageSrc: "/images/projects/city-of-stars/city-of-stars.png",
  bannerImage: "/images/projects/city-of-stars/city-of-stars.png",
};
