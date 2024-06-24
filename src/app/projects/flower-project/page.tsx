"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import { useRouter } from "next/navigation";

import ProjectHeader from "@/components/ProjectHeader";

const ProjectContent = () => {
  const router = useRouter();

  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <p>
          A friend doodled this flower on my hand once and it itched to drawn.
          Suffice to say, it was a satisfying itch to scratch.
        </p>
      </section>
    </div>
  );
};

export default ProjectContent;
