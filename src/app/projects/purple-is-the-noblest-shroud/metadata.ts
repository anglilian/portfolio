import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Purple is the Noblest Shroud",
  slug: "purple-is-the-noblest-shroud",
  startDate: new Date("April 2021"),
  role: "Self-published authour",
  skills: [
    { name: "Historical fiction", category: "writing" as SkillCategory },
    { name: "History", category: "education" as SkillCategory },
  ],
  imageSrc: "/images/projects/purple-is-the-noblest-shroud/purple-shroud.jpg",
  bannerImage: "/images/projects/purple-is-the-noblest-shroud/book-banner.png",
  link: "https://www.amazon.com/dp/9671942709",
  linkLabel: "Get your copy",
};
