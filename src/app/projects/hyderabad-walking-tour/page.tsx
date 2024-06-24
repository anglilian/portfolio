"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import { useRouter } from "next/navigation";

import Section from "@/components/Section";
import ProjectHeader from "@/components/ProjectHeader";
import QuoteBox from "@/components/QuoteBox";
import YouTubeEmbed from "@/components/YouTubeEmbed";

const ProjectContent = () => {
  const router = useRouter();

  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <YouTubeEmbed
          videoId="JqPU2jZmcWE"
          title="Hyderabad: The Old City's Journey for Peace"
        />

        <QuoteBox quote="This is a virtual historical tour through the Old City of Hyderabad. We will be visiting four places — Gulzar Houz, Charminar, Nimrah Cafe and Chowmahalla — to explore Hyderabad's rocky journey with religion. Perhaps in exploring their conflict, we may be able to apply some of those lessons to our own lives and find harmony within our own differences. So settle in, we're going on a journey!"></QuoteBox>
        <p>
          I modelled the tour based on four other historical walking tours I had
          been on in the past which were all also designed to target foreigners
          in Hyderabad who had little to no familiarity with its history. I owe
          a great thanks to my dear friend Ravana Teja (Dheeraj) for a bulk of
          the inspiration on the design and content of the tour. Although I have
          done my due diligence in researching the history of Hyderabad as much
          as possible and incorporating the perspective of my tour guides as
          locals, I am necessarily tentative about misrepresenting a culture
          that is not mine. To address this, I have cited my sources within the
          video and provided a publicly available bibliography.
        </p>
        <p>
          With more time, I believe I could have done more justice to
          Hyderabad&apos;s history. Rich as it is, it deserved illustrations or
          image and audio based primary sources that better convey the
          narrative, which I didn&apos;t have time to create or research. If I
          was still in Hyderabad, I would have attended more walking tours and
          conducted interviews with locals to uncover stories about Hyderabad
          and understand which parts of their history is central to them.
          Nevertheless, I am aware that no single narrative will ever be
          complete enough and I am grateful for the opportunity to present my
          interpretation of Hyderabad&apos;s history.
        </p>
        <p>
          This walking tour was meant to be in-person, but due to the pandemic,
          I had to adapt. This project took on a new meaning, to introduce my
          peers who will not get to experience a semester in Hyderabad the
          chance to see even just part of its beauty.
        </p>
      </section>
    </div>
  );
};

export default ProjectContent;
