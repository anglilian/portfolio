"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import { useRouter } from "next/navigation";

import Section from "@/components/Section";
import ProjectHeader from "@/components/ProjectHeader";

const ProjectContent = () => {
  const router = useRouter();

  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <p>
          The prompt was to apply the idea of the hero&apos;s journey to mental
          health. To see the journey not as linear, but as cyclical - an
          downward spiral up.
        </p>
      </section>
      <footer className="project-footer">
        <hr></hr>
        <Section
          title="Expanding Circles"
          imageSrc="/images/expanding-circles.png"
          link="https://www.expandingcircles.co/"
        >
          <p>
            A non-profit that offers online and in-person therapy to people who
            do not have access or are not otherwise eligible for mental health
            services.
          </p>
        </Section>
      </footer>
    </div>
  );
};

export default ProjectContent;
