"use client";

const categories = [
  "All",
  "Beef Cuts",
  "Premium Beef",
  "Processed Beef",
  "Seafood",
  "Lamb",
  "Frozen Food",
  "Poultry",
];

interface CategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function Categories({
  selectedCategory,
  onCategoryChange,
}: CategoriesProps) {
  return (
    <div className="w-full">

      {/* =========================
          CATEGORY FILTER
      ========================= */}
      <div
        className="
          flex
          flex-wrap
          justify-center
          items-center
          gap-3
        "
      >

        {categories.map((category) => {

          const isActive = selectedCategory === category;

          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`
                px-6
                py-3
                rounded-lg
                font-[family-name:var(--font-plus-jakarta)]
                text-sm
                font-semibold
                uppercase
                tracking-wide
                transition-all
                duration-300

                ${
                  isActive
                    ? "bg-[#A31E21] text-[#E9E3D5] shadow-md"
                    : "bg-[#E9E3D5]/70 text-[#1D1D1D] hover:bg-[#A31E21] hover:text-[#E9E3D5]"
                }
              `}
            >
              {category}
            </button>
          );

        })}

      </div>

    </div>
  );
}