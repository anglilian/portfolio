"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import { useRouter } from "next/navigation";

import ProjectHeader from "@/components/ProjectHeader";
import QuoteBox from "@/components/QuoteBox";
import Section from "@/components/Section";

const ProjectContent = () => {
  const router = useRouter();

  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <p>
          I had the opportunity to run a workshop at one of the most well-known
          education conferences!
        </p>
        <QuoteBox quote="As students at Minerva, we experience an educational methodology that trains us to resolve some of the deepest issues in our society. Join us as we delve into best practices from unique educational styles from across the world with the goal of revolutionizing higher education. Learn from us how to design engaging practices in higher ed, which are rooted in the science of learning but applicable to the cultural context of present-day students."></QuoteBox>
      </section>
      <footer className="project-footer">
        <hr></hr>
        <Section
          title="SXSW Edu"
          imageSrc="/images/sxsw-logo.png"
          link="https://www.sxswedu.com/"
        >
          <p>
            SXSW EDU (pronounced South by Southwest E-D-U) is most well known
            for the SXSW EDU Conference & Festival, an annual event that fosters
            innovation and learning within the education industry.
          </p>
        </Section>
      </footer>
    </div>
  );
};

export default ProjectContent;
