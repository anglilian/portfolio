"use client";

import TypingText from "../components/TypingText";
import React from "react";
import Image from "next/image";
import FilterButtons from "@/components/FilterButtons";
import { SkillCategory } from "@/constants/skillColours";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleCategoryClick = (category: SkillCategory | "all") => {
    router.push(`/projects?category=${category}`);
  };
  return (
    <div className="max-w-4xl w-full">
      <div className="overflow-hidden flex flex-col md:flex-row mb-8">
        <div className="relative w-56 h-56 flex-shrink-0">
          <Image
            src="/images/me.jpg"
            alt="Me!"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="flex-grow p-8">
          <TypingText text="Hello, Li-Lian here!" />
          <p>I make stuff.</p>
        </div>
      </div>
      <FilterButtons
        selectedCategory="all"
        onCategoryClick={handleCategoryClick}
      />
    </div>
  );
}
