"use client";

import React, { useEffect, useState, useCallback } from "react";
import "../styles/TypingText.css"; // Ensure the CSS file is imported

interface TextItem {
  text: string;
  color?: string;
}

interface TypingTextProps {
  texts: TextItem[];
}

const TypingText: React.FC<TypingTextProps> = ({ texts }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const getRandomTypingSpeed = useCallback(() => {
    return Math.random() * (200 - 100) + 100; // Random delay between 100ms and 200ms
  }, []);

  const type = useCallback(() => {
    if (charIndex < texts[textIndex].text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[textIndex].text[charIndex]);
        setCharIndex(charIndex + 1);
      }, getRandomTypingSpeed());
      return () => clearTimeout(timeout);
    } else if (texts.length > 1) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000); // Pause before starting to delete
      return () => clearTimeout(timeout);
    }
  }, [charIndex, texts, textIndex, getRandomTypingSpeed]);

  const deleteText = useCallback(() => {
    if (charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, getRandomTypingSpeed());
      return () => clearTimeout(timeout);
    } else {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [charIndex, getRandomTypingSpeed, texts.length]);

  useEffect(() => {
    if (isDeleting) {
      const cleanup = deleteText();
      return cleanup;
    } else {
      const cleanup = type();
      return cleanup;
    }
  }, [deleteText, type, isDeleting]);

  const currentColor = texts[textIndex].color || "text-black";

  return (
    <span className={`${currentColor}`}>
      {displayedText}
      <span className="input-cursor"></span>
    </span>
  );
};

export default TypingText;
