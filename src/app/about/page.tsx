import TypingText from "../../components/TypingText";
import React from "react";
import Image from "next/image";
import Section from "../../components/Section";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <div className="max-w-4xl w-full">
        <div className="overflow-hidden flex flex-col md:flex-row mb-8">
          <div className="relative w-56 h-56 flex-shrink-0">
            <Image
              src="/images/me.jpg"
              alt="Me!"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="flex-grow p-8">
            <p>
              <TypingText
                texts={[{ text: "Hello, Li-Lian here!", color: "text-black" }]}
              />
            </p>
            <p className="mt-4">So you&apos;re wondering who I am?</p>
            <p>(that&apos;s a pretty loaded question)</p>
          </div>
        </div>

        <Section
          title="work"
          imageSrc="/images/bluedot.png"
          titleColor="text-blue-600"
          imagePosition="left"
        >
          <p>
            I started working at BlueDot Impact at the end of 2022 and am now a
            <strong> Product Manager</strong>. I&apos;ve built the{" "}
            <a href="https://course.aisafetyfundamentals.com/alignment">
              Course Hub
            </a>{" "}
            (BlueDot&apos;s learning management system), designed facilitator
            training, launched digital marketing campaigns, automated internal
            workflows and an assortment of other tasks to help scale the impact
            of our course participants.
          </p>
        </Section>

        <Section
          title="education"
          imageSrc="/images/minerva.png"
          titleColor="text-orange-600"
          imagePosition="right"
        >
          <p>
            I graduated from Minerva University in 2022 with a double major in
            <strong> Data Science & Statistics</strong> and
            <strong> Historical Forces</strong>. It&apos;s a pretty neat
            university where I got to travel, live, and work in 5 different
            countries during my undergraduate degree.
          </p>
        </Section>
      </div>
    </div>
  );
}
