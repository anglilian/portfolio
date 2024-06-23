import React from "react";
import Image from "next/image";
import { SkillCategory, skillColors } from "@/constants/skillColours"; // Adjust the path accordingly

interface ProjectBoxProps {
  title: string;
  startDate: Date;
  endDate?: Date | string | null; // Allow different types for end date
  location?: string;
  skills: { name: string; category: SkillCategory }[]; // Adjusted to include skill category
  imageSrc: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  title,
  startDate,
  endDate,
  location,
  skills,
  imageSrc,
}) => {
  const formattedStartDate = startDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  let formattedEndDate;
  if (endDate === "Present") {
    formattedEndDate = "Present";
  } else if (endDate instanceof Date) {
    formattedEndDate = endDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  }

  return (
    // Added return statement here
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative pb-[66.67%]">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <h2 className="font-bold text-xl text-white">{title}</h2>
          <div className="flex-row flex space-x-2 text-gray-300 text-lg">
            <p>
              {formattedStartDate}
              {formattedEndDate && ` - ${formattedEndDate}`}
            </p>
            {location && (
              <>
                <span>•</span>
                <p>{location}</p>
              </>
            )}
          </div>
          <div className="flex flex-wrap space-x-2 pt-1">
            {skills.map((skill, index) => (
              <span
                key={index}
                className={`${
                  skillColors[skill.category]
                } text-white text-xs px-2 py-1 rounded lowercase`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
