import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Tutor for Kids",
  slug: "tutor-for-kids",
  startDate: new Date("2017"),
  endDate: new Date("2019"),
  role: "Organising Chairperson",
  location: "Malaysia",
  skills: [
    {
      name: "education",
      category: "education" as SkillCategory,
    },
    {
      name: "Event organising",
      category: "events" as SkillCategory,
    },
  ],
  imageSrc: "/images/projects/tutor-for-kids/tutor-for-kids.jpg",
  bannerImage: "/images/projects/tutor-for-kids/tutor-for-kids.jpg",
};
