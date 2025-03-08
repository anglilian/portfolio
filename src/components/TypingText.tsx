import React, { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  color?: string;
  typingSpeed?: number;
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  color = "text-black",
  typingSpeed = 100,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, typingSpeed]);

  return (
    <h1 className={`text-3xl md:text-4xl font-bold ${color}`}>
      {displayedText}
      <span className="animate-blink">|</span>
    </h1>
  );
};

export default TypingText;
