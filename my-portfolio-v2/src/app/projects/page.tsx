"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProjectBox from "@/components/ProjectBox";
import FilterButtons from "@/components/FilterButtons";
import { SkillCategory, skillCategoryValues } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

// Import other project metas here
import { metadata as humansOfMinervaMeta } from "./humans-of-minerva/metadata";
import { metadata as usappsMeta } from "./usapps/metadata";
import { metadata as bookMeta } from "./purple-is-the-noblest-shroud/metadata";
import { metadata as maxisMeta } from "./misi-jelajah-digital/metadata";
import { metadata as guardianMeta } from "./guardian/metadata";

const projects: ProjectMetadata[] = [
  humansOfMinervaMeta,
  usappsMeta,
  bookMeta,
  maxisMeta,
  guardianMeta,
  // Add other project metas here
];

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
      ? projects
      : projects.filter((item) =>
          item.skills.some((skill) => skill.category === selectedCategory)
        );

  // Sort the filtered portfolio items by startDate in descending order
  const sortedPortfolioItems = filteredPortfolioItems.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  return (
    <div>
      <FilterButtons
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedPortfolioItems.map((item, index) => (
          <ProjectBox
            key={index}
            title={item.title}
            startDate={new Date(item.startDate)}
            endDate={item.endDate}
            location={item.location}
            skills={item.skills}
            imageSrc={item.imageSrc}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
