import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Samgakji Stories",
  slug: "samgakji-stories",
  startDate: new Date("2019-12-01"),
  role: "Storywriter",
  location: "Seoul",
  skills: [
    { name: "Writing", category: "writing" as SkillCategory },
    { name: "History", category: "education" as SkillCategory },
  ],
  imageSrc: "/images/projects/samgakji/samgakji-1.png",
  link: "http://samgakjistories.yongsanlegacy.org/",
  linkLabel: "Play",
};
