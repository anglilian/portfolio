import React from "react";

interface QuoteBoxProps {
  quote: string;
  author?: string;
}

const QuoteBox: React.FC<QuoteBoxProps> = ({ quote, author }) => {
  return (
    <div className="relative p-4 rounded-lg shadow-lg prose prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline">
      <div className="absolute top-0 left-0 text-6xl text-gray-300 transform -translate-x-3 -translate-y-3">
        &ldquo;
      </div>
      <blockquote className="relative z-10">
        <p className="text-md italic text-gray-700">{quote}</p>
        {author && (
          <footer className="text-right text-gray-600">
            &mdash; {author}
          </footer>
        )}
      </blockquote>
      <div className="absolute bottom-0 right-0 text-6xl text-gray-300 transform translate-x-3 -translate-y-3 h-3 ">
        &rdquo;
      </div>
    </div>
  );
};

export default QuoteBox;
