import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Leo Quidditch Tournament",
  slug: "leo-quidditch",
  startDate: new Date("August 2016"),
  role: "Organising Chairperson",
  location: "Malaysia",
  skills: [
    {
      name: "Event organising",
      category: "events" as SkillCategory,
    },
  ],
  imageSrc: "/images/quidditch.jpg",
  bannerImage: "/images/quidditch.jpg",
  link: "https://quidditchpost.blogspot.com/2015/09/sri-kl-hosts-malaysias-biggest.html",
  linkLabel: "Read the article",
};
