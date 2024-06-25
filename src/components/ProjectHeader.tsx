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
    <header className="relative h-auto w-full flex flex-col space-y-2">
      <div className="container mx-auto flex justify-end items-center">
        <BackButton />
      </div>
      <div className="flex flex-row flex-wrap">
        <p className="text-gray-500 uppercase text-sm md:text-lg tracking-wide font-light">
          {metadata.title && `${metadata.title}`}
          {metadata.role && (
            <>
              <span> • </span>
              {metadata.role}
            </>
          )}
          {metadata.link && metadata.linkLabel && (
            <>
              <span> • </span>
              <a href={`${metadata.link}`} className="font-normal">
                {metadata.linkLabel}
              </a>
            </>
          )}
        </p>
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
