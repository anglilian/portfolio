import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "GUARDIAN",
  slug: "guardian",
  startDate: new Date("January 2021"),
  role: "Hackathon Winner",
  skills: [
    {
      name: "flask, REST API, google maps API",
      category: "coding" as SkillCategory,
    },
    { name: "Figma", category: "creative" as SkillCategory },
  ],
  imageSrc: "/images/projects/guardian/guardian.png",
  link: "https://www.figma.com/proto/dUWeaGznbFTMhIwgLJTkdk/Guardian?node-id=47%3A25&scaling=scale-down",
  linkLabel: "Try me!",
};
