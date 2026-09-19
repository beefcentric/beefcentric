"use client";

import {
  Award,
  Boxes,
  Snowflake,
  BadgeDollarSign,
  Headset,
  Handshake,
} from "lucide-react";
import { useLanguage } from "@/lib/language";

type BenefitKey =
  | "premiumQuality"
  | "consistentSupply"
  | "coldChainIntegrity"
  | "competitiveValue"
  | "customerFocusedService"
  | "trustedPartnership";

const benefits: {
  key: BenefitKey;
  icon: typeof Award;
}[] = [
  {
    key: "premiumQuality",
    icon: Award,
  },
  {
    key: "consistentSupply",
    icon: Boxes,
  },
  {
    key: "coldChainIntegrity",
    icon: Snowflake,
  },
  {
    key: "competitiveValue",
    icon: BadgeDollarSign,
  },
  {
    key: "customerFocusedService",
    icon: Headset,
  },
  {
    key: "trustedPartnership",
    icon: Handshake,
  },
];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="bg-transparent px-8 pt-12 pb-24">

      {/* Same width as About paragraphs */}
      <div className="max-w-5xl mx-auto">

        {/* =====================================================
            BENEFIT CARDS
        ===================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            const content = t.whyChooseUs[benefit.key];

            return (
              <div
                key={benefit.key}
                className="
                  group
                  relative
                  aspect-square
                  bg-[#A31E21]
                  rounded-xl
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                  p-10
                  cursor-default
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >

                {/* =================================================
                    NORMAL STATE
                ================================================= */}
                <div
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    transition-all
                    duration-500
                    group-hover:opacity-0
                    group-hover:scale-75
                  "
                >

                  <Icon
                    size={52}
                    strokeWidth={1.5}
                    className="text-[#E9E3D5]"
                  />

                  <h3
                    className="
                      mt-6
                      font-[family-name:var(--font-cinzel)]
                      text-xl
                      font-bold
                      uppercase
                      text-[#E9E3D5]
                    "
                  >
                    {content.title}
                  </h3>

                </div>


                {/* =================================================
                    HOVER STATE
                ================================================= */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    p-10
                    opacity-0
                    scale-90
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    group-hover:scale-100
                  "
                >

                  <p
                    className="
                      font-[family-name:var(--font-plus-jakarta)]
                      text-[#E9E3D5]
                      text-sm
                      md:text-base
                      leading-7
                      text-center
                    "
                  >
                    {content.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>


        {/* =====================================================
            OUR MISSION
        ===================================================== */}
        <div
          className="
            max-w-5xl
            mx-auto
            mt-28
            text-left
          "
        >

          <p
            className="
              font-[family-name:var(--font-plus-jakarta)]
              text-[#1D1D1D]
              text-lg
              leading-8
            "
          >
            {t.whyChooseUs.mission}
          </p>

        </div>

      </div>

    </section>
  );
}