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
          One of my first pieces done in the geometric vector art style.
          Inspired by the Beauty and the Beast (2017)
        </p>
      </section>
    </div>
  );
};

export default ProjectContent;
