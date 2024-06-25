import React from "react";
import Image from "next/image";
import { skillColors } from "@/constants/skillColours"; // Adjust the path accordingly
import Link from "next/link";
import { ProjectMetadata } from "@/types/projects";

const ProjectBox: React.FC<ProjectMetadata> = ({
  title,
  startDate,
  endDate,
  location,
  skills,
  imageSrc,
  slug,
}) => {
  const formatDate = (date: Date) => {
    if (!date) return "";

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: date.getMonth() > 0 ? "short" : undefined,
    };

    return date.toLocaleDateString("en-US", options);
  };

  const formattedStartDate = formatDate(startDate);

  let formattedEndDate;
  if (endDate === "Present") {
    formattedEndDate = "Present";
  } else if (endDate instanceof Date) {
    formattedEndDate = formatDate(endDate);
  }

  return (
    <Link href={`/projects/${slug}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative pb-[66.67%]">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 
              33vw" // Adjust the sizes as needed
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h2 className="font-bold text-2xl text-white">{title}</h2>
            <div className="flex-wrap flex space-x-2 text-gray-300 text-lg">
              <p>
                {formattedStartDate}
                {formattedEndDate && ` - ${formattedEndDate}`}
                {location && (
                  <>
                    <span> • </span>
                    {location}
                  </>
                )}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={`bg-${
                    skillColors[skill.category]
                  } text-white text-sm px-2 rounded lowercase`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectBox;
