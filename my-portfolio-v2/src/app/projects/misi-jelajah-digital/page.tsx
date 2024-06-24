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
          While I was working under the Corporate Social Responsibility (CSR)
          team at Maxis, I pitched for them to include a module on Scratch in
          their STEM competition which they were hosting under eKelas, Maxis's
          flagship community program for free and accessible digital learning.
          The STEM competition aimed to inspire students to pursue their
          interest in STEM and provide resources to further their learning.
        </p>
        <p>
          Personally, learning to code has been such a rewarding journey,
          opening doors to creating and discovering more than I would have
          thought possible. I wanted to equip young Malaysians with the
          essential skills of logic, creativity and digital literacy, and the
          most accessible gateway for the students as young as seven was
          Scratch. The coding language is simple and interactive, providing
          instant feedback to any changes made in the code which helps show its
          logical progression.
        </p>
        <p>
          I was tasked with the end-to-end production of the module from
          deciding the content to writing the script in the Malay language,
          recording the voiceover, designing the graphics, including subtitles
          and putting the video together. In the finalised module, I included
          several crucial coding concepts, manipulating variables, storing
          states, front-end design and logical statements. I was fortunate to
          have the guidance of an education specialist Sunago in ensuring the
          final eight videos' quality.
        </p>
      </section>
      <footer className="project-footer">
        <hr></hr>
        <Section
          title="Maxis Berhad"
          imageSrc="/images/maxis-logo.png"
          link="https://www.maxis.com.my/en/about-maxis/corporate-responsibility/ekelas/ekelas-introduction/"
        >
          <p>
            Maxis is a leading communications service provider in Malaysia that
            offers mobile and broadband plans, and the latest smartphones.
          </p>
        </Section>
        <Section
          title="Sunago"
          imageSrc="/images/sunago.png"
          link="https://www.sunagoeducation.com/"
        >
          <p>
            An e-learning service provider for learning and teaching English
            online. Sunago offers live English lessons online with expert
            instructors from all around the world.
          </p>
        </Section>
      </footer>
    </div>
  );
};

export default ProjectContent;
