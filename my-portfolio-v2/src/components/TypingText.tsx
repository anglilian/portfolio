"use client";

import React, { useEffect, useState } from "react";
import "../styles/TypingText.css"; // Ensure the CSS file is imported

interface TypingTextProps {
  text: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  const getRandomTypingSpeed = () => {
    return Math.random() * (200 - 100) + 100; // Random delay between 100ms and 200ms
  };

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;

    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, getRandomTypingSpeed()); // Use random typing speed
    }

    return () => clearTimeout(timeout);
  }, [text, index]);

  return (
    <div className="flex items-baseline">
      <div className="text-4xl">{displayedText}</div>
      <span className="input-cursor"></span>
    </div>
  );
};

export default TypingText;
