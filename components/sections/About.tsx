"use client";

import Image from "next/image";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { useLanguage } from "@/lib/language";

export default function About() {
  const { t } = useLanguage();

  return (
    <main
      className="
        relative
        min-h-screen
        bg-[url('/images/bg-ivory.jpg')]
        bg-cover
        bg-center
        bg-fixed
      "
    >

      {/* =====================================================
          ABOUT HERO
      ===================================================== */}
      <section
        className="
          relative
          w-full
          px-8
          pt-8
          pb-14
        "
      >

        <div
          className="
            relative
            max-w-7xl
            mx-auto
            h-[390px]
            overflow-hidden
            rounded-xl
          "
        >

          {/* Background Image */}
          <Image
            src="/images/banner/about-banner.jpg"
            alt="About Beef Centric"
            fill
            priority
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-[#000000]/65
            "
          />

          {/* About Us */}
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              text-center
              px-8
            "
          >

            <h1
              className="
                font-[family-name:var(--font-cinzel)]
                text-[#E9E3D5]
                text-5xl
                md:text-6xl
                font-black
                uppercase
                tracking-wider
              "
            >
              {t.about.title}
            </h1>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT CONTENT
      ===================================================== */}
      <section
        className="
          bg-transparent
          px-8
          pt-4
          pb-8
        "
      >

        <div
          className="
            max-w-5xl
            mx-auto
            space-y-10
            font-[family-name:var(--font-plus-jakarta)]
            text-[#1D1D1D]
            text-lg
            leading-8
          "
        >

          {/* Paragraph 1 */}
          <p>
            {t.about.paragraph1Before}
            <strong className="font-bold">
              {t.about.companyName}
            </strong>
            {t.about.paragraph1After}
          </p>


          {/* Paragraph 2 */}
          <p>
            {t.about.paragraph2}
          </p>


          {/* Paragraph 3 */}
          <p>
            {t.about.paragraph3}
          </p>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}
      <WhyChooseUs />

    </main>
  );
}