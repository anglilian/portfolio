"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import ProjectHeader from "@/components/ProjectHeader";

const ProjectContent = () => {
  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <p>
          Inspired by the City of Velaris from Sarah J. Maas&apos; book series.
        </p>
      </section>
    </div>
  );
};

export default ProjectContent;
