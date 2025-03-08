import React from "react";
import Image from "next/image";
import ProjectBox from "@/components/ProjectBox";
import { metadata as purpleShroudMetadata } from "./projects/purple-is-the-noblest-shroud/metadata";
import { metadata as humansOfMinervaMetadata } from "./projects/humans-of-minerva/metadata";
import { metadata as goodreadsWrappedMetadata } from "./projects/goodreads-wrapped/metadata";
import BlogShowcase from "@/components/BlogShowcase";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow justify-center items-center overflow-hidden space-y-4">
      <div className="flex flex-col md:flex-row items-center p-6 pb-6">
        <div className="relative w-56 h-56 flex-shrink-0 profile-image-container">
          <Image
            src="/images/me.jpg"
            alt="Me!"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-lg profile-image profile-image-main"
            priority
          />
          <Image
            src="/images/me-fun.jpg"
            alt="Me fun!"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-lg profile-image profile-image-fun opacity-0 absolute top-0"
            priority
          />
        </div>
        <div className="flex-grow p-8 space-y-4 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold">Hey, Li-Lian here!</h1>
          <p className="text-xl md:text-2xl">
            I enjoy creating{" "}
            <span className="text-orange-600 italic">useful</span>,{" "}
            <span className="text-purple-600 italic ">delightful</span>{" "}
            experiences.
          </p>
        </div>
      </div>

      <div className="w-full bg-orange-600 p-6">
        <div className="flex flex-col items-center">
          <div className="max-w-4xl w-full space-y-8">
            <div className="w-full flex flex-row justify-center items-center space-x-4 pt-4">
              <h2 className="text-4xl font-bold text-white text-center">
                projects
              </h2>
              <div className="w-full h-0.5 bg-white"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ProjectBox
                title={goodreadsWrappedMetadata.title}
                startDate={goodreadsWrappedMetadata.startDate}
                skills={goodreadsWrappedMetadata.skills}
                imageSrc={goodreadsWrappedMetadata.imageSrc}
                slug={goodreadsWrappedMetadata.slug}
              />
              <ProjectBox
                title={purpleShroudMetadata.title}
                startDate={purpleShroudMetadata.startDate}
                skills={purpleShroudMetadata.skills}
                imageSrc={purpleShroudMetadata.imageSrc}
                slug={purpleShroudMetadata.slug}
              />
              <ProjectBox
                title={humansOfMinervaMetadata.title}
                startDate={humansOfMinervaMetadata.startDate}
                skills={humansOfMinervaMetadata.skills}
                imageSrc={humansOfMinervaMetadata.imageSrc}
                slug={humansOfMinervaMetadata.slug}
              />
            </div>
          </div>

          <Link
            href="/projects"
            className="text-white border-2 border-white rounded-full px-4 py-2 hover:bg-white hover:text-orange-600 transition-colors text-sm my-8 hover:no-underline"
          >
            see more
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center p-6">
        <div className="flex flex-col md:flex-row w-full max-w-4xl space-x-2">
          <div className="md:w-1/4 flex items-top justify-center">
            <h2 className="text-4xl font-bold text-orange-600">i also write</h2>
          </div>
          <div className="md:w-3/4 space-y-8 mt-4">
            <div className="w-full h-0.5 bg-orange-600"></div>
            <BlogShowcase />
            <div className="my-8">
              <Link
                href="/blog"
                className="text-orange-600 border-2 border-orange-600 rounded-full px-4 py-2 hover:bg-orange-600 hover:text-white transition-colors text-sm hover:no-underline"
              >
                see more
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-orange-600 p-6 flex flex-col items-center pt-12">
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl font-bold text-white text-center">
            hopefully, I leave the world a little better than I found it
          </h2>
        </div>
        <Footer />
      </div>
    </div>
  );
}
