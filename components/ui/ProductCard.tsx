"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language";

type ProductCardProps = {
  image: string;
  title: string;
  price: string;
  slug: string;
  sold?: string;
};

export default function ProductCard({
  image,
  title,
  price,
  slug,
  sold,
}: ProductCardProps) {
  const { t } = useLanguage();

  return (
    <div
      className="
        relative
        bg-[#E9E3D5]
        border
        border-[#1D1D1D]
        rounded-3xl
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-2
        shadow-lg
      "
    >

      {/* =========================
          SOLD BADGE
          Hanya muncul kalau ada data
      ========================= */}
      {sold && (
        <div
          className="
            absolute
            top-5
            left-5
            z-10
            bg-[#A31E21]
            text-white
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
            font-[family-name:var(--font-plus-jakarta)]
          "
        >
          {sold}
        </div>
      )}

      {/* =========================
          IMAGE
      ========================= */}
      <div className="relative h-72">

        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />

      </div>

      {/* =========================
          CONTENT
      ========================= */}
      <div className="p-6 text-center">

        {/* PRODUCT NAME */}
        <h3
          className="
            font-[family-name:var(--font-cinzel)]
            text-2xl
            font-bold
            uppercase
            text-[#1D1D1D]
          "
        >
          {title}
        </h3>

        {/* PRICE */}
        <p
          className="
            mt-2
            text-[#A31E21]
            font-semibold
            font-[family-name:var(--font-plus-jakarta)]
          "
        >
          {price}
        </p>

        {/* =========================
            ORDER NOW
        ========================= */}
        <Link
          href={`/products/${slug}`}
          className="
            mt-6
            w-full
            bg-[#A31E21]
            hover:bg-[#8C181B]
            transition-colors
            text-white
            py-3
            rounded-xl
            font-semibold
            flex
            items-center
            justify-center
            font-[family-name:var(--font-plus-jakarta)]
          "
        >
          {t.products.orderNow}
        </Link>

      </div>

    </div>
  );
}