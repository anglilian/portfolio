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
            Minerva University unites undergraduate students from 100 nations who
            live and learn together across multiple global cities over four years,
            developing them as problem-solving leaders and entrepreneurs
            committed to addressing humanity&apos;s greatest challenges and
            building a safer, more sustainable world.
          </p>
        </Section>
      </footer>
    </div>
  );
};

export default ProjectContent;
