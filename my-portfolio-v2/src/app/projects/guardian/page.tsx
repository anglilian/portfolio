"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import { useRouter } from "next/navigation";

import Section from "@/components/Section";
import ProjectHeader from "@/components/ProjectHeader";
import QuoteBox from "@/components/QuoteBox";

const Usapps = () => {
  const router = useRouter();

  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <QuoteBox quote="GUARDIAN is always by your side. The app is designed to empower women through accessible SOS features, alerts to contacts and quick directions to safe places. With GUARDIAN, you'll never walk alone."></QuoteBox>
        <p>
          This was the third hackathon I'd ever attended and it was also the
          second virtual one. I signed up hoping to immerse myself in over 48
          hours of learning, of trying and failing, of simply making - little
          did I know that the project would be awarded First Place.
        </p>
        <p>
          Our team met for the first time once the hackathon started and we
          brainstormed, throwing out ideas and scrapping most of them until
          GUARDIAN emerged. The idea was borne out of a concern that people like
          me, living outside the US didn't have access to similar apps for
          safety. But what if we could make the app international? What if we
          could make it available to women no matter where they resided in the
          world?
        </p>
        <p>
          My role was creating the prototype of the app on Figma - everything we
          hoped the app would be after it was developed. At the same time, my
          other two teams got cracking on Flutter, attempting to include Google
          authentication and SMS SOS messages. I joined them in developing a
          feature that would suggest safe places for the user to go to in times
          of distress using Google Maps API and linked through a REST API.
        </p>
        <p>
          I slept for fours hours that whole weekend, and it was worth it for
          all I'd learned, for the friends I'd gained. I only wish I could have
          met them in person to give them a hug.
        </p>
        <p>
          It's still my hope that we fully develop this app and make it
          available to anyone, anywhere and any time. Fingers crossed!
        </p>
      </section>
      <footer className="project-footer">
        <hr></hr>
        <Section
          title="Rose Hack"
          imageSrc="/images/rosehack.png"
          imageAlt="Rose Hack"
          link="https://rosehack.com/"
        >
          <p>
            Rose Hack is UC Riverside's women-centric hackathon. Their mission
            is to encourage individuals from underrepresented groups in STEM to
            create a strong network together and build an amazing project
            through their shared passions in Science and Technology.
          </p>
        </Section>
      </footer>
    </div>
  );
};

export default Usapps;
