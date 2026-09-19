"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { products } from "@/components/data/products";
import { useLanguage } from "@/lib/language";

const heroProducts = products.slice(0, 5);

export default function Hero() {
  const { t, language } = useLanguage();

  const [selectedProduct, setSelectedProduct] = useState(
    heroProducts[0]
  );

  // =====================================================
  // AUTO CHANGE PRODUCT
  // =====================================================

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSelectedProduct((currentProduct) => {
        const currentIndex = heroProducts.findIndex(
          (product) =>
            product.slug === currentProduct.slug
        );

        const nextIndex =
          (currentIndex + 1) % heroProducts.length;

        return heroProducts[nextIndex];
      });
    }, 5000);

    return () => clearTimeout(timeout);
  }, [selectedProduct]);


  return (
    <section
      id="home"
      className="
        snap-start
        min-h-screen
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-10
          min-h-screen
          grid
          grid-cols-2
          gap-25
          items-center
        "
      >

        {/* =================================================
            LEFT
        ================================================= */}

        <div className="space-y-8">

          <div className="space-y-4">

            {/* PRODUCT NAME */}

            <h1
              className="
                font-[family-name:var(--font-cinzel)]
                text-5xl
                md:text-6xl
                font-black
                uppercase
                text-[#A31E21]
                leading-none
              "
            >
              {selectedProduct.name}
            </h1>


            {/* DESCRIPTION */}

            <p
              className="
                font-[family-name:var(--font-plus-jakarta)]
                text-[#1d1d1d]
                text-lg
                leading-8
                max-w-xl
              "
            >
              {language === "id"
                ? selectedProduct.description.id
                : selectedProduct.description.en}
            </p>

          </div>


          {/* =================================================
              BUTTONS
          ================================================= */}

          <div className="flex gap-4">

            {/* ORDER NOW */}

            <Link
              href={`/products/${selectedProduct.slug}`}
              className="
                bg-[#A31E21]
                text-[#E9E3D5]
                px-9
                py-4
                rounded-xl
                hover:bg-[#8F1A1C]
                transition
                inline-block
                font-[family-name:var(--font-plus-jakarta)]
              "
            >
              {t.hero.orderNow}
            </Link>


            {/* VIEW MORE */}

            <Link
              href="/products"
              className="
                border
                border-[#1d1d1d]
                px-9
                py-4
                rounded-xl
                hover:bg-[#E9E3D5]
                text-[#1d1d1d]
                hover:text-[#1d1d1d]
                transition
                inline-block
                font-[family-name:var(--font-plus-jakarta)]
              "
            >
              {t.hero.viewMore}
            </Link>

          </div>


          {/* =================================================
              THUMBNAILS
          ================================================= */}

          <div className="flex gap-5">

            {heroProducts.map((product) => (

              <button
                key={product.slug}
                onClick={() =>
                  setSelectedProduct(product)
                }
                aria-label={`View ${product.name}`}
                className={`
                  relative
                  w-24
                  h-24
                  rounded-xl
                  overflow-hidden
                  border-2
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-2
                  hover:scale-105
                  hover:shadow-lg
                  ${
                    selectedProduct.slug === product.slug
                      ? "border-[#A31E21]"
                      : "border-[#E9E3D5]"
                  }
                `}
              >

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-2"
                />

              </button>

            ))}

          </div>

        </div>


        {/* =================================================
            RIGHT
        ================================================= */}

        <div className="flex justify-center">

          <div
            className="
              relative
              w-[800px]
              h-[800px]
              flex
              items-center
              justify-center
            "
          >

            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              fill
              className="
                object-contain
                p-0
                scale-100
              "
              priority
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />

          </div>

        </div>

      </div>

    </section>
  );
}