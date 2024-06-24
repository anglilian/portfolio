"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import { useRouter } from "next/navigation";

import ProjectHeader from "@/components/ProjectHeader";
import Section from "@/components/Section";
import ImageWithCaption from "@/components/ImageWithCaption";

const ProjectContent = () => {
  const router = useRouter();

  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <p>
          This was the first event I ever organised. As a girl of 15, I stumbled
          through the world of social impact, constantly reassessing how I might
          give more, how I might change more.
        </p>
        <p>
          Money was the answer I found back then which led to the charity run.
          The Leo Club had never organised one in its history, so my team and I
          paved the way for others to learn the operational steps to look out
          for.
        </p>
        <p>
          <strong>250 participants ran to raise MYR2,855</strong> to grant a
          terminally ill child&apos;s wish to visit Petrosains with his family.
          The question was what else could I do now?
        </p>
        <ImageWithCaption
          src="/images/rftc-shirt.jpg"
          alt="I designed that shirt! It was one of my very first forays into digital art back when I was still using Paint.net."
        ></ImageWithCaption>
      </section>
      <footer className="project-footer">
        <hr></hr>
        <Section
          title="Make-A-Wish Malaysia"
          imageSrc="/images/make-a-wish.jpg"
          link="https://makeawish.org.my/"
        >
          <p>
            Make-A-Wish is the largest wish-granting organization in the world
            and can be found in nearly 50 countries around the globe.
          </p>
        </Section>
        <Section
          title="Leo Club of Sri Kuala Lumpur
"
          imageSrc="/images/leo-club-skl.jpg"
          link="https://www.facebook.com/sriklleoclub"
        >
          <p>
            Community service club for Year 9 and upper students in Sri Kuala
            Lumpur Secondary School
          </p>
        </Section>
      </footer>
    </div>
  );
};

export default ProjectContent;
