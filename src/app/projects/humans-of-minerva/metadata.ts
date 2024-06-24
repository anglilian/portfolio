import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Humans of Minerva",
  slug: "humans-of-minerva",
  startDate: new Date("January 2022"),
  endDate: "Present",
  role: "Lead editor",
  skills: [{ name: "Podcast editting", category: "creative" as SkillCategory }],
  link: "https://anchor.fm/humans-of-minerva/",
  linkLabel: "Listen to the podcast",
  bannerImage: "/images/hom-banner.png",
  imageSrc: "/images/humans-of-minerva.png",
};
