import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Fall Masquerade Ball",
  slug: "fall-masquerade-ball",
  startDate: new Date("November 2019"),
  role: "Event organiser",
  skills: [
    {
      name: "Event planning",
      category: "events" as SkillCategory,
    },
  ],
  imageSrc: "/images/projects/fall-masquerade-ball/link-1.jpg",
  link: "https://drive.google.com/file/d/12WIomrjbStUpgZQDR88wrff4LJx1YY_p/view",
  linkLabel: "Read our engagement proposal",
};
