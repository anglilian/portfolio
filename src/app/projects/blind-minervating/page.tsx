"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import { useRouter } from "next/navigation";

import ProjectHeader from "@/components/ProjectHeader";
import QuoteBox from "@/components/QuoteBox";
import ImageWithCaption from "@/components/ImageWithCaption";

const ProjectContent = () => {
  const router = useRouter();

  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <p>
          At the tail end of my first year at Minerva, I realised that M22
          (Minerva Class of 2022) were in a unique position. We were spending a
          semester with our seniors who we would never have met considering each
          cohort spends each semester in a different city. M22 would finish up
          their first year by the end of April while M19 would graduate at the
          end of May.
        </p>
        <p>
          I thought:{" "}
          <strong>
            &quotWouldn&apos;t it be cool if we got a chance to get to know
            M19?&quot
          </strong>{" "}
          and got cracking at what I dubbed &apos;Blind Minervating&apos;. It
          was a complicated workflow I cobbled together in a few days and rolled
          out.
        </p>
        <ImageWithCaption
          src="/images/blind-minervating-process.png"
          alt="Workflow for matching people up!"
        ></ImageWithCaption>
        <p>
          I matched <strong>40 Minervans</strong> using this process and that
          was all I wanted - for people to meet each other and have fun,
          inspiring and meaningful conversations before we dispersed all over
          the world.
        </p>
        <p>
          The process I used could be refined with initiatives like{" "}
          <a href="http://www.teawithstrangers.com/">Tea with Strangers</a> and{" "}
          <a href="https://lunchclub.com/">LunchClub</a> which both have more
          systematised methods of matching and meeting. But it taught me a
          started me off on another interest - community building. The question
          now was how could these connections be sustained and compounded?
        </p>
        <QuoteBox
          quote="Thank you for organizing this, I had a great time! You've made everything really easy and professional (seriously these emails look better than 90% of Minerva stuff) and the guide was very impressive! I really appreciate the effort which I can see went into it to craft the right framing and find good questions for our specific interests."
          author="Anonymised feedback"
        ></QuoteBox>
      </section>
    </div>
  );
};

export default ProjectContent;
