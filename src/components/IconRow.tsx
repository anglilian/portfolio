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
          title={item.alt}
          className="flex justify-center items-center w-10 h-10 rounded-full transition duration-300 hover:scale-110"
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
