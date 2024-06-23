import { SkillCategory } from "@/constants/skillColours";

export const metadata = {
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
  imageSrc: "/images/guardian.png",
  // bannerImage: "/images/guardian.png",
  link: "https://www.figma.com/proto/dUWeaGznbFTMhIwgLJTkdk/Guardian?node-id=47%3A25&scaling=scale-down",
  linkLabel: "Try me!",
};
