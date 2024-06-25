import React from "react";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export default function About() {
  return (
    <div className="flex flex-col flex-grow justify-center items-center overflow-hidden m-8 space-y-4">
      <div className=" flex flex-col justify-center items-center space-y-4">
        <FontAwesomeIcon icon={faGear} size="2x" className="text-gray-600" />
        <p>Under construction</p>
      </div>
    </div>
  );
}
