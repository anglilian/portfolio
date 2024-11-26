import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Goodreads Wrapped",
  slug: "goodreads-wrapped",
  startDate: new Date("December 2024"),
  skills: [
    { name: "Next.js, TypeScript", category: "coding" as SkillCategory },
  ],
  imageSrc: "/images/goodreads-wrapped.png",
  bannerImage: "/images/goodreads-wrapped.png",
  link: "https://goodreads-wrapped.anglilian.com/",
  linkLabel: "Try it out!",
};
