import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "USAPPS",
  slug: "usapps",
  startDate: new Date("August 2021"),
  role: "Core committtee",
  location: "Malaysia",
  skills: [
    { name: "Event planning", category: "events" as SkillCategory },
    { name: "Education", category: "education" as SkillCategory },
  ],
  imageSrc: "/images/projects/usapps/usapps-banner.png",
  bannerImage: "/images/projects/usapps/usapps-banner.png",
};
