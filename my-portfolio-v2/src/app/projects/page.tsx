"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProjectBox from "@/components/ProjectBox";
import FilterButtons from "@/components/FilterButtons";
import { SkillCategory, skillCategoryValues } from "@/constants/skillColours";
import { portfolioItems } from "@/constants/portfolioItems"; // Adjust the path accordingly

const Projects = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<
    SkillCategory | "all"
  >("all");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const category = urlParams.get("category");
      if (
        category &&
        Object.values(skillCategoryValues).includes(category as SkillCategory)
      ) {
        setSelectedCategory(category as SkillCategory);
      }
    }
  }, []);

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
    <div className="max-w-6xl w-full">
      <FilterButtons
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
