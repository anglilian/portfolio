import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Run For the Children",
  slug: "run-for-the-children",
  startDate: new Date("2015-08-01"),
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
