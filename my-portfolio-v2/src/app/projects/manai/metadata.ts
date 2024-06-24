import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Manai Summer Program",
  slug: "manai",
  startDate: new Date("July 2019"),
  endDate: new Date("August 2019"),
  location: "Tokyo",
  role: "Student Experience and Curriculum Designer",
  skills: [
    {
      name: "science",
      category: "education" as SkillCategory,
    },
  ],
  imageSrc: "/images/manai.jpg",
  bannerImage: "/images/manai.jpg",
  link: "https://manai.me/documents/2019report_EN.pdf",
  linkLabel: "Read the report",
};
