"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Globe, Search, X } from "lucide-react";
import { useLanguage } from "@/lib/language";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [search, setSearch] = useState("");
  
  const { language, toggleLanguage, t } = useLanguage();

  // =====================================================
  // HOME = HERO DI BELAKANG HEADER
  // PAGE LAIN = HEADER SELALU DARK
  // =====================================================
  const isHomePage = pathname === "/";

  // =====================================================
  // DETECT SCROLL POSITION
  // =====================================================
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =====================================================
  // SEARCH
  // =====================================================
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!search.trim()) return;

    router.push(
      `/products?search=${encodeURIComponent(search.trim())}`
    );
  };

  // =====================================================
  // NAVIGATION ACTIVE STATE
  // =====================================================
  const navClass = (href: string) => {
    return pathname === href
      ? `
          text-[#F8F7F5]
          font-bold
          border-b-2
          border-[#F8F7F5]
          pb-1
        `
      : `
          text-[#E9E3D5]
          hover:text-[#E2AF1D]
          transition-colors
        `;
  };

  // =====================================================
  // HEADER BACKGROUND
  // =====================================================
  const headerBackground =
    "bg-[#1D1D1D]";

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        w-full
        h-20
        z-[100]
        flex
        items-center
        px-10
        ${headerBackground}
        transition-all
        duration-300
      `}
    >

      {/* =====================================================
          LOGO
      ===================================================== */}
      <div className="flex-1">

        <Link
          href="/"
          className="flex items-center gap-4"
        >

          <img
            src="/icon.png"
            alt="Beef Centric Logo"
            className="w-10 h-10 object-contain"
          />

          <h1
            className="
              font-[family-name:var(--font-cinzel)]
              text-3xl
              font-bold
              uppercase
            "
          >
            <span className="text-[#A31E21]">
              Beef
            </span>{" "}

            <span className="text-[#E2AF1D]">
              Centric
            </span>
          </h1>

        </Link>

      </div>


      {/* =====================================================
          NAVIGATION
      ===================================================== */}
      <nav className="flex-1 flex justify-center">

        <ul
          className="
            flex
            items-center
            gap-10
            font-[family-name:var(--font-plus-jakarta)]
            text-[#E9E3D5]
          "
        >

          {/* HOME */}
          <li>
            <Link
              href="/"
              className={navClass("/")}
            >
              {t.header.home}
            </Link>
          </li>


          {/* ABOUT */}
          <li>
            <Link
              href="/about"
              className={navClass("/about")}
            >
              {t.header.about}
            </Link>
          </li>


          {/* PRODUCTS */}
          <li>
            <Link
              href="/products"
              className={navClass("/products")}
            >
              {t.header.products}
            </Link>
          </li>

          {/* CONTACT */}
          <li>
            <Link
              href="/contact"
              className={navClass("/contact")}
            >
              {t.header.contact}
            </Link>
          </li>

        </ul>

      </nav>


      {/* =====================================================
          RIGHT SIDE
      ===================================================== */}
      <div
        className="
          flex-1
          flex
          justify-end
          items-center
          gap-3
        "
      >

        {/* =================================================
            SEARCH
        ================================================= */}
        <form
          onSubmit={handleSearch}
          className="
            relative
            flex
            items-center
          "
        >

          <Search
            size={18}
            className="
              absolute
              left-4
              text-[#A31E21]
              pointer-events-none
            "
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.header.search}
            aria-label="Search products"
            className="
              w-50
              h-12
              rounded-xl
              bg-[#E9E3D5]
              border
              border-[#E9E3D5]
              pl-11
              pr-4
              font-[family-name:var(--font-plus-jakarta)]
              text-sm
              text-[#1D1D1D]
              placeholder:text-[#A31E21]/75
              outline-none
              focus:border-[#A31E21]
              transition-colors
            "
          />

          {search && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                router.push("/products");
              }}
              aria-label="Clear search"
              className="
                absolute
                right-3
                flex
                items-center
                justify-center
                w-6
                h-6
                rounded-full
                text-[#A8A39A]
                hover:text-[#E9E3D5]
                hover:bg-[#A31E21]
                transition-colors
              "
            >
              <X size={16} />
            </button>
          )}

        </form>


        {/* =================================================
            LANGUAGE
        ================================================= */}
        <button
          onClick={toggleLanguage}
          className="
            bg-[#A31E21]
            rounded-xl
            px-5
            h-12
            flex
            items-center
            gap-2
            hover:bg-[#8F1A1C]
            transition-colors
          "
        >

          <Globe
            size={18}
            className="text-[#E9E3D5]"
          />

          <span
            className="
              font-[family-name:var(--font-plus-jakarta)]
              text-[#E9E3D5]
              text-sm
              font-medium
            "
          >
            {language.toUpperCase()}
          </span>

        </button>

      </div>

    </header>
  );
}