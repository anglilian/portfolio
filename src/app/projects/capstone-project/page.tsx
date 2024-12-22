"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import ProjectHeader from "@/components/ProjectHeader";
import ImageWithCaption from "@/components/ImageWithCaption";
import Section from "@/components/Section";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import IconRow from "@/components/IconRow";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import QuoteBox from "@/components/QuoteBox";

const ProjectContent = () => {
  const icons = [
    {
      icon: faGithub,
      link: "https://github.com/anglilian/capstone",
      alt: "GitHub",
    },
    {
      icon: faGlobe,
      link: "https://anglilian.github.io/capstone/website/",
      alt: "Website",
    },
    {
      icon: faInstagram,
      link: "https://www.instagram.com/p/CbSAEZXrhOu/?img_index=1",
      alt: "Instagram",
    },
  ];
  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <YouTubeEmbed videoId="4sYtz0wsdfA"></YouTubeEmbed>
        <IconRow icons={icons} />
        <p>
          This was such a rogue Capstone project where I banked hard on breadth
          over depth, trying to create something tangible across several mediums
          and somehow tie them all together. In the end, I made a GitHub repo
          with the code I used for data analysis, built an interactive website
          from scratch and designed infographics on Instagram.
        </p>
        <QuoteBox
          quote="This Capstone walks through the end-to-end process of producing works
          that engage the public in meaningful dialogue about how Malaysia came
          to be, what Malaysia is and all it could be. (1) It examines the
          challenges of conducting historical research on Malaysia in the
          archivisation process and access to sources. (2) It suggests
          methodologies from the digital humanities for research, namely social
          network analysis, geospatial mapping and an in-depth case study on
          webscraping English and Malay media articles on vernacular education
          and analysing them through Natural Language Processing tasks. (3) It
          provides a case study to illustrate how historical scholarship can be
          accessible to the public through an interactive website and Instagram
          infographic on the May 13 racial riots."
          author="Abstract"
        ></QuoteBox>
        <ImageWithCaption
          src="/images/projects/capstone/capstone-exec-summary.png"
          alt="Capstone executive summary"
        ></ImageWithCaption>
      </section>
      <footer className="project-footer">
        <hr></hr>
        <Section
          imageSrc="/images/logos/minerva.png"
          title="Minerva University"
          link="https://minerva.edu"
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
