"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import { useRouter } from "next/navigation";

import Section from "@/components/Section";
import ProjectHeader from "@/components/ProjectHeader";
import ImageGallery from "@/components/ImageGallery";

const images = [
  { src: "/images/usapps-core.jpeg", alt: "Core committee" },
  { src: "/images/usapps-alumni-interview.png", alt: "Alumni panel" },
  { src: "/images/usapps-killer-essay.jpeg", alt: "Killer essay workshop" },
  // Add more images as needed
];

const ProjectContent = () => {
  const router = useRouter();

  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <p>
          I owe my education at Minerva University to USAPPS. In 2017, I
          attended a weekend of workshops on US education and learned about a
          university which I truly resonated with. 6 months later, I was
          accepted to Minerva and began some of the best four years of my life.
        </p>
        <p>
          To me, part of USAPPS is about giving back. Coming back year after
          year to help other Malaysians pursue similar aspirations of a US
          education. In the <b>13th iteration of USAPPS</b>, I signed up as one
          of the four Core members take up the mantle.
        </p>
        <ImageGallery images={images} />
        <p>
          We adapted the magic of an in-person event to an engaging Discord
          server with over 400 active members from our 600 registrations
          nationwide. I personally coordinated the speakers and content for the
          13 workshops and 6 classroom simulations of USAPPS, featuring a
          collaboration with Yale-NUS College, graduate students and alumni
          interviewers and most importantly over 60 Malaysians studying/who have
          studied in the US.
        </p>
        <p>
          USAPPS is my community because it brings together Malaysians through a
          shared experience of studying in the US. It is support and kindness
          and openness. I've poured a lot of love into the event and I am happy
          to see our participants continue to benefit from the resources we've
          provided to them.
        </p>
      </section>
      <footer className="project-footer">
        <hr></hr>
        <Section
          title="USAPPS"
          imageSrc="/images/usapps-logo.png"
          link="https://www.usapps.org/"
        >
          <p>Helping Malaysian dreamers who want to study in the USA.</p>
        </Section>
      </footer>
    </div>
  );
};

export default ProjectContent;
