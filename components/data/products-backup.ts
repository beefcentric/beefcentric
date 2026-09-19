export type Product = {
  slug: string;
  name: string;
  image: string;
  images: string[];
  price: string;
  category: string;
  description: string;
};

// =====================================================
// PLACEHOLDER
// =====================================================
// watermark.png sudah ada di folder products kamu.
// Dipakai sementara untuk produk yang belum punya foto.
// Nanti tinggal diganti ketika foto produknya sudah ada.

const PLACEHOLDER = "/images/products/watermark.png";

export const products: Product[] = [
  // =====================================================
  // PREMIUM BEEF
  // =====================================================

  {
    slug: "tenderloin-black-angus",
    name: "Tenderloin Black Angus",
    image: "/images/products/tenderloin.png",
    images: [
      "/images/products/tenderloin.png",
    ],
    price: "Rp 685.000 / kg",
    category: "Premium Beef",
    description:
      "A premium Black Angus tenderloin known for its exceptionally tender texture, lean character, and delicate beef flavor. Ideal for premium steaks and refined dishes.",
  },

  {
    slug: "ribeye-black-angus",
    name: "Ribeye Black Angus",
    image: "/images/products/ribeye-black-angus.png",
    images: [
      "/images/products/ribeye-black-angus.png",
    ],
    price: "Rp 635.000 / kg",
    category: "Premium Beef",
    description:
      "A richly marbled Black Angus ribeye with excellent tenderness and deep beef flavor. Perfect for grilling, pan-searing, and steakhouse-style dishes.",
  },

  {
    slug: "striploin-black-angus",
    name: "Striploin Black Angus",
    image: "/images/products/striploin-black-angus-2.png",
    images: [
      "/images/products/striploin-black-angus-2.png",
      "/images/products/striploin-black-angus-1.png",
    ],
    price: "Rp 550.000 / kg",
    category: "Premium Beef",
    description:
      "A well-balanced Black Angus striploin offering satisfying texture, rich beef flavor, and balanced marbling. A versatile choice for grilling and pan-searing.",
  },

  {
    slug: "t-bone-black-angus",
    name: "T-Bone Black Angus",
    image: "/images/products/t-bone-black-angus-2.png",
    images: [
      "/images/products/t-bone-black-angus-2.png",
      "/images/products/t-bone-black-angus-1.png",
    ],
    price: "Rp 535.000 / kg",
    category: "Premium Beef",
    description:
      "A premium bone-in steak combining tenderloin and striploin. The signature T-shaped bone adds character to this flavorful and impressive steak cut.",
  },

  {
    slug: "tomahawk-black-angus",
    name: "Tomahawk Black Angus",
    image: "/images/products/tomahawk-black-angus-1.png",
    images: [
      "/images/products/tomahawk-black-angus-1.png",
      "/images/products/tomahawk-black-angus-2.png",
    ],
    price: "Rp 550.000 / kg",
    category: "Premium Beef",
    description:
      "A striking bone-in rib steak with rich marbling and bold beef flavor. Tomahawk is an excellent choice for grilling and special steakhouse-style meals.",
  },

  {
    slug: "op-rib-black-angus",
    name: "OP Rib Black Angus",
    image: "/images/products/op-rib-black-angus.png",
    images: [
      "/images/products/op-rib-black-angus.png",
    ],
    price: "Rp 525.000 / kg",
    category: "Premium Beef",
    description:
      "A premium Black Angus rib cut offering rich flavor, satisfying texture, and excellent marbling. Suitable for grilling, roasting, and slow cooking.",
  },

  {
    slug: "d-rump-black-angus",
    name: "D-Rump Black Angus",
    image: PLACEHOLDER,
    images: [
      PLACEHOLDER,
    ],
    price: "Rp 270.000 / kg",
    category: "Premium Beef",
    description:
      "A versatile Black Angus rump cut with a satisfying beef texture and rich flavor. Suitable for roasting, grilling, and various everyday beef dishes.",
  },

  {
    slug: "brisket-pe-black-angus",
    name: "Brisket PE Black Angus",
    image: "/images/products/brisket-pe-black-angus-1.png",
    images: [
      "/images/products/brisket-pe-black-angus-1.png",
      "/images/products/brisket-pe-black-angus-2.png",
    ],
    price: "Rp 235.000 / kg",
    category: "Premium Beef",
    description:
      "A flavorful Black Angus brisket cut with a rich beef character. Particularly suitable for slow cooking, smoking, braising, and barbecue-style dishes.",
  },

  {
    slug: "flank-steak-gf-100-days",
    name: "Flank Steak GF 100 Days",
    image: "/images/products/flank-steak-gf-1.png",
    images: [
      "/images/products/flank-steak-gf-1.png",
      "/images/products/flank-steak-gf-2.png",
    ],
    price: "Rp 395.000 / kg",
    category: "Premium Beef",
    description:
      "A flavorful flank steak with a firm yet satisfying texture. Best prepared quickly over high heat and sliced against the grain for maximum tenderness.",
  },

  {
    slug: "picanha",
    name: "Picanha",
    image: "/images/products/picanha.png",
    images: [
      "/images/products/picanha.png",
    ],
    price: "Rp 435.000 / kg",
    category: "Premium Beef",
    description:
      "A popular beef cut known for its distinctive fat cap and rich beef flavor. Excellent for grilling, roasting, and traditional barbecue preparations.",
  },

  {
    slug: "tenderloin-pr",
    name: "Tenderloin PR",
    image: "/images/products/tenderloin.png",
    images: [
      "/images/products/tenderloin.png",
    ],
    price: "Rp 420.000 / kg",
    category: "Premium Beef",
    description:
      "A tender and lean beef cut with a delicate texture and mild flavor. Ideal for steaks, medallions, and premium everyday meals.",
  },

  {
    slug: "ribeye-pr",
    name: "Ribeye PR",
    image: PLACEHOLDER,
    images: [
      PLACEHOLDER,
    ],
    price: "Rp 400.000 / kg",
    category: "Premium Beef",
    description:
      "A flavorful ribeye with satisfying marbling and a juicy texture. Well suited for grilling and pan-searing.",
  },

  {
    slug: "striploin-pr",
    name: "Striploin PR",
    image: "/images/products/striploin-pr-1.png",
    images: [
      "/images/products/striploin-pr-1.png",
      "/images/products/striploin-pr-2.png",
    ],
    price: "Rp 330.000 / kg",
    category: "Premium Beef",
    description:
      "A versatile striploin with balanced texture and beef flavor. Suitable for steaks, grilling, pan-searing, and everyday cooking.",
  },

  {
    slug: "tenderloin-s",
    name: "Tenderloin S",
    image: "/images/products/tenderloin.png",
    images: [
      "/images/products/tenderloin.png",
    ],
    price: "Rp 400.000 / kg",
    category: "Premium Beef",
    description:
      "A tender and lean beef cut offering a delicate texture and refined beef flavor. Suitable for premium steaks and medallions.",
  },

  {
    slug: "tenderloin-a",
    name: "Tenderloin A",
    image: "/images/products/tenderloin.png",
    images: [
      "/images/products/tenderloin.png",
    ],
    price: "Rp 380.000 / kg",
    category: "Premium Beef",
    description:
      "A tender beef cut with a lean character and mild flavor. A practical choice for steaks, medallions, and premium dishes.",
  },

  {
    slug: "ribeye-a",
    name: "Ribeye A",
    image: PLACEHOLDER,
    images: [
      PLACEHOLDER,
    ],
    price: "Rp 240.000 / kg",
    category: "Premium Beef",
    description:
      "A flavorful ribeye offering satisfying marbling and a juicy beef texture. Great for grilling and pan-searing.",
  },

  {
    slug: "striploin-a",
    name: "Striploin A",
    image: PLACEHOLDER,
    images: [
      PLACEHOLDER,
    ],
    price: "Rp 220.000 / kg",
    category: "Premium Beef",
    description:
      "A balanced striploin with a pleasant beef texture and rich flavor. Versatile for steaks and everyday beef dishes.",
  },

  {
    slug: "tenderloin-meltique",
    name: "Tenderloin Meltique",
    image: "/images/products/tenderloin-meltique-1.png",
    images: [
      "/images/products/tenderloin-meltique-1.png",
      "/images/products/tenderloin-meltique-2.png",
    ],
    price: "Rp 220.000 / kg",
    category: "Premium Beef",
    description:
      "A tender Meltique beef cut designed to deliver a juicy texture and rich flavor. Excellent for steaks and quick high-heat cooking.",
  },

  {
    slug: "ribeye-meltique",
    name: "Ribeye Meltique",
    image: PLACEHOLDER,
    images: [
      PLACEHOLDER,
    ],
    price: "Rp 205.000 / kg",
    category: "Premium Beef",
    description:
      "A juicy Meltique ribeye with rich flavor and satisfying marbling. Ideal for grilling and pan-searing.",
  },

  {
    slug: "striploin-meltique",
    name: "Striploin Meltique",
    image: PLACEHOLDER,
    images: [
      PLACEHOLDER,
    ],
    price: "Rp 200.000 / kg",
    category: "Premium Beef",
    description:
      "A versatile Meltique striploin offering a tender texture and rich beef flavor. Great for steaks and everyday grilling.",
  },


  // =====================================================
  // BEEF CUTS
  // =====================================================

  {
    slug: "chuck",
    name: "Chuck",
    image: PLACEHOLDER,
    images: [
      PLACEHOLDER,
    ],
    price: "Rp 140.000 / kg",
    category: "Beef Cuts",
    description:
      "A flavorful beef cut with a rich beef character. Chuck is particularly suitable for slow cooking, braising, stews, and ground beef preparations.",
  },

  {
    slug: "blade",
    name: "Blade",
    image: PLACEHOLDER,
    images: [
      PLACEHOLDER,
    ],
    price: "Rp 138.000 / kg",
    category: "Beef Cuts",
    description:
      "A flavorful beef cut with a satisfying texture. Best suited for braising, slow cooking, stews, and other hearty dishes.",
  },

  {
    slug: "brisket-pe",
    name: "Brisket PE",
    image: "/images/products/brisket-pe-1.png",
    images: [
      "/images/products/brisket-pe-1.png",
      "/images/products/brisket-pe-2.png",
    ],
    price: "Rp 145.000 / kg",
    category: "Beef Cuts",
    description:
      "A flavorful brisket cut ideal for slow cooking, smoking, braising, and barbecue-style preparations.",
  },

  {
    slug: "brisket-ne",
    name: "Brisket NE",
    image: "/images/products/brisket-ne-1.png",
    images: [
      "/images/products/brisket-ne-1.png",
      "/images/products/brisket-ne-2.png",
    ],
    price: "Rp 144.000 / kg",
    category: "Beef Cuts",
    description:
      "A versatile brisket cut with rich beef flavor. Excellent for slow cooking, braising, smoking, and hearty beef dishes.",
  },

  {
    slug: "knuckle",
    name: "Knuckle",
    image: "/images/products/knuckle-1.png",
    images: [
      "/images/products/knuckle-1.png",
      "/images/products/knuckle-2.png",
    ],
    price: "Rp 155.000 / kg",
    category: "Beef Cuts",
    description:
      "A lean and versatile beef cut suitable for roasting, slicing, stewing, and a variety of everyday preparations.",
  },

  {
    slug: "topside",
    name: "Topside",
    image: PLACEHOLDER,
    images: [
      PLACEHOLDER,
    ],
    price: "Rp 156.000 / kg",
    category: "Beef Cuts",
    description:
      "A lean beef cut with a firm texture and clean beef flavor. Suitable for roasting, slicing, and various cooked beef dishes.",
  },

  {
    slug: "shank",
    name: "Shank",
    image: "/images/products/shank.png",
    images: [
      "/images/products/shank.png",
    ],
    price: "Rp 140.000 / kg",
    category: "Beef Cuts",
    description:
      "A flavorful cut with connective tissue that becomes tender through slow cooking. Excellent for soups, stews, and braised dishes.",
  },

  {
    slug: "eye-round",
    name: "Eye Round",
    image: PLACEHOLDER,
    images: [
      PLACEHOLDER,
    ],
    price: "Rp 170.000 / kg",
    category: "Beef Cuts",
    description:
      "A lean beef cut with a firm texture and clean flavor. Suitable for roasting, slicing, and slow-cooked preparations.",
  },

  {
    slug: "us-shortplate",
    name: "U.S. Shortplate",
    image: "/images/products/us-shortplate-1.png",
    images: [
      "/images/products/us-shortplate-1.png",
      "/images/products/us-shortplate-2.png",
    ],
    price: "Rp 155.000 / kg",
    category: "Beef Cuts",
    description:
      "A flavorful beef cut known for its rich marbling and tender, juicy texture. U.S. Shortplate is ideal for grilling, yakiniku, Korean BBQ, and other high-heat cooking methods.",
  },

  {
    slug: "yakiniku",
    name: "Yakiniku",
    image: "/images/products/beef-slice-1.png",
    images: [
      "/images/products/beef-slice-1.png",
      "/images/products/beef-slice-2.png",
    ],
    price: "Rp 250.000 / kg",
    category: "Beef Cuts",
    description:
      "Thinly sliced beef prepared for yakiniku-style cooking, offering a tender texture and rich, savory flavor. Perfect for quick grilling and enjoying with Japanese-style dipping sauces.",
  },

  {
    slug: "oxtail-center-cut",
    name: "Oxtail Center Cut",
    image: "/images/products/oxtail-center-cut-1.png",
    images: [
      "/images/products/oxtail-center-cut-1.png",
      "/images/products/oxtail-center-cut-2.png",
    ],
    price: "Rp 220.000 / kg",
    category: "Beef Cuts",
    description:
      "A rich and gelatinous beef cut known for its deep flavor. Best enjoyed in soups, broths, stews, and slow-cooked dishes.",
  },

  {
    slug: "oxtail-end-cut",
    name: "Oxtail End Cut",
    image: "/images/products/oxtail-end-cut.png",
    images: [
      "/images/products/oxtail-end-cut.png",
    ],
    price: "Rp 175.000 / kg",
    category: "Beef Cuts",
    description:
      "A flavorful oxtail cut ideal for slow cooking. Excellent for soups, broths, stews, and traditional comfort dishes.",
  },

  {
    slug: "backrib",
    name: "Backrib",
    image: "/images/products/backrib-1.png",
    images: [
      "/images/products/backrib-1.png",
      "/images/products/backrib-2.png",
    ],
    price: "Rp 110.000 / kg",
    category: "Beef Cuts",
    description:
      "A flavorful beef rib cut suitable for grilling, roasting, barbecue, and slow cooking.",
  },

  {
    slug: "shortrib",
    name: "Shortrib",
    image: "/images/products/shortrib-1.png",
    images: [
      "/images/products/shortrib-1.png",
      "/images/products/shortrib-2.png",
      "/images/products/shortrib-3.png",
    ],
    price: "Rp 135.000 / kg",
    category: "Beef Cuts",
    description:
      "A rich and flavorful beef rib cut. Excellent for braising, slow cooking, grilling, and barbecue-style preparations.",
  },


  // =====================================================
  // PROCESSED BEEF
  // =====================================================

  {
    slug: "daging-slice-shabu-shabu",
    name: "Daging Slice (Shabu-Shabu)",
    image: "/images/products/beef-slice-1.png",
    images: [
      "/images/products/beef-slice-1.png",
      "/images/products/beef-slice-2.png",
    ],
    price: "Rp 225.000 / kg",
    category: "Processed Beef",
    description:
      "Thinly sliced beef prepared for shabu-shabu and hot pot dishes. Quick to cook and perfect for dipping into flavorful broths.",
  },

  {
    slug: "minced-beef",
    name: "Minced Beef",
    image: "/images/products/minced-beef-1.png",
    images: [
      "/images/products/minced-beef-1.png",
      "/images/products/minced-beef-2.png",
    ],
    price: "Rp 160.000 / kg",
    category: "Processed Beef",
    description:
      "Convenient minced beef suitable for burgers, meatballs, sauces, fillings, and a wide variety of everyday recipes.",
  },

  {
    slug: "tenderloin-minced-beef",
    name: "Tenderloin Minced Beef",
    image: "/images/products/minced-beef-1.png",
    images: [
      "/images/products/minced-beef-1.png",
      "/images/products/minced-beef-2.png",
    ],
    price: "Rp 280.000 / kg",
    category: "Processed Beef",
    description:
      "Finely minced tenderloin offering a lean texture with the delicate flavor of premium beef. Ideal for burgers, meatballs, meat sauces, and a variety of everyday dishes.",
  },

  {
    slug: "beef-cubes",
    name: "Beef Cubes",
    image: "/images/products/daging-rendang-1.png",
    images: [
      "/images/products/daging-rendang-1.png",
      "/images/products/daging-rendang-2.png",
      "/images/products/daging-rendang-3.png",
      "/images/products/daging-semur.png",
    ],
    price: "Price not available",
    category: "Beef Cuts",
    description:
      "Conveniently cut beef cubes with a satisfying texture and rich beef flavor. Perfect for stews, soups, stir-fries, skewers, and other hearty dishes.",
  },

  {
    slug: "lung",
    name: "Lung",
    image: PLACEHOLDER,
    images: [
      PLACEHOLDER,
    ],
    price: "Rp 75.000 / kg",
    category: "Beef Cuts",
    description:
      "Beef lung suitable for traditional preparations and various Indonesian-style dishes.",
  },

  {
    slug: "daging-rendang",
    name: "Daging Rendang",
    image: "/images/products/daging-rendang-1.png",
    images: [
      "/images/products/daging-rendang-1.png",
      "/images/products/daging-rendang-2.png",
      "/images/products/daging-rendang-3.png",
    ],
    price: "Rp 190.000 / kg",
    category: "Beef Cuts",
    description:
      "Beef prepared in a practical cut suitable for rendang and other slow-cooked dishes.",
  },

  {
    slug: "daging-semur",
    name: "Daging Semur",
    image: "/images/products/daging-semur.png",
    images: [
      "/images/products/daging-semur.png",
    ],
    price: "Rp 165.000 / kg",
    category: "Beef Cuts",
    description:
      "Beef prepared for semur and other slow-cooked dishes, offering a convenient option for traditional home cooking.",
  },

  {
    slug: "kikil-sapi",
    name: "Kikil Sapi",
    image: PLACEHOLDER,
    images: [
      PLACEHOLDER,
    ],
    price: "Rp 45.000 / kg",
    category: "Beef Cuts",
    description:
      "Beef tendon and skin cut commonly used in traditional Indonesian soups, stews, and savory dishes.",
  },

  {
    slug: "smoked-beef-cater-slice",
    name: "Smoked Beef Cater Slice",
    image: "/images/products/smoked-beef-cater-slice.png",
    images: [
      "/images/products/smoked-beef-cater-slice.png",
    ],
    price: "Rp 102.000 / pack",
    category: "Processed Beef",
    description:
      "Convenient smoked beef slices suitable for sandwiches, breakfast dishes, catering, and quick meals.",
  },

  {
    slug: "beef-sausage-franks-30cm",
    name: "Beef Sausage Franks 30cm",
    image: "/images/products/beef-sausage-franks.png",
    images: [
      "/images/products/beef-sausage-franks.png",
    ],
    price: "Rp 103.000 / pack",
    category: "Processed Beef",
    description:
      "Long beef sausage franks suitable for hot dogs, grilling, pan-frying, and casual meals.",
  },

  {
    slug: "beef-sausage-franks-18cm",
    name: "Beef Sausage Franks 18cm",
    image: "/images/products/beef-sausage-franks.png",
    images: [
      "/images/products/beef-sausage-franks.png",
    ],
    price: "Rp 103.000 / pack",
    category: "Processed Beef",
    description:
      "Convenient beef sausage franks suitable for grilling, pan-frying, hot dogs, and everyday meals.",
  },

  {
    slug: "beef-sausage-franks-15cm",
    name: "Beef Sausage Franks 15cm",
    image: "/images/products/beef-sausage-franks.png",
    images: [
      "/images/products/beef-sausage-franks.png",
    ],
    price: "Rp 54.000 / pack",
    category: "Processed Beef",
    description:
      "Compact beef sausage franks that are easy to prepare and suitable for breakfast, snacks, hot dogs, and casual meals.",
  },

  {
    slug: "elprimo-beef-pastrami",
    name: "Elprimo Beef Pastrami Pre-Slice",
    image: "/images/products/elprimo-beef-pastrami-pre-slice.png",
    images: [
      "/images/products/elprimo-beef-pastrami-pre-slice.png",
    ],
    price: "Rp 87.000 / pack",
    category: "Processed Beef",
    description:
      "Pre-sliced beef pastrami offering a convenient smoky and savory option for sandwiches, burgers, salads, and quick meals.",
  },


  // =====================================================
  // SEAFOOD
  // =====================================================

  {
    slug: "salmon-steak",
    name: "Salmon Steak",
    image: "/images/products/salmon-steak-1.png",
    images: [
      "/images/products/salmon-steak-1.png",
      "/images/products/salmon-steak-2.png",
      "/images/products/salmon-steak-3.png",
    ],
    price: "Rp 285.000 / kg",
    category: "Seafood",
    description:
      "Premium salmon fillet with a rich, buttery texture. Ideal for pan-searing, grilling, baking, and various seafood dishes.",
  },

  {
    slug: "salmon-whole",
    name: "Salmon Whole",
    image: "/images/products/salmon-whole-1.png",
    images: [
      "/images/products/salmon-whole-1.png",
      "/images/products/salmon-whole-2.png",
    ],
    price: "Rp 185.000 / kg",
    category: "Seafood",
    description:
      "Whole salmon suitable for roasting, grilling, baking, and preparing large-format seafood dishes.",
  },


  // =====================================================
  // LAMB
  // =====================================================

  {
    slug: "lamb-carcass",
    name: "Lamb Carcass",
    image: PLACEHOLDER,
    images: [
      PLACEHOLDER,
    ],
    price: "Rp 145.000 / kg",
    category: "Lamb",
    description:
      "Whole lamb carcass suitable for various cuts and culinary preparations, offering versatility for restaurants and professional kitchens.",
  },


  // =====================================================
  // FROZEN FOOD
  // =====================================================

  {
    slug: "french-fries",
    name: "French Fries",
    image: "/images/products/french-fries-crinkle-cut.png",
    images: [
      "/images/products/french-fries-crinkle-cut.png",
      "/images/products/french-fries-shoestring.png",
      "/images/products/french-fries-straight-cut.png",
    ],
    price: "Rp 33.000 / kg",
    category: "Frozen Food",
    description:
      "Classic frozen French fries that are easy to prepare and ideal as a side dish, snack, or accompaniment to burgers and steaks.",
  },

  {
    slug: "bebek-golden",
    name: "Bebek Golden",
    image: "/images/products/bebek-golden-1.png",
    images: [
      "/images/products/bebek-golden-1.png",
      "/images/products/bebek-golden-2.png",
    ],
    price: "Rp 135.000 / ekor",
    category: "Poultry",
    description:
      "Frozen whole duck suitable for roasting, frying, braising, and various Asian-style culinary preparations.",
  },
];