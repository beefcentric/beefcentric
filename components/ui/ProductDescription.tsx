"use client";

import { useLanguage } from "@/lib/language";

type ProductDescriptionProps = {
  description: {
    en: string;
    id: string;
  };
};

export default function ProductDescription({
  description,
}: ProductDescriptionProps) {
  const { language } = useLanguage();

  return (
    <p
      className="
        max-w-xl
        font-[family-name:var(--font-plus-jakarta)]
        text-base
        leading-8
        text-[#1D1D1D]
      "
    >
      {language === "id"
        ? description.id
        : description.en}
    </p>
  );
}