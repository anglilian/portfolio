import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "The Hero's Journey",
  slug: "heros-journey",
  startDate: new Date("November 2020"),
  role: "Illustrator",
  skills: [
    {
      name: "illustrator",
      category: "creative" as SkillCategory,
    },
  ],
  imageSrc: "/images/projects/heros-journey/heros-journey.png",
  bannerImage: "/images/projects/heros-journey/heros-journey.png",
};
