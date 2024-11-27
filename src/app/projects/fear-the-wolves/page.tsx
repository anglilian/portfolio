"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import ProjectHeader from "@/components/ProjectHeader";
import Image from "next/image";

const ProjectContent = () => {
  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <div className="flex justify-center items-center space-x-2 shadow-md">
          <div className="w-1/2">
            <Image
              src="/images/projects/fear-the-wolves/fear-the-wolves.png"
              alt="I do not fear the wolves"
              width={500}
              height={300}
              layout="responsive"
            />
          </div>
          <div className="w-1/2">
            <Image
              src="/images/projects/fear-the-wolves/for-they-are-mine.png"
              alt="for they are mine"
              width={500}
              height={300}
              layout="responsive"
            />
          </div>
        </div>
        <p>I felt this one in my bones and had to get it out there.</p>
      </section>
    </div>
  );
};

export default ProjectContent;
