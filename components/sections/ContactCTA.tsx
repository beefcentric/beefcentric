"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language";

export default function ContactCTA() {
  const { t } = useLanguage();

  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/delivery-1.jpg",
    "/images/delivery-2.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact-cta"
      className="
        snap-start
        h-full
        bg-[url('/images/bg-dark.jpg')]
        bg-cover
        bg-center
        flex
        items-center
      "
    >
      <div className="max-w-7xl mx-auto px-10 w-full grid grid-cols-2 gap-20 items-center">

        {/* Left Content */}
        <div>
          <h2
            className="
              font-[family-name:var(--font-cinzel)]
              text-5xl
              font-bold
              uppercase
              leading-tight
              text-[#E2AF1D]
            "
          >
            {t.contactCTA.title}
          </h2>

          <p
            className="
              mt-8
              font-[family-name:var(--font-plus-jakarta)]
              text-base
              leading-7
              text-[#E9E3D5]
              max-w-xl
            "
          >
            {t.contactCTA.description}
          </p>

          <Link
            href="/contact"
            className="
              inline-block
              mt-8
              bg-[#A31E21]
              text-[#F8F7F5]
              px-8
              py-3
              rounded-xl
              font-[family-name:var(--font-plus-jakarta)]
              font-medium
              hover:bg-[#8F1A1C]
              transition-colors
            "
          >
            {t.contactCTA.contactUs}
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-end">
          <div
            className="
              relative
              w-[600px]
              h-[400px]
              overflow-hidden
              rounded-2xl
            "
          >
            {images.map((image, index) => (
              <Image
                key={image}
                src={image}
                alt="Beef Centric Delivery"
                fill
                className={`
                  object-cover
                  transition-opacity
                  duration-1000
                  ease-in-out
                  ${
                    currentImage === index
                      ? "opacity-100"
                      : "opacity-0"
                  }
                `}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}