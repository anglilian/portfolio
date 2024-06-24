import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "The Hero&apos;s Journey",
  slug: "heros-journey",
  startDate: new Date("November 2020"),
  role: "Illustrator",
  skills: [
    {
      name: "illustrator",
      category: "creative" as SkillCategory,
    },
  ],
  imageSrc: "/images/heros-journey.png",
  bannerImage: "/images/heros-journey.png",
};
