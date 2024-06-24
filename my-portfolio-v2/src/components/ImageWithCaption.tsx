import React, { useState } from "react";
import Image from "next/image";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
}

const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div>
      <figure
        className="flex flex-col items-center cursor-pointer"
        onClick={() => setIsZoomed(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={600}
          height={400}
          objectFit="contain"
          className="rounded-lg shadow-lg"
        />
        <figcaption className="mt-2 text-center text-gray-500 text-sm">
          {alt}
        </figcaption>
      </figure>

      {isZoomed && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative w-3/4 h-3/4">
            <Image
              src={src}
              alt={alt}
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
            <button
              className="absolute top-4 right-4 text-white"
              onClick={(e) => {
                e.stopPropagation(); // Prevents click from closing the modal
                setIsZoomed(false);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageWithCaption;
