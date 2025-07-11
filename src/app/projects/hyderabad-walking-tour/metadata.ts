import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Hyderabad Historical Walking Tour",
  slug: "hyderabad-walking-tour",
  startDate: new Date("2020-04-01"),
  location: "India",
  skills: [
    {
      name: "video production",
      category: "creative" as SkillCategory,
    },
    { name: "history", category: "education" as SkillCategory },
  ],
  imageSrc: "/images/projects/hyderabad-walking-tour/hyderabad.png",
};
