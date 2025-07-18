import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Goodreads Wrapped",
  slug: "goodreads-wrapped",
  startDate: new Date("2024-12-01"),
  skills: [
    { name: "Next.js, TypeScript", category: "coding" as SkillCategory },
  ],
  imageSrc: "/images/projects/goodreads-wrapped/goodreads-wrapped.png",
  bannerImage: "/images/projects/goodreads-wrapped/goodreads-wrapped.png",
  link: "https://goodreads-wrapped.anglilian.com/",
  linkLabel: "Try it out!",
  isFeatured: true,
};
