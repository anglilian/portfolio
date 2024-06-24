"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import { useRouter } from "next/navigation";

import ProjectHeader from "@/components/ProjectHeader";
import Image from "next/image";

const ProjectContent = () => {
  const router = useRouter();

  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <div className="flex justify-center items-center space-x-2 shadow-md">
          <div className="w-1/2">
            <Image
              src="/images/fear-the-wolves.png" // Path to your first image
              alt="I do not fear the wolves"
              width={500} // Set desired width
              height={300} // Set desired height
              layout="responsive" // Makes the image responsive
            />
          </div>
          <div className="w-1/2">
            <Image
              src="/images/for-they-are-mine.png" // Path to your second image
              alt="for they are mine"
              width={500} // Set desired width
              height={300} // Set desired height
              layout="responsive" // Makes the image responsive
            />
          </div>
        </div>
        <p>I felt this one in my bones and had to get it out there.</p>
      </section>
    </div>
  );
};

export default ProjectContent;
