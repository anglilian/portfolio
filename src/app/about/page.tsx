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
              and am now a<strong> Product Manager</strong>. I've built the{" "}
              <a href="https://course.aisafetyfundamentals.com/alignment">
                Course Hub
              </a>{" "}
              (BlueDot's custom learning platform), designed facilitator
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
              <strong> Historical Forces</strong>. It's a pretty neat university
              where I got to travel, live, and work in 5 different countries
              during my undergraduate degree!
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-div">
            <h1 className=" bg-pink-600 section-title">interests</h1>
          </div>
          <div className="w-3/4 space-y-2">
            <p>
              My fitness journey evolved from competitively running long
              distance, to dedicated yoga practice, to bouldering. Since moving
              to the UK, I've been training BJJ - a sport and community I feel
              at home in.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
