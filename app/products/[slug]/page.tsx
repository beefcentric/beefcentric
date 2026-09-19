import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { products } from "@/components/data/products";
import ProductGallery from "@/components/ui/ProductGallery";
import ProductDescription from "@/components/ui/ProductDescription";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;

  // =====================================================
  // FIND PRODUCT
  // =====================================================

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  // =====================================================
  // ORDER LINKS
  // =====================================================

  const whatsapp1 =
    "https://wa.me/6281947677811";

  const whatsapp2 =
    "https://wa.me/6287714910116";

  // =====================================================
  // MARKETPLACE LINKS
  // =====================================================
  // SEMENTARA MENGARAH KE HOMEPAGE MARKETPLACE.
  // NANTI GANTI DENGAN LINK PRODUK BEEF CENTRIC MASING-MASING.

  const tokopedia =
    "https://www.tokopedia.com/";

  const shopee =
    "https://id.shp.ee/N7W72KWT";

  const blibli =
    "https://www.blibli.com/";

  return (
    <main
      className="
        min-h-screen
        bg-[url('/images/bg-ivory.jpg')]
        bg-cover
        bg-center
        bg-fixed
        px-8
        pt-32
        pb-20
      "
    >

      <div className="max-w-7xl mx-auto">

        {/* =====================================================
            BACK TO PRODUCTS
        ===================================================== */}

        <Link
          href="/products"
          className="
            inline-flex
            items-center
            mb-10
            font-[family-name:var(--font-plus-jakarta)]
            text-[#1D1D1D]
            hover:text-[#A31E21]
            transition-colors
          "
        >
          ← Back to Products
        </Link>


        {/* =====================================================
            PRODUCT DETAIL
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-14
            items-center
          "
        >

          {/* =====================================================
              PRODUCT IMAGE
          ===================================================== */}

          <ProductGallery
            images={product.images}
            name={product.name}
          />


          {/* =====================================================
              PRODUCT INFORMATION
          ===================================================== */}

          <div>

            {/* =================================================
                CATEGORY
            ================================================= */}

            <p
              className="
                font-[family-name:var(--font-plus-jakarta)]
                text-sm
                font-bold
                uppercase
                tracking-widest
                text-[#1D1D1D]
              "
            >
              {product.category}
            </p>


            {/* =================================================
                PRODUCT NAME
            ================================================= */}

            <h1
              className="
                mt-4
                font-[family-name:var(--font-cinzel)]
                text-5xl
                md:text-6xl
                font-black
                uppercase
                leading-tight
                text-[#A31E21]
              "
            >
              {product.name}
            </h1>


            {/* =================================================
                PRICE
            ================================================= */}

            <p
              className="
                mt-6
                font-[family-name:var(--font-plus-jakarta)]
                text-2xl
                font-bold
                text-[#A31E21]
              "
            >
              {product.price}
            </p>


            {/* =================================================
                DIVIDER
            ================================================= */}

            <div
              className="
                my-8
                h-px
                bg-[#1D1D1D]/20
              "
            />


            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <ProductDescription
              description={product.description}
            />


            {/* =================================================
                ORDER OPTIONS
            ================================================= */}

            <div className="mt-10">

              <p
                className="
                  mb-4
                  font-[family-name:var(--font-plus-jakarta)]
                  text-sm
                  font-semibold
                  text-[#1D1D1D]
                "
              >
                Order this product through:
              </p>


              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                "
              >

                {/* =================================================
                    WHATSAPP 1
                ================================================= */}

                <a
                  href={whatsapp1}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Order via WhatsApp"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    h-12
                    px-5
                    rounded-xl
                    bg-[#25D366]
                    text-white
                    font-[family-name:var(--font-plus-jakarta)]
                    text-sm
                    font-semibold
                    hover:bg-[#20BD5A]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >

                  <Image
                    src="/images/marketplace/whatsapp.png"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="object-contain"
                  />

                  <span>
                    WhatsApp
                  </span>

                </a>


                {/* =================================================
                    WHATSAPP 2
                ================================================= */}

                <a
                  href={whatsapp2}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Order via WhatsApp"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    h-12
                    px-5
                    rounded-xl
                    bg-[#25D366]
                    text-white
                    font-[family-name:var(--font-plus-jakarta)]
                    text-sm
                    font-semibold
                    hover:bg-[#20BD5A]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >

                  <Image
                    src="/images/marketplace/whatsapp.png"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="object-contain"
                  />

                  <span>
                    WhatsApp
                  </span>

                </a>


                {/* =================================================
                    TOKOPEDIA
                ================================================= */}

                <a
                  href={tokopedia}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Order via Tokopedia"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    h-12
                    px-5
                    rounded-xl
                    bg-[#00AA5B]
                    text-white
                    font-[family-name:var(--font-plus-jakarta)]
                    text-sm
                    font-semibold
                    hover:bg-[#008F4D]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >

                  <Image
                    src="/images/marketplace/tokopedia.png"
                    alt="Tokopedia"
                    width={20}
                    height={20}
                    className="object-contain"
                  />

                  <span>
                    Tokopedia
                  </span>

                </a>


                {/* =================================================
                    SHOPEE
                ================================================= */}

                <a
                  href={shopee}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Order via Shopee"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    h-12
                    px-5
                    rounded-xl
                    bg-[#EE4D2D]
                    text-white
                    font-[family-name:var(--font-plus-jakarta)]
                    text-sm
                    font-semibold
                    hover:bg-[#D94327]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >

                  <Image
                    src="/images/marketplace/shopee.png"
                    alt="Shopee"
                    width={20}
                    height={20}
                    className="object-contain"
                  />

                  <span>
                    Shopee
                  </span>

                </a>


                {/* =================================================
                    BLIBLI
                ================================================= */}

                <a
                  href={blibli}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Order via Blibli"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    h-12
                    px-5
                    rounded-xl
                    bg-[#0095DA]
                    text-white
                    font-[family-name:var(--font-plus-jakarta)]
                    text-sm
                    font-semibold
                    hover:bg-[#007FBA]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >

                  <Image
                    src="/images/marketplace/blibli.png"
                    alt="Blibli"
                    width={20}
                    height={20}
                    className="object-contain"
                  />

                  <span>
                    Blibli
                  </span>

                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}