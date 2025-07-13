import React from "react";

interface QuoteBoxProps {
  quote: string;
  author?: string;
}

const QuoteBox: React.FC<QuoteBoxProps> = ({ quote, author }) => {
  return (
    <div className="my-8 mx-auto max-w-3xl">
      <div className="bg-gray-50 border-l-4 border-orange-500 p-6 rounded-r-lg shadow-sm">
        <div className="prose prose-md prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline">
          <div className="text-gray-700 italic leading-relaxed mb-0 font-medium">
            {quote}
          </div>
          {author && (
            <footer className="mt-4 text-right text-gray-600 text-base font-normal not-italic">
              — {author}
            </footer>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
