import { SkillCategory } from "@/constants/skillColours";

export const metadata = {
  title: "Textual Analysis with Taylor Swift & Old Books",
  slug: "text-analysis",
  startDate: new Date("May 2021"),
  skills: [
    {
      name: "nltk, webscraping, R",
      category: "coding" as SkillCategory,
    },
  ],
  imageSrc: "/images/text-analysis.png",
  bannerImage: "/images/text-analysis.png",
  link: "https://github.com/anglilian/Taylor-Swift-Lyric-Analysis",
  linkLabel: "See code",
};
