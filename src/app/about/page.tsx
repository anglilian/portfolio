import React from "react";
import "@/app/about/about.css";

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-4xl space-y-8">
        <section className="about-section">
          <div className="section-div">
            <h1 className="bg-blue-600 section-title ">work</h1>
          </div>
          <div className="w-3/4">
            <p>
              I started working at{" "}
              <a href="https://bluedot.org">BlueDot Impact</a> in November 2022
              and am now a<strong> Product Manager</strong>. I&apos;ve built the{" "}
              <a href="https://course.aisafetyfundamentals.com/alignment">
                Course Hub
              </a>{" "}
              (BlueDot&apos;s learning management system), designed facilitator
              training, launched digital marketing campaigns, automated internal
              workflows and an assortment of other tasks to help scale the
              impact of our course participants.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-div">
            <h1 className=" bg-orange-600 section-title">education</h1>
          </div>
          <div className="w-3/4">
            <p>
              I graduated from{" "}
              <a href="https://minerva.edu">Minerva University</a> in 2022 with
              a double major in
              <strong> Data Science & Statistics</strong> and
              <strong> Historical Forces</strong>. It&apos;s a pretty neat
              university where I got to travel, live, and work in 5 different
              countries during my undergraduate degree!
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-div">
            <h1 className=" bg-pink-600 section-title">interests</h1>
          </div>
          <div className="w-3/4">
            <p>
              I did long distance running while I was in school, moved on to
              yoga in university, did bouldering for two years then decided to
              try something new. I had always wanted to learn a martial arts and
              am grateful to be training with{" "}
              <a href="https://www.bjjlondon.com/">Carlson Gracie London</a>{" "}
              (oss!) since I moved to the UK. My goal for 2024 is to compete
              twice!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
