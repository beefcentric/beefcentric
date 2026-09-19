"use client";

import Image from "next/image";
import ProductCard from "@/components/ui/ProductCard";
import Categories from "@/components/sections/Categories";
import { products } from "@/components/data/products-backup";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/lib/language";

export default function Products() {
  const { t } = useLanguage();

  // =====================================================
  // CATEGORY FILTER
  // =====================================================

  const [selectedCategory, setSelectedCategory] = useState("All");

  // =====================================================
  // SEARCH
  // =====================================================

  const searchParams = useSearchParams();

  const searchQuery = searchParams.get("search") || "";

  // =====================================================
  // FILTER PRODUCTS
  // =====================================================

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

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
          PRODUCTS HERO
      ===================================================== */}

      <section
        className="
          relative
          w-full
          px-8
          pt-[110px]
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
            src="/images/banner/products-banner.jpg"
            alt="Products Beef Centric"
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


          {/* Products Title */}

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
              {t.products.title}
            </h1>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCT SECTION
      ===================================================== */}

      <section
        className="
          bg-transparent
          px-8
          pt-4
          pb-24
        "
      >

        <div className="max-w-7xl mx-auto">


          {/* =================================================
              SEARCH RESULT
          ================================================= */}

          {searchQuery && (
            <p
              className="
                mb-8
                text-center
                font-[family-name:var(--font-plus-jakarta)]
                text-[#1D1D1D]
              "
            >

              {t.products.showingResultsFor}{" "}

              <span className="font-bold text-[#A31E21]">
                "{searchQuery}"
              </span>

            </p>
          )}


          {/* =================================================
              CATEGORY FILTER
          ================================================= */}

          <div className="mb-12">

            <Categories
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

          </div>


          {/* =================================================
              PRODUCT GRID
          ================================================= */}

          {filteredProducts.length > 0 ? (

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                gap-8
              "
            >

              {filteredProducts.map((product) => (

                <ProductCard
                  key={product.slug}
                  image={product.image}
                  title={product.name}
                  price={product.price}
                  slug={product.slug}
                />

              ))}

            </div>

          ) : (

            /* =================================================
                EMPTY STATE
            ================================================= */

            <div
              className="
                py-20
                text-center
                font-[family-name:var(--font-plus-jakarta)]
                text-[#1D1D1D]
              "
            >

              <h2
                className="
                  font-[family-name:var(--font-cinzel)]
                  text-3xl
                  font-black
                  uppercase
                  text-[#A31E21]
                "
              >
                {t.products.productNotFound}
              </h2>

              <p className="mt-3">

                {t.products.noProductMatch}{" "}

                {searchQuery
                  ? `"${searchQuery}"`
                  : "this category"}.

              </p>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}