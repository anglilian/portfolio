"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import Section from "@/components/Section";
import ProjectHeader from "@/components/ProjectHeader";
import ImageGallery from "@/components/ImageGallery";

const images = [
  {
    src: "/images/projects/fall-masquerade-ball/link-1.jpg",
    alt: "Event photo",
  },
  {
    src: "/images/projects/fall-masquerade-ball/link-2.jpg",
    alt: "Event photo",
  },
  {
    src: "/images/projects/fall-masquerade-ball/link-3.jpg",
    alt: "Event photo",
  },
];

const ProjectContent = () => {
  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <ImageGallery images={images} />
        <p>
          There were two problem statements: how might we raise awareness about
          North Korean refugees? And how might we raise money to support their
          repatriation?
        </p>
        <p>
          Our solution was two-fold. One was to co-organise a masquerade ball, a
          fun and instructive project in fundraising for the Changemakers of
          LiNK. It provided the opportunity to engage with North Koreans and to
          build a sense of community. The second was to ideate potential
          fundraising avenues that LiNK could use moving forward as their
          capacity and needs change.
        </p>
        <p>
          Over the four months of the semester we collaborated with LiNK to
          educate our peers about North Korea and in the process caught a
          glimpse of what it means to live in a politically divided, yet
          culturally similar world.
        </p>
      </section>
      <footer className="project-footer">
        <hr></hr>
        <Section
          title="Liberty in North Korea"
          imageSrc="/images/logos/link-logo.png"
          link="https://www.libertyinnorthkorea.org/"
        >
          <p>
            Our Vision is our name: Liberty in North Korea. The day every man,
            woman, and child in North Korea can live free and full lives. Our
            Mission: Working alongside the North Korean people to accelerate
            change.
          </p>
        </Section>
        <Section
          title="AmongUs"
          imageSrc="/images/projects/fall-masquerade-ball/amongus.png"
          link="https://amongusatminerva.wixsite.com/amongus"
        >
          <p>
            We contribute to social justice efforts in the 7 Minerva rotation
            cities by engaging with projects and organizations and raising
            awareness in the Minerva community.
          </p>
        </Section>
      </footer>
    </div>
  );
};

export default ProjectContent;
