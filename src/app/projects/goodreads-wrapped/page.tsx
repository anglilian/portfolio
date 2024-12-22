"use client";

import "@/app/projects/styles.css";
import React from "react";
import { metadata } from "./metadata";
import ProjectHeader from "@/components/ProjectHeader";

const ProjectContent = () => {
  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <p>
          As an avid reader who meticulously logs every book on Goodreads, I
          found myself disappointed and underwhelmed by their basic{" "}
          <a
            href="https://www.goodreads.com/user/year_in_books/2023/27935390"
            target="_blank"
            rel="noopener noreferrer"
          >
            &ldquo;Year in Books&rdquo;
          </a>{" "}
          feature. I wanted to create a more positive closing experience to the
          year, similar to how Spotify Wrapped creates excitement and nostalgia.
        </p>
        <p>
          I&apos;ve rebuilt this app several times mostly because I didn&apos;t
          properly plan out my app before I started and I wasn&apos;t properly
          leveraging AI tools. You can read more about the process{" "}
          <a
            href="https://anglilian.com/blog/how-to-build-an-interactive-biosecurity-tool-with-minimal-coding-experience"
            target="_blank"
          >
            here
          </a>
          !
        </p>
      </section>
    </div>
  );
};

export default ProjectContent;
