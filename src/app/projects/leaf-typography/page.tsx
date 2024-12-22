"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import ProjectHeader from "@/components/ProjectHeader";
import Section from "@/components/Section";

const ProjectContent = () => {
  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <p>
          Born out of my secondary school doodles, I decided to bring the font
          of my imaginations come to life. For the first time, I joined Type
          Crit in San Francisco to put my typography up for critique by experts
          and enthusiasts.
        </p>
      </section>
      <footer className="project-footer">
        <hr></hr>
        <Section
          title="Type Thursday"
          imageSrc="/images/logos/typethursday.png"
          link="https://www.typethursday.org/san-francisco"
        >
          <p>
            TypeThursday is organised by volunteers to support designers in the
            pursuit of the letterform arts. Each month in cities around the
            world designers meet, share work-in-progress and learn from each
            other in a fun social setting.
          </p>
        </Section>
      </footer>
    </div>
  );
};

export default ProjectContent;
