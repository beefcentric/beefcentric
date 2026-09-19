"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language";

export default function AboutPreview() {
  const { t } = useLanguage();

  return (
    <section
      id="about-preview"
      className="
        snap-start 
        min-h-full 
        bg-[url('/images/bg-wood-light.jpg')]
        bg-cover
        bg-center
        flex items-center
      "
    >
      <div className="max-w-[1400px] mx-auto w-full px-10">

        <div className="grid grid-cols-[1.4fr_0.8fr] gap-20 items-center">

          {/* Image */}
          <div className="relative w-full h-[500px] overflow-hidden rounded-2xl">
            <Image
              src="/images/about.jpg"
              alt="Beef Centric"
              fill
              className="object-cover"
            />
          </div>


          {/* Content */}
          <div className="pb-0">

            {/* Brand */}
            <h2
                className="
                    font-[family-name:var(--font-cinzel)]
                    text-3xl
                    font-bold
                    leading-tight
                    text-[#8F1A1C]
                "
            >
                {t.aboutPreview.title}
            </h2>

            {/* Description */}
            <p
              className="
                mt-8
                font-[family-name:var(--font-plus-jakarta)]
                text-base
                leading-8
                text-[#1D1D1D]
              "
            >
              {t.aboutPreview.descriptionBefore}
              <strong className="font-bold">
                {t.aboutPreview.companyName}
              </strong>
              {t.aboutPreview.descriptionAfter}
            </p>


            {/* Button */}
            <Link
              href="/about"
              className="
                inline-block
                mt-8
                bg-[#A31E21]
                text-[#F8F7F5]
                px-8
                py-3
                rounded-xl
                font-[family-name:var(--font-plus-jakarta)]
                text-sm
                font-medium
                hover:bg-[#8F1A1C]
                transition-colors
              "
            >
              {t.aboutPreview.learnMore}
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}