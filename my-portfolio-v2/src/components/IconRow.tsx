import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IconRowProps {
  icons: {
    icon: IconDefinition;
    link: string;
    alt: string;
  }[];
}

const IconRow: React.FC<IconRowProps> = ({ icons }) => {
  return (
    <div className="flex space-x-4 justify-center">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center w-16 h-16 rounded-full border border-gray-300 hover:border-gray-500 transition"
        >
          <FontAwesomeIcon
            icon={item.icon}
            size="2x"
            className="text-gray-600"
          />
        </a>
      ))}
    </div>
  );
};

export default IconRow;
