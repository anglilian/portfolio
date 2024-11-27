"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import { useRouter } from "next/navigation";

import ProjectHeader from "@/components/ProjectHeader";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import Section from "@/components/Section";

const ProjectContent = () => {
  const router = useRouter();

  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <YouTubeEmbed videoId="q7xHTCGEwCI"></YouTubeEmbed>
        <p>
          I was selected to be a part of Data Science for Social Good Foundation
          x UK where I worked with the West Midlands Combined Authority and Pure
          Leapfrog to achieve their goal of 100% carbon neutrality. We provided
          three key insights by (1) predicting the energy efficiency of houses,
          (2) estimating solar panel output and (3) predicting
          electric/non-electric heating type.
        </p>
        <p>
          I was fortunate to meet and work alongside Master&apos;s and PhD
          students, learn about fields outside my own and to be flown to Seattle
          to present our project at the Learning and Doing Data for Good
          conference.
        </p>
      </section>
      <footer className="project-footer">
        <hr></hr>
        <Section
          title="Data Science for Social Good x UK"
          imageSrc="/images/warwick-logo.png"
          link="https://warwick.ac.uk/research/data-science/warwick-data/dssgx/dssgx2022/"
        >
          <p>
            DSSG helps not-for-profit organisations and government bodies to
            achieve more with their data by enhancing their services,
            interventions and outreach, helping fulfil their mission of
            improving the world and peoples lives.
          </p>
        </Section>
        <Section
          title="West Midlands Combined Authority"
          imageSrc="/images/shared/logos/wmca.png"
          link="https://www.wmca.org.uk/"
        >
          <p>
            A combined authority is a group of local authorities working
            together to make their region a better place to live. The government
            gives combined authorities the money and power to make decisions for
            their regions.
          </p>
        </Section>
        <Section
          title="Pure Leapfrog"
          imageSrc="/images/shared/logos/pure-leapfrog.jpg"
          link="https://www.pureleapfrog.org/"
        >
          <p>
            Pure Leapfrog draws on its expertise in Carbon, Sustainable Finance,
            Energy Systems, and Natural Capital, to evolve new products,
            services and business models that are predicated on community
            ownership structures and that promote our goals of sustainability
            and decarbonisation
          </p>
        </Section>
      </footer>
    </div>
  );
};

export default ProjectContent;
