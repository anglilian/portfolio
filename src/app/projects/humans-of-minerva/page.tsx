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
          Julia, Leo and I started this podcast from a desire to get to know our
          amazing peers. Moving cities every four months makes it difficult to
          connect with all Minervans and we often don&apos;t get the opportunity
          to meet our lower and upperclassmen. So we decided to capture their
          stories and create opportunities to learn about and connect with
          Minervans.
        </p>
        <p>
          I love editing podcasts too, so this was the perfect initiative to
          combine two interests together! You can find me on many weekends
          editting podcasts with a random sitcom playing in the background.
          Strangely enough, I find this incredibly relaxing.
        </p>
        <p>Give us a listen and get to know the wonderful Humans of Minerva.</p>
      </section>
      <footer className="project-footer">
        <hr></hr>
        <Section
          title="Minerva University"
          imageSrc="/images/logos/minerva.png"
        >
          <p>
            Minerva University strives to develop problem-solvers,
            entrepreneurs, and wise leaders from around the globe; and weave
            them together as one community to address the greatest challenges
            facing humanity. Our undergraduate students come together as future
            leaders and entrepreneurs from 100 nations to live and learn
            together in multiple culturally vibrant cities around the world over
            four years of study with a shared goal in mind to contribute to a
            safer, more sustainable world.
          </p>
        </Section>
      </footer>
    </div>
  );
};

export default ProjectContent;
