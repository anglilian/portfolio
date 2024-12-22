import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Run For the Children",
  slug: "run-for-the-children",
  startDate: new Date("August 2015"),
  role: "Organising Chairperson",
  location: "Malaysia",
  skills: [
    {
      name: "Event organising",
      category: "events" as SkillCategory,
    },
  ],
  imageSrc: "/images/projects/run-for-the-children/rftc.jpg",
  bannerImage: "/images/projects/run-for-the-children/rftc.jpg",
};
