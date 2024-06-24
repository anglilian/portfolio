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
          My sister said this to me once and this image popped in my mind,
          inspired by the Disney short Lava!
        </p>
      </section>
    </div>
  );
};

export default ProjectContent;
