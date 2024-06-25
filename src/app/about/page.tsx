import React from "react";
import Section from "../../components/Section";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <div className="max-w-4xl w-full space-y-8 m-8">
        <div className="overflow-hidden flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold">
            So you&apos;re wondering who I am?
          </h1>
          <p>(that&apos;s a pretty loaded question)</p>
        </div>

        <Section
          title="work"
          imageSrc="/images/bluedot.png"
          link="https://bluedot.org"
          titleColor="text-blue-600"
          imagePosition="left"
          fontSize="lg"
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
          link="https://minerva.edu"
          titleColor="text-orange-600"
          imagePosition="right"
          fontSize="lg"
        >
          <p>
            I graduated from Minerva University in 2022 with a double major in
            <strong> Data Science & Statistics</strong> and
            <strong> Historical Forces</strong>. It&apos;s a pretty neat
            university where I got to travel, live, and work in 5 different
            countries during my undergraduate degree!
          </p>
        </Section>
        <Section
          title="interests"
          imageSrc="/images/bjj.jpeg"
          link="https://www.bjjlondon.com/"
          titleColor="text-red-500"
          imagePosition="left"
          fontSize="lg"
        >
          <p>
            I did long distance running while I was in school, moved on to yoga
            in university, did bouldering for two years then decided to try
            something new. I had always wanted to learn a martial arts and am
            grateful to be training with Carlson Gracie London (oss!) since I
            moved to the UK. My goal for 2024 is to compete twice!
          </p>
        </Section>
      </div>
      <Footer />
    </div>
  );
}
