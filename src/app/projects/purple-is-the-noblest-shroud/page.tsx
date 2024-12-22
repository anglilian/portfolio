"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import ProjectHeader from "@/components/ProjectHeader";
import QuoteBox from "@/components/QuoteBox";
import {
  faInstagram,
  faAmazon,
  faGoodreads,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons"; // Import globe icon from solid icons
import IconRow from "@/components/IconRow"; // Import the IconRow component

const ProjectContent = () => {
  const icons = [
    {
      icon: faInstagram,
      link: "https://www.instagram.com/lianwritesalot/",
      alt: "Instagram",
    },
    {
      icon: faAmazon,
      link: "https://www.amazon.com/dp/9671942709",
      alt: "Amazon",
    },
    {
      icon: faGoodreads,
      link: "https://www.goodreads.com/book/show/57027582-purple-is-the-noblest-shroud",
      alt: "Goodreads",
    },
    {
      icon: faGlobe,
      link: "https://purpleisthenoblestshroud.wordpress.com/",
      alt: "Website",
    },
  ];

  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <IconRow icons={icons} />

        <QuoteBox
          quote="

Theodora’s life was laid out for her generations before she was born. She would act on the stage until she was no longer beautiful enough and birth daughters who would do exactly as she had. Then, Theodora makes a decision to pursue freedom far from Constantinople. She runs from her fate and stumbles into the arms of the most powerful man in the empire — Emperor Justinian.

But the imperial court is no place for a woman from the lowest rungs of society. She had been legally barred from leaving the theatre or marrying any man of rank. Yet, she left behind a legacy as the champion of the fallen and the mother of the empire.

How did she do it?"
        />
        <p>
          In the summer of 2020 when COVID-19 hit, I was cloistered at home with
          little to occupy my time. I&apos;d just completed a virtual walking
          tour of Hyderabad for my history class and was thinking of making a
          series of similar videos. But I found an opportunity with the{" "}
          <a href="https://drive.google.com/file/d/1sCYjwNLgzZSi1BUYVaHkV9GLHlERjbGe/view">
            PEP Fellowship
          </a>{" "}
          to do just that with guidance! Little did I know that after a call
          with Eric Koester that I&apos;d find myself taking my first steps on
          the journey to becoming a published author.
        </p>
        <p>
          I hadn&apos;t the slightest idea what I would write about, but as I
          was rewatching{" "}
          <a href="https://www.youtube.com/watch?v=H_2E0RxVHH4&list=PLhyKYa0YJ_5Cfgs7L6XFvcQE_TpyyYiEI">
            Extra Credits
          </a>{" "}
          series about Emperor Justinian, I wondered who was his wife? Theodora
          was spoken of highly and commended vaguely for a score of actions, and
          I seized upon the spark of curiosity to answer my own question.
        </p>
        <p>
          With{" "}
          <a href="https://www.minerva.kgi.edu/people/sonja-ostrow-phd-assistant-professor-arts-and-humanities/">
            Sonja Ostrow
          </a>{" "}
          as my coach, I began research in May 2020 and sputtered through
          writing half of my first draft by the end of the year. I discovered
          fascinating nuggets about life during Late Antiquity (6th century) and
          cold-emailed the academics who wrote these papers to flesh out my
          understanding.
        </p>
        <p>
          The new wave of information knocked my entire conception of Theodora
          sideways, so much so that{" "}
          <a
            href="https://anglilian.com/blog/i-wrote-3000-words-a-day-for-35-days"
            target="_blank"
          >
            I rewrote the entire novel in 35 days
          </a>
          . I powered through thousands of words a day and spent months after
          refining it into the nearly 100,000 word behemoth you see today.
        </p>
        <p>
          Then came the actual publishing, a world I was even less acquainted
          with than that of writing. Book covers, historical maps, typesetting,
          printing, marketing, ISBNs, copyright. These are the lesser known
          steps between writing and publishing, but they were all exciting, all
          new frontiers.
        </p>
        <p>
          On April 24th 2021, a year after I started along this journey, I
          became a published author with almost 200 copies sold to date. It is a
          modest number for a first-time author, but I miss the research, the
          writing, the crafting and you can bet there&apos;s going to be a
          sequel!
        </p>
      </section>
    </div>
  );
};

export default ProjectContent;
