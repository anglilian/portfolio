"use client";

import React, { useEffect, useState, useRef } from "react";
import "../styles/TypingText.css"; // Import the CSS file

const TypingText = () => {
  const carouselText = [
    { text: "A Digital Artist", color: "#000090", tag: "digital-art" },
    { text: "An Educator", color: "#1D00FF", tag: "education" },
    { text: "A Writer", color: "#8D04FB", tag: "writing" },
    { text: "An Event Organiser", color: "#FF4EB1", tag: "events" },
    { text: "A Coder", color: "#FF9669", tag: "coding" },
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [waiting, setWaiting] = useState(false);

  const getRandomTypingSpeed = () => {
    return Math.random() * (200 - 100) + 100; // Random delay between 100ms and 200ms
  };

  useEffect(() => {
    let timeout;

    if (waiting) {
      timeout = setTimeout(() => {
        setWaiting(false);
        setIsDeleting(true);
      }, 2000); // Pause before deleting
    } else if (isDeleting) {
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex(index - 1);
        }, 100); // Adjust deleting speed here
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % carouselText.length);
        timeout = setTimeout(() => setIndex(1), 1000); // Pause before typing again
      }
    } else {
      if (index <= carouselText[textIndex].text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(carouselText[textIndex].text.slice(0, index));
          setIndex(index + 1);
        }, getRandomTypingSpeed()); // Use random typing speed
      } else {
        setWaiting(true);
        timeout = setTimeout(() => {}, 2000); // Pause before deleting (this timeout does nothing, just for clarity)
      }
    }

    return () => clearTimeout(timeout);
  }, [carouselText, index, textIndex, isDeleting, waiting]);

  return (
    <div className="typing-container">
      <div className="text-cursor-container">
        <div id="feature-text" style={{ color: carouselText[textIndex].color }}>
          {displayedText}
        </div>
        <span className="input-cursor"></span>
      </div>
    </div>
  );
};

export default TypingText;
