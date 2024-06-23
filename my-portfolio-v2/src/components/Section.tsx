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
}

const Section: React.FC<SectionProps> = ({
  title,
  imageSrc,
  link,
  children,
  titleColor = "text-black",
  imagePosition = "left",
}) => {
  return (
    <div className="">
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
            {link ? (
              <Link href={link}>
                <Image
                  src={imageSrc}
                  alt={title}
                  layout="fill"
                  objectFit="contain"
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
        <div className="space-y-2">
          <h2 className={`text-2xl font-bold ${titleColor}`}>{title}</h2>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Section;
