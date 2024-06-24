"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import { useRouter } from "next/navigation";

import Section from "@/components/Section";
import ProjectHeader from "@/components/ProjectHeader";
import ImageGallery from "@/components/ImageGallery";
import QuoteBox from "@/components/QuoteBox";

const images = [
  { src: "/images/samgakji-1.png", alt: "Screenshots from game" },
  { src: "/images/samgakji-2.png", alt: "Screenshots from game" },
  { src: "/images/samgakji-3.png", alt: "Screenshots from game" },
  { src: "/images/samgakji-4.png", alt: "Screenshots from game" },
  // Add more images as needed
];

const ProjectContent = () => {
  const router = useRouter();

  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <ImageGallery images={images} />
        <QuoteBox
          quote="The birthplace of Chocopie, the site of a vibrant art scene and a US military base. While we were walking through Samgakji on a tour, it never occurred to us that Samgakji was all these things. Daniel Oh explained that there used to be a huge rotary above the three-way junction, but it had been taken down in 1994, with nothing left today save the pictures and stories archived by Yongsan Legacy Project. The rotary that once serviced traffic from Itaewon, Seoul Station and the Han River is now all but forgotten, along with all the other pieces of Samgakji.

It was a privilege to work with Yongsan Legacy Project. We hope that you try out the game and learn something new. You never know how history may surprise you."
        ></QuoteBox>
        <p>
          The history of Samgakji was fading, phasing out together with the
          final few holders of its memories and crumbling relics of its
          colourful identity. Yongsan Legacy&apos;s mission was to safeguard the
          memory and ours to spread it.
        </p>
        <p>
          We pitched the idea of building a choose-your-own-adventure game based
          on Samgakji to Daniel Oh, the founder of Yongsan Legacy, and he loved
          it. It was an innovative way to actively engage the general public
          with Samgakji&apos;s history.
        </p>
        <p>
          I was the story-teller, filling up the whiteboard and creating over a
          hundred slides to capture set out every possible path the player could
          take through the game to reach one of the eight possible endings.
        </p>
        <p>
          It was a complex project that required coordination with two other
          teammates in-charge of creating the website and design assets and two
          of Daniel Oh&apos;s students from the Korea University Architecture
          Department to translate the narrative and build 3D models of Samgakji.
        </p>
        <p>
          History is made up of the culmination of individual decisions and what
          better way to explore it than to make those decisions yourself and
          learn a little more about an almost forgotten place at the same time!
        </p>
      </section>
      <footer className="project-footer">
        <hr></hr>
        <Section
          title="Yongsan Legacy"
          imageSrc="/images/yongsan-logo.jpg"
          link="https://yongsanlegacy.org/"
        >
          <p>Preserving the invaluable treasures of Yongsan Garrison</p>
        </Section>
      </footer>
    </div>
  );
};

export default ProjectContent;
