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
          Did you know that the sport from J.K. Rowling's Harry Potter is a{" "}
          <a href="https://www.usquidditch.org/about/rules">real game</a> with
          real rules and{" "}
          <a href="http://www.usquidditchcup.com/">real competitions?</a> Me
          neither.
        </p>
        <p>
          It started off as a thought: how could we advocate for gender equality
          through an event? Hours of trolling around the internet later, and I
          learned that Quidditch has team gender ratios which I believed was a
          good starting point (only to realise later that there is a big
          <a href="https://edeq.stanford.edu/sections/equality-outcome">
            difference between equality of opportunity and equality of outcome
          </a>
          ).
        </p>
        <p>
          With the help of the Damansara Dementors, a local Quidditch team, we
          learned the rules and how to build the proper equipment. 120
          participants attended what turned out to be{" "}
          <strong>Malaysia's largest Quidditch tournament</strong>!
        </p>
        <p>
          It was one of my first steps to imagining how experiences could be
          used for advocacy. The outcome was{" "}
          <strong>MYR1,251 raised for the Women's Aid Organisation</strong> and
          a game enjoyed by all genders. But I don't believe I could say I was
          successful on more than that front (at least not yet).
        </p>
      </section>
      <footer className="project-footer">
        <hr></hr>
        <Section
          title="Women's Aid Organisation"
          imageSrc="/images/wao.jpg"
          link="https://wao.org.my/"
        >
          <p>
            Our mission is to end violence against women and promote gender
            equality in Malaysia
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
