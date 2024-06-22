import React from "react";
import Image from "next/image";
import classNames from "classnames";

interface SectionProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  imageSize?: string;
  children: React.ReactNode;
  titleColor?: string;
  imagePosition?: "left" | "right";
}

const Section: React.FC<SectionProps> = ({
  title,
  imageSrc,
  imageAlt,
  children,
  titleColor = "text-blue-600",
  imagePosition = "left",
}) => {
  return (
    <div className=" p-8 mb-8">
      <div
        className={classNames("flex items-stretch mb-4", {
          "flex-row": imagePosition === "left",
          "flex-row-reverse": imagePosition === "right",
        })}
      >
        <div className="relative w-full md:w-1/3 h-auto flex-shrink-0">
          <div
            className={`absolute inset-0 flex items-center justify-center mr-8`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className={`text-2xl font-bold ${titleColor}`}>{title}</h2>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Section;
