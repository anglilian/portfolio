import React from "react";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

interface SectionProps {
  title: string;
  imageSrc: string;
  imageSize?: string;
  link?: string;
  children: React.ReactNode;
  titleColor?: string;
  imagePosition?: "left" | "right";
  fontSize?: "sm" | "lg"; // Add the fontSize prop
}

const Section: React.FC<SectionProps> = ({
  title,
  imageSrc,
  link,
  children,
  titleColor = "text-black",
  imagePosition = "left",
  fontSize = "sm", // Default to "sm" if not provided
}) => {
  return (
    <div className="mb-8">
      <div
        className={classNames("flex flex-col md:flex-row items-stretch mb-4", {
          "md:flex-row": imagePosition === "left",
          "md:flex-row-reverse": imagePosition === "right",
        })}
      >
        <div className="relative w-full h-32 md:h-auto md:w-1/6 max-w-[25%] flex-shrink-0 mb-4 md:mb-0">
          <div className="absolute inset-0 flex items-center justify-center">
            {link ? (
              <Link href={link}>
                <Image
                  src={imageSrc}
                  alt={title}
                  layout="fill"
                  objectFit="contain"
                  sizes="(max-width: 80px) 100vw, 40vw"
                />
              </Link>
            ) : (
              <Image
                src={imageSrc}
                alt={title}
                layout="fill"
                objectFit="contain"
              />
            )}
          </div>
        </div>
        <div className="flex-grow space-y-2 p-4 md:p-8">
          <h2 className={`text-xl font-semibold ${titleColor || "text-gray-400"}`}>{title}</h2>
          <div className={`${fontSize === "lg" ? "text-base text-gray-600" : "text-xs text-gray-500"}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
