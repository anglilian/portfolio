"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import { useRouter } from "next/navigation";

import Section from "@/components/Section";
import ProjectHeader from "@/components/ProjectHeader";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import ImageWithCaption from "@/components/ImageWithCaption";

const ProjectContent = () => {
  const router = useRouter();

  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <YouTubeEmbed
          videoId="78QjbJLJU94"
          title="Seek the Treasure (Creatica Hackathon 2020)"
        />
        <p>
          I love stories. I love how engaging and impactful it is to experience
          a story as if you lived it. Books, poetry, videos and podcasts are
          amazing media, but games are one of the most powerful ways to engage
          with your audience. It has been a dream of mine to build a game and to
          be honest it always looked extremely difficult. So, with this
          hackathon I wanted to challenge myself.
        </p>
        <p>
          This was my first time using PyGame and my first time designing a
          character and design assets on Illustrator. I applied the principles
          of Object Oriented Programming and desirable difficulty to build each
          game level.
        </p>
        <p>48 hours of coding later. Here&apos;s how far I got.</p>
        <ImageWithCaption
          src="/images/projects/seek-the-treasure/lovelace.gif"
          alt="Hand-drawn character design and animation based on Ada Lovelace."
        />
      </section>
      <footer className="project-footer">
        <hr></hr>
        <Section
          title="Creatica"
          imageSrc="/images/logos/creatica.png"
          link="https://www.creatica.io/"
        >
          <p>
            New York City&apos;s virtual hackathon for women and non-binary
            individuals in high school and college
          </p>
        </Section>
      </footer>
    </div>
  );
};

export default ProjectContent;
