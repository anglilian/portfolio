"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import { useRouter } from "next/navigation";

import ProjectHeader from "@/components/ProjectHeader";
import Section from "@/components/Section";

const ProjectContent = () => {
  const router = useRouter();

  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <p>
          By this time, my thoughts moved towards sustainable projects. How
          might I impact my community deeply? Education seemed to be the answer
          to me, a key to moving out from poverty, a tool to empower individuals
          to achieve their potential.
        </p>
        <p>
          I purposely selected a home for underprivileged children that was
          under the radar to maximise our efforts. Every Saturday for two years,
          I assembled a group of university students to tutor over twenty 7 to
          16 year-olds. We developed simple lesson plans, either project-based
          learning or helping with homework.
        </p>
        <p>
          Even after I left for university in August 2018, the project continued
          to run, but the strain proved too great to bear. There was a high
          turnover rate and rapidly shifting commitment from tutors, so the
          project discontinued in 2019.
        </p>
        <p>
          It is my hope that our efforts made as big an impact as I set out to,
          but if nothing else, it only spurred me to explore more ways to uplift
          the people around me.
        </p>
      </section>
      <footer>
        <hr></hr>
        <Section
          title="Leo Club of Subang Jaya Alumni"
          imageSrc="/images/sja.jpeg"
          link="https://www.instagram.com/leoclubsja/"
        >
          <p>
            A community service club for youths aged between 18-30 years old,
            regardless of educational affiliation. Chartered by Ang Li-Lian in
            July 2017.
          </p>
        </Section>
      </footer>
    </div>
  );
};

export default ProjectContent;
