"use client";

import TypingText from "../components/TypingText";
import React, { useState } from "react";
import Image from "next/image";
import FilterButtons from "@/components/FilterButtons";
import { SkillCategory } from "@/constants/skillColours";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [imageSrc, setImageSrc] = useState("/images/me.jpg");

  const texts = [
    { text: "a coder", color: "text-orange-600" },
    { text: "an event organiser", color: "text-pink-600" },
    { text: "a writer", color: "text-purple-600" },
    { text: "an educator", color: "text-blue-600" },
    { text: "a designer", color: "text-green-600" },
  ];

  const handleCategoryClick = (category: SkillCategory | "all") => {
    router.push(`/projects?category=${category}`);
  };

  return (
    <div className="flex flex-col flex-grow justify-center items-center overflow-hidden m-8 space-y-4">
      <div className="flex flex-col md:flex-row items-center ">
        <div className="relative w-56 h-56 flex-shrink-0">
          <Image
            src={imageSrc}
            alt="Me!"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-lg"
            onMouseEnter={() => setImageSrc("/images/me-fun.jpg")}
            onMouseLeave={() => setImageSrc("/images/me.jpg")}
          />
        </div>
        <div className="flex-grow p-8 space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold">Hey, Li-Lian here!</h1>
          <p className="text-2xl md:text-4xl">
            I am <TypingText texts={texts} />
          </p>
        </div>
      </div>
      <FilterButtons
        selectedCategory="all"
        onCategoryClick={handleCategoryClick}
      />
      {/* <Footer></Footer> */}
    </div>
  );
}
