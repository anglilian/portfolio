"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import BackButton from "@/components/BackButton"; // Import the BackButton component

interface ProjectHeaderProps {
  metadata: {
    title: string;
    role?: string;
    link?: string;
    linkLabel?: string;
    bannerImage?: string; // Make bannerImage optional
  };
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ metadata }) => {
  return (
    <header className="relative h-auto w-full flex flex-col space-y-4">
      <div className="container mx-auto flex justify-end items-center">
        <BackButton />
      </div>
      <div className="flex flex-row flex-wrap space-x-4 text-gray-600 uppercase text-lg tracking-wide justify-center">
        {metadata.title && <p>{metadata.title}</p>}
        {metadata.role && (
          <>
            <span>•</span>
            <p>{metadata.role}</p>
          </>
        )}
        {metadata.link && metadata.linkLabel && (
          <>
            <span>•</span>
            <Link
              href={metadata.link}
              className="text-pink-700 flex items-center font-bold flex-wrap justify-center text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-6.668-3.637a.75.75 0 00-1.084.67v7.298a.75.75 0 001.084.67l6.668-3.637a.75.75 0 000-1.34z"
                />
              </svg>
              {metadata.linkLabel}
            </Link>
          </>
        )}
      </div>
      {metadata.bannerImage && (
        <div className="flex justify-center items-center w-full overflow-hidden shadow-lg">
          <div className="relative w-full h-auto">
            <Image
              src={metadata.bannerImage}
              alt={metadata.title}
              layout="responsive"
              width={1920} // Placeholder width
              height={1080} // Placeholder height
              className="rounded-md"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default ProjectHeader;
