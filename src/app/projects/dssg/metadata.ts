import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Data Science for Social Good",
  slug: "dssg",
  startDate: new Date("June 2022"),
  endDate: new Date("August 2022"),
  location: "UK",
  skills: [
    {
      name: "Data analysis",
      category: "coding" as SkillCategory,
    },
  ],
  imageSrc: "/images/dssg.jpg",
  link: "https://github.com/DSSGxUK/s22_wmca",
  linkLabel: "GitHub repo",
};
