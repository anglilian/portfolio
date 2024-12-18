"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import ProjectHeader from "@/components/ProjectHeader";
import ImageGallery from "@/components/ImageGallery";

const ProjectContent = () => {
  const tsImages = [
    { src: "/images/projects/text-analysis/word-cloud.png", alt: "Word cloud" },
    {
      src: "/images/projects/text-analysis/freq-diagram.png",
      alt: "Frequency diagram",
    },
    {
      src: "/images/projects/text-analysis/sentiment-analysis.png",
      alt: "Sentiment analysis",
    },
    // Add more images as needed
  ];

  const gutenbergImages = [
    {
      src: "/images/projects/text-analysis/verb.png",
      alt: "Proportion of verb tenses",
    },
    {
      src: "/images/projects/text-analysis/text-analysis.png",
      alt: "Text analysis",
    },
    // Add more images as needed
  ];

  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <p>
          I&apos;ve always loved stories told through books, plays, music, TV
          series, The question was what could I learn from them when I looked at
          these stories from a meta-level?
        </p>
        <p>
          I started with R on a simple hypothesis: does Taylor Swift really just
          sing about love? And if she is singing about love, what kind of love
          is it?
        </p>
        <ImageGallery images={tsImages}></ImageGallery>
        <p>
          Then, I wanted to explore what Python&apos;s NLTK could do, so I
          started with the hypothesis: how long should your sentences be in
          written work?
        </p>
        <p>
          For this, I webscraped Gutenberg&apos;s Harvard Classics (129 books)
          and came up with some beautiful visuals.
        </p>
        <ImageGallery images={gutenbergImages}></ImageGallery>
        <p>
          I believe the potential for textual analysis is exciting and these
          explorations provide me a foundation from which to answer important
          questions in the future!
        </p>
      </section>
    </div>
  );
};

export default ProjectContent;
