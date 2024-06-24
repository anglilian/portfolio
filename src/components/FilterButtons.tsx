"use client";

import React from "react";
import {
  SkillCategory,
  skillColors,
  skillCategoryValues,
} from "@/constants/skillColours";

interface FilterButtonsProps {
  selectedCategory: SkillCategory | "all";
  onCategoryClick: (category: SkillCategory | "all") => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  selectedCategory,
  onCategoryClick,
}) => {
  return (
    <div className="flex space-x-4 mb-8 justify-between font-bold">
      <button
        className={`px-4 py-2 rounded-full ${
          selectedCategory === "all"
            ? "bg-black text-white"
            : "text-black border-black border-4 bg-transparent hover:bg-black hover:text-white hover:bg-opacity-80"
        }`}
        onClick={() => onCategoryClick("all")}
      >
        ALL
      </button>
      {skillCategoryValues.map((category) => {
        return (
          <button
            key={category}
            className={`px-4 py-2 rounded-full font-bold ${
              selectedCategory === category
                ? `bg-${skillColors[category]} text-white`
                : `text-${skillColors[category]} border-${skillColors[category]} bg-transparent border-4 hover:bg-${skillColors[category]} hover:text-white hover:bg-opacity-80`
            }`}
            onClick={() => onCategoryClick(category)}
          >
            {category.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons;
