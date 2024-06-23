// constants/portfolioItems.ts

import { SkillCategory } from "@/constants/skillColours";

export const portfolioItems = [
  {
    title: "Humans of Minerva",
    startDate: new Date("March 2022"),
    endDate: "Present",
    skills: [
      { name: "Podcast editting", category: "creative" as SkillCategory },
    ],
    imageSrc: "/images/humans-of-minerva.png", // Replace with actual image paths
  },
  {
    title: "USAPPS",
    startDate: new Date("Aug 2021"),
    location: "Malaysia",
    skills: [{ name: "events", category: "events" as SkillCategory }],
    imageSrc: "/images/usapps-banner.png",
  },
  {
    title: "Purple is the Noblest Shroud",
    startDate: new Date("April 2021"),
    skills: [
      { name: "historical fiction", category: "writing" as SkillCategory },
      { name: "history", category: "education" as SkillCategory },
    ],
    imageSrc: "/images/purple-shroud.jpg",
  },
  // ... add the rest of the portfolio items similarly
];
