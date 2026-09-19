import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const categoryData = {
  "beef-cuts": {
    title: "Beef Cuts",
    description:
      "Explore our selection of premium beef cuts, carefully selected to deliver exceptional quality, flavor, and consistency.",
    products: [
      {
        name: "Ribeye",
        image: "/images/products/ribeye.jpg",
        price: "Rp 550.000 / kg",
      },
      {
        name: "Striploin",
        image: "/images/products/striploin.jpg",
        price: "Rp 475.000 / kg",
      },
      {
        name: "Tenderloin",
        image: "/images/products/tenderloin.jpg",
        price: "Rp 620.000 / kg",
      },
      {
        name: "Tomahawk",
        image: "/images/products/tomahawk.jpg",
        price: "Rp 890.000 / kg",
      },
    ],
  },

  "premium-beef": {
    title: "Premium Beef",
    description:
      "Discover our premium beef selection, chosen for its quality, consistency, and superior eating experience.",
    products: [
      {
        name: "Beef Slice",
        image: "/images/products/beef-slice.jpg",
        price: "Rp 165.000 / kg",
      },
      {
        name: "Meltique",
        image: "/images/products/meltique.jpg",
        price: "Rp 210.000 / kg",
      },
    ],
  },

  "processed-beef": {
    title: "Processed Beef",
    description:
      "Convenient and versatile processed beef products made to support everyday cooking and food service needs.",
    products: [
      {
        name: "Sausages",
        image: "/images/products/sausages.jpg",
        price: "Contact Us",
      },
    ],
  },

  seafood: {
    title: "Seafood",
    description:
      "A selection of quality seafood products for restaurants, food service businesses, and home kitchens.",
    products: [
      {
        name: "Salmon",
        image: "/images/products/salmon.jpg",
        price: "Contact Us",
      },
    ],
  },

  lamb: {
    title: "Lamb",
    description:
      "Quality lamb products selected to meet the needs of professional kitchens and home cooks.",
    products: [],
  },

  "frozen-food": {
    title: "Frozen Food",
    description:
      "Practical frozen food selections designed for convenience without compromising quality.",
    products: [],
  },
};

type CategorySlug = keyof typeof categoryData;

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!(slug in categoryData)) {
    notFound();
  }

  const category = categoryData[slug as CategorySlug];

  return (
    <main className="bg-[#E9E3D5] min-h-screen">

      {/* =========================
          BANNER
      ========================= */}
      <section className="relative w-full h-[50vh] overflow-hidden">

        <Image
          src="/images/banner/products-banner.jpg"
          alt={category.title}
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#000000]/75" />

        {/* Banner Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-8">

          <div>

            <h1
              className="
                font-[family-name:var(--font-cinzel)]
                text-[#E2AF1D]
                text-5xl
                md:text-7xl
                font-black
                uppercase
              "
            >
              {category.title}
            </h1>

            <p
              className="
                mt-5
                max-w-2xl
                mx-auto
                font-[family-name:var(--font-plus-jakarta)]
                text-[#E9E3D5]
                text-sm
                md:text-base
                leading-7
              "
            >
              {category.description}
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          PRODUCTS
      ========================= */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="text-center mb-14">

          <h2
            className="
              font-[family-name:var(--font-cinzel)]
              text-5xl
              font-black
              uppercase
              text-[#A31E21]
            "
          >
            {category.title} Selection
          </h2>

          <p
            className="
              mt-4
              font-[family-name:var(--font-plus-jakarta)]
              text-[#1D1D1D]
            "
          >
            Explore our available selection.
          </p>

        </div>


        {/* Product Grid */}
        {category.products.length > 0 ? (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {category.products.map((product) => (

              <div
                key={product.name}
                className="
                  bg-[#E9E3D5]
                  border
                  border-[#1D1D1D]
                  rounded-xl
                  overflow-hidden
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >

                {/* Image */}
                <div className="relative w-full h-64">

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                  />

                </div>


                {/* Product Info */}
                <div className="px-6 pb-6 text-center">

                  <h3
                    className="
                      font-[family-name:var(--font-cinzel)]
                      text-2xl
                      font-bold
                      uppercase
                      text-[#1D1D1D]
                    "
                  >
                    {product.name}
                  </h3>

                  <p
                    className="
                      mt-3
                      font-[family-name:var(--font-plus-jakarta)]
                      text-[#A31E21]
                      font-medium
                    "
                  >
                    {product.price}
                  </p>

                  <Link
                    href="/contact"
                    className="
                      inline-block
                      mt-5
                      bg-[#A31E21]
                      text-[#F8F7F5]
                      px-6
                      py-3
                      rounded-xl
                      font-[family-name:var(--font-plus-jakarta)]
                      text-sm
                      font-medium
                      hover:bg-[#8F1A1C]
                      transition-colors
                    "
                  >
                    Contact Us
                  </Link>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="text-center py-20">

            <p
              className="
                font-[family-name:var(--font-plus-jakarta)]
                text-[#1D1D1D]
                text-lg
              "
            >
              Products in this category will be available soon.
            </p>

            <Link
              href="/contact"
              className="
                inline-block
                mt-6
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
              Contact Us
            </Link>

          </div>

        )}

      </section>

    </main>
  );
}