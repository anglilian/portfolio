import { SkillCategory } from "@/constants/skillColours";

export const metadata = {
  title: "Seek the Treasure",
  slug: "seek-the-treasure",
  startDate: new Date("November 2020"),
  skills: [
    {
      name: "PyGame",
      category: "coding" as SkillCategory,
    },
    { name: "Illustrator", category: "creative" as SkillCategory },
  ],
  imageSrc: "/images/seek-the-treasure.png",
  link: "https://github.com/lianlaughsalot/SeektheTreasure",
  linkLabel: "Try me!",
};
