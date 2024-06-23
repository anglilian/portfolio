"use client";

import React from "react";
import ProjectBox from "@/components/ProjectBox";
import { SkillCategory } from "@/constants/skillColours";
import { useState } from "react";

const skillCategories: SkillCategory[] = [
  "creative",
  "events",
  "education",
  "coding",
  "writing",
];

const portfolioItems = [
  {
    title: "Humans of Minerva",
    startDate: new Date("March 2022"),
    endDate: "Present",
    skills: [{ name: "AV Production", category: "creative" as SkillCategory }],
    imageSrc: "/images/humansOfMinerva.png", // Replace with actual image paths
  },
  {
    title: "USAPPS",
    startDate: new Date("Aug 2021"),
    location: "Malaysia",
    skills: [{ name: "events", category: "events" as SkillCategory }],
    imageSrc: "/images/usappsDiscord.png",
  },
  {
    title: "Purple is the Noblest Shroud",
    startDate: new Date("April 2021"),
    skills: [
      { name: "writing", category: "writing" as SkillCategory },
      { name: "history", category: "education" as SkillCategory },
    ],
    imageSrc: "/images/purpleShroud.jpg",
  },
  //   {
  //     title: "GUARDIAN",
  //     date: new Date("Jan 2021"),
  //     location: "Rose Hacks",
  //     skills: [
  //       { name: "flask, API", category: "coding" as SkillCategory },
  //       { name: "figma", category: "creative" as SkillCategory },
  //     ],
  //     imageSrc: "/images/guardian.png",
  //   },
  // ... add the rest of the portfolio items similarly
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    SkillCategory | "all"
  >("all");

  const handleCategoryClick = (category: SkillCategory | "all") => {
    setSelectedCategory(category);
  };

  const filteredPortfolioItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) =>
          item.skills.some((skill) => skill.category === selectedCategory)
        );

  // Sort the filtered portfolio items by startDate in descending order
  const sortedPortfolioItems = filteredPortfolioItems.sort(
    (a, b) => b.startDate.getTime() - a.startDate.getTime()
  );

  return (
    <div className="max-w-6xl w-full ">
      <div className="flex space-x-4 mb-8">
        <button
          className={`px-4 py-2 rounded-full border-2 ${
            selectedCategory === "all" ? "border-black" : "border-gray-400"
          }`}
          onClick={() => handleCategoryClick("all")}
        >
          ALL
        </button>
        {skillCategories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full border-2 ${
              selectedCategory === category ? "border-black" : "border-gray-400"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sortedPortfolioItems.map((item, index) => (
          <ProjectBox
            key={index}
            title={item.title}
            startDate={item.startDate}
            endDate={item.endDate}
            location={item.location}
            skills={item.skills}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
