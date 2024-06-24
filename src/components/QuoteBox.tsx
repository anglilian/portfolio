import React from "react";

interface QuoteBoxProps {
  quote: string;
  author?: string;
}

const QuoteBox: React.FC<QuoteBoxProps> = ({ quote, author }) => {
  return (
    <div className="relative p-8 rounded-lg shadow-lg ">
      <div className="absolute top-0 left-0 text-8xl text-gray-300 transform -translate-x-3 -translate-y-3">
        &ldquo;
      </div>
      <blockquote className="relative z-10">
        <p className="text-xl italic text-gray-700">{quote}</p>
        {author && (
          <footer className="mt-4 text-right text-gray-600">
            &mdash; {author}
          </footer>
        )}
      </blockquote>
      <div className="absolute bottom-0 right-0 text-8xl text-gray-300 transform translate-x-3 -translate-y-3 h-3 ">
        &rdquo;
      </div>
    </div>
  );
};

export default QuoteBox;
