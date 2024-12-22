"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import { useRouter } from "next/navigation";

import Section from "@/components/Section";
import ProjectHeader from "@/components/ProjectHeader";
import QuoteBox from "@/components/QuoteBox";

const ProjectContent = () => {
  const router = useRouter();

  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <p>
          As Manai&apos;s Student Experience and Curriculum Designer, one of my
          tasks was to design a research project for the 25 students from all
          over the world coming to Hokkaido to attend Manai&apos;s Summer
          Program. The goal of the research project was for students to gain
          practical experience in scientific research and inspire them to do
          what they love.
        </p>
        <p>
          Manai was formed to solve for the lack of real-world experiences
          available for high school students in the field of science and
          technology. Their seasonal programs served as pilots for a longer term
          solution in building a science-focused curriculum.
        </p>
        <p>
          I pitched a research project which drew on my years of studying
          Biology and Chemistry in secondary school and pre-university:
        </p>
        <QuoteBox
          quote="Trash to treasure: How to create fuel from used cooking oil with enzymes
"
        ></QuoteBox>
        <p>
          I worked with Fred Junghans, Manai&apos;s Lead Research Mentor, to
          develop a program that would teach our students the basics of enzymes
          and molecular processes which would equip them with the skills to
          ultimately create biodiesel from cooking oil. At times, we worked with
          imperfect materials under non-ideal conditions, but pulled through to
          have one of the three groups successfully create biodiesel!
        </p>
        <p>
          I&apos;ve always mused that in another life I would have been a doctor
          or taken a more natural sciences focused route. This experience gave
          me a taste of a life I would be happy to live in my next lifetime.
        </p>
      </section>
      <footer className="project-footer">
        <hr></hr>
        <Section
          title="Manai institute of science & technology"
          imageSrc="/images/logos/manai-logo.png"
          link="https://manai.me/"
        >
          <p>
            Produce innovators who solves the world&apos;s challenges using
            science and technology as a tool to create a new world.
          </p>
        </Section>
        <Section
          title="Mistletoe inc.
"
          imageSrc="/images/logos/mistletoe-logo.png"
          link="http://mistletoe.co/en/"
        >
          <p>
            Our mission is to re-create a sustainable human-centered future
            using technology. Our community make up of those who lead the
            forefront of the global startup movement including entrepreneurs,
            investors, researchers and visionaries. Together we aim to solve
            global social challenges that humanity will face in the near future.
          </p>
        </Section>
      </footer>
    </div>
  );
};

export default ProjectContent;
