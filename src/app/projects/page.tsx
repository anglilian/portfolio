"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProjectShowcase from "@/components/ProjectShowcase";
import ProjectBox from "@/components/ProjectBox";
import FilterButtons from "@/components/FilterButtons";
import { SkillCategory, skillCategoryValues } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

const Projects: React.FC = () => {
  const router = useRouter();
  const [subfolders, setSubfolders] = useState<string[]>([]);
  const [projects, setProjects] = useState<ProjectMetadata[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<
    SkillCategory | "all"
  >("all");

  useEffect(() => {
    const fetchSubfolders = async () => {
      try {
        const response = await fetch("/api/listSubfolders");
        const data = await response.json();
        if (Array.isArray(data)) {
          setSubfolders(data);
        } else {
          console.error("Expected array but got", data);
        }
      } catch (error) {
        console.error("Error fetching subfolder names:", error);
      }
    };

    fetchSubfolders();
  }, []);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const metadataPromises = subfolders.map(async (subfolder) => {
          try {
            const metadata = await import(`./${subfolder}/metadata`);
            return metadata.metadata as ProjectMetadata;
          } catch (error) {
            console.error(`Error importing metadata from ${subfolder}:`, error);
            return null;
          }
        });

        const allMetadata = await Promise.all(metadataPromises);
        setProjects(
          allMetadata.filter((meta): meta is ProjectMetadata => meta !== null)
        ); // Type guard to filter out null values
      } catch (error) {
        console.error("Error importing metadata:", error);
      }
    };

    if (subfolders.length > 0) {
      fetchMetadata();
    }
  }, [subfolders]);

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

  // If no category is selected or "all" is selected, use ProjectShowcase
  if (selectedCategory === "all") {
    return (
      <div>
        <FilterButtons
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />
        <ProjectShowcase />
      </div>
    );
  }

  // For filtered categories, render the filtered projects manually
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
