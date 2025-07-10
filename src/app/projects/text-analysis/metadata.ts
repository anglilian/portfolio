import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Textual Analysis with Taylor Swift & Old Books",
  slug: "text-analysis",
  startDate: new Date("2021-05-01"),
  skills: [
    {
      name: "nltk, webscraping, R",
      category: "coding" as SkillCategory,
    },
  ],
  imageSrc: "/images/projects/text-analysis/text-analysis.png",
  bannerImage: "/images/projects/text-analysis/text-analysis.png",
  link: "https://github.com/anglilian/Taylor-Swift-Lyric-Analysis",
  linkLabel: "See code",
};
