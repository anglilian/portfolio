import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Evolving Higher Ed with Global Student Perspective",
  slug: "sxsw-edu",
  startDate: new Date("March 2019"),
  location: "Texas",
  role: "Presenter",
  skills: [
    {
      name: "education",
      category: "education" as SkillCategory,
    },
    {
      name: "Workshop",
      category: "events" as SkillCategory,
    },
  ],
  imageSrc: "/images/projects/sxsw-edu/sxsw.png",
  bannerImage: "/images/projects/sxsw-edu/sxsw.png",
};
