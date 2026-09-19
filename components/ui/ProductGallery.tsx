"use client";

import Image from "next/image";
import { useState } from "react";

type ProductGalleryProps = {
  images: string[];
  name: string;
};

export default function ProductGallery({
  images,
  name,
}: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#E9E3D5]/80 border border-[#1D1D1D]/20">

      {/* PRODUCT IMAGE */}
      <Image
        src={images[currentIndex]}
        alt={name}
        fill
        priority
        className="object-contain p-10"
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
      />

      {/* WATERMARK */}
      <Image
        src="/images/products/watermark.png"
        alt=""
        fill
        className="object-contain p-10 pointer-events-none"
      />

      {/* NAVIGATION */}
      {hasMultipleImages && (
        <>
          {/* PREVIOUS */}
          <button
            onClick={previousImage}
            aria-label="Previous image"
            className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              w-11
              h-11
              rounded-full
              bg-[#1D1D1D]/30
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:bg-[#A31E21]/70
              hover:scale-110
            "
          >
            <span
              className="
                w-3
                h-3
                border-l-2
                border-b-2
                border-[#E9E3D5]
                rotate-45
                translate-x-0.5
              "
            />
          </button>

          {/* NEXT */}
          <button
            onClick={nextImage}
            aria-label="Next image"
            className="
              absolute
              right-5
              top-1/2
              -translate-y-1/2
              w-11
              h-11
              rounded-full
              bg-[#1D1D1D]/30
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:bg-[#A31E21]/70
              hover:scale-110
            "
          >
            <span
              className="
                w-3
                h-3
                border-t-2
                border-r-2
                border-[#E9E3D5]
                rotate-45
                -translate-x-0.5
              "
            />
          </button>

          {/* DOT INDICATORS */}
          <div
            className="
              absolute
              bottom-5
              left-1/2
              -translate-x-1/2
              flex
              items-center
              gap-2
            "
          >
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`
                  w-2.5
                  h-2.5
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    currentIndex === index
                      ? "bg-[#A31E21]"
                      : "bg-[#1D1D1D]/30 hover:bg-[#1D1D1D]/50"
                  }
                `}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}