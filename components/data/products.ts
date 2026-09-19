export type Product = {
  slug: string;
  name: string;
  image: string;
  images: string[];
  price: string;
  category: string;
  description: {
    en: string;
    id: string;
  };
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
    description: {
      en: "A premium Black Angus tenderloin known for its exceptionally tender texture, lean character, and delicate beef flavor. Ideal for premium steaks and refined dishes.",
      id: "Tenderloin Black Angus premium yang dikenal dengan teksturnya yang sangat lembut, karakter yang lean, dan cita rasa daging sapi yang lembut. Ideal untuk steak premium dan hidangan berkualitas.",
    },
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
    description: {
      en: "A richly marbled Black Angus ribeye with excellent tenderness and deep beef flavor. Perfect for grilling, pan-searing, and steakhouse-style dishes.",
      id: "Ribeye Black Angus dengan marbling yang kaya, tekstur yang sangat lembut, dan cita rasa daging sapi yang kuat. Cocok untuk grilling, pan-searing, dan hidangan ala steakhouse.",
    },
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
    description: {
      en: "A well-balanced Black Angus striploin offering satisfying texture, rich beef flavor, and balanced marbling. A versatile choice for grilling and pan-searing.",
      id: "Striploin Black Angus dengan tekstur yang seimbang, cita rasa daging sapi yang kaya, dan marbling yang proporsional. Pilihan serbaguna untuk grilling dan pan-searing.",
    },
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
    description: {
      en: "A premium bone-in steak combining tenderloin and striploin. The signature T-shaped bone adds character to this flavorful and impressive steak cut.",
      id: "Steak premium dengan tulang yang menggabungkan tenderloin dan striploin. Tulang berbentuk T menjadi ciri khas yang memberikan karakter pada potongan steak yang kaya rasa dan mengesankan ini.",
    },
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
    description: {
      en: "A striking bone-in rib steak with rich marbling and bold beef flavor. Tomahawk is an excellent choice for grilling and special steakhouse-style meals.",
      id: "Potongan rib steak dengan tulang yang khas, marbling yang kaya, dan cita rasa daging sapi yang kuat. Tomahawk merupakan pilihan yang sangat baik untuk grilling dan hidangan spesial ala steakhouse.",
    },
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
    description: {
      en: "A premium Black Angus rib cut offering rich flavor, satisfying texture, and excellent marbling. Suitable for grilling, roasting, and slow cooking.",
      id: "Potongan rib premium Black Angus dengan cita rasa yang kaya, tekstur yang memuaskan, dan marbling yang sangat baik. Cocok untuk grilling, roasting, dan slow cooking.",
    },
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
    description: {
      en: "A versatile Black Angus rump cut with a satisfying beef texture and rich flavor. Suitable for roasting, grilling, and various everyday beef dishes.",
      id: "Potongan rump Black Angus yang serbaguna dengan tekstur daging sapi yang memuaskan dan cita rasa yang kaya. Cocok untuk roasting, grilling, dan berbagai hidangan daging sapi sehari-hari.",
    },
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
    description: {
      en: "A flavorful Black Angus brisket cut with a rich beef character. Particularly suitable for slow cooking, smoking, braising, and barbecue-style dishes.",
      id: "Potongan brisket Black Angus yang kaya rasa dengan karakter daging sapi yang kuat. Sangat cocok untuk slow cooking, smoking, braising, dan hidangan bergaya barbecue.",
    },
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
    description: {
      en: "A flavorful flank steak with a firm yet satisfying texture. Best prepared quickly over high heat and sliced against the grain for maximum tenderness.",
      id: "Flank steak dengan cita rasa yang kaya dan tekstur yang padat namun tetap memuaskan. Sebaiknya dimasak cepat dengan suhu tinggi dan diiris melawan arah serat untuk mendapatkan tekstur yang lebih lembut.",
    },
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
    description: {
      en: "A popular beef cut known for its distinctive fat cap and rich beef flavor. Excellent for grilling, roasting, and traditional barbecue preparations.",
      id: "Potongan daging sapi populer yang dikenal dengan lapisan lemak khas dan cita rasa daging sapi yang kaya. Sangat cocok untuk grilling, roasting, dan olahan barbecue tradisional.",
    },
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
    description: {
      en: "A tender and lean beef cut with a delicate texture and mild flavor. Ideal for steaks, medallions, and premium everyday meals.",
      id: "Potongan daging sapi yang lembut dan lean dengan tekstur halus serta cita rasa ringan. Ideal untuk steak, medallion, dan hidangan premium sehari-hari.",
    },
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
    description: {
      en: "A flavorful ribeye with satisfying marbling and a juicy texture. Well suited for grilling and pan-searing.",
      id: "Ribeye dengan marbling yang memuaskan dan tekstur daging yang juicy. Cocok untuk grilling dan pan-searing.",
    },
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
    description: {
      en: "A versatile striploin with balanced texture and beef flavor. Suitable for steaks, grilling, pan-searing, and everyday cooking.",
      id: "Striploin serbaguna dengan tekstur dan cita rasa daging sapi yang seimbang. Cocok untuk steak, grilling, pan-searing, dan masakan sehari-hari.",
    },
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
    description: {
      en: "A tender and lean beef cut offering a delicate texture and refined beef flavor. Suitable for premium steaks and medallions.",
      id: "Potongan daging sapi yang lembut dan lean dengan tekstur halus serta cita rasa daging sapi yang refined. Cocok untuk steak premium dan medallion.",
    },
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
    description: {
      en: "A tender beef cut with a lean character and mild flavor. A practical choice for steaks, medallions, and premium dishes.",
      id: "Potongan daging sapi yang lembut dengan karakter lean dan cita rasa ringan. Pilihan praktis untuk steak, medallion, dan hidangan premium.",
    },
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
    description: {
      en: "A flavorful ribeye offering satisfying marbling and a juicy beef texture. Great for grilling and pan-searing.",
      id: "Ribeye bercita rasa kaya dengan marbling yang memuaskan dan tekstur daging sapi yang juicy. Cocok untuk grilling dan pan-searing.",
    },
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
    description: {
      en: "A balanced striploin with a pleasant beef texture and rich flavor. Versatile for steaks and everyday beef dishes.",
      id: "Striploin dengan tekstur daging sapi yang seimbang dan cita rasa yang kaya. Serbaguna untuk steak dan berbagai hidangan daging sapi sehari-hari.",
    },
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
    description: {
      en: "A tender Meltique beef cut designed to deliver a juicy texture and rich flavor. Excellent for steaks and quick high-heat cooking.",
      id: "Potongan daging sapi Meltique yang lembut dengan tekstur juicy dan cita rasa yang kaya. Sangat cocok untuk steak dan memasak cepat dengan suhu tinggi.",
    },
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
    description: {
      en: "A juicy Meltique ribeye with rich flavor and satisfying marbling. Ideal for grilling and pan-searing.",
      id: "Ribeye Meltique yang juicy dengan cita rasa kaya dan marbling yang memuaskan. Ideal untuk grilling dan pan-searing.",
    },
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
    description: {
      en: "A versatile Meltique striploin offering a tender texture and rich beef flavor. Great for steaks and everyday grilling.",
      id: "Striploin Meltique yang serbaguna dengan tekstur lembut dan cita rasa daging sapi yang kaya. Cocok untuk steak dan grilling sehari-hari.",
    },
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
    description: {
      en: "A flavorful beef cut with a rich beef character. Chuck is particularly suitable for slow cooking, braising, stews, and ground beef preparations.",
      id: "Potongan daging sapi dengan cita rasa yang kaya dan karakter daging yang kuat. Chuck sangat cocok untuk slow cooking, braising, stew, dan olahan daging giling.",
    },
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
    description: {
      en: "A flavorful beef cut with a satisfying texture. Best suited for braising, slow cooking, stews, and other hearty dishes.",
      id: "Potongan daging sapi dengan cita rasa yang kaya dan tekstur yang memuaskan. Paling cocok untuk braising, slow cooking, stew, dan berbagai hidangan yang kaya rasa.",
    },
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
    description: {
      en: "A flavorful brisket cut ideal for slow cooking, smoking, braising, and barbecue-style preparations.",
      id: "Potongan brisket dengan cita rasa yang kaya, ideal untuk slow cooking, smoking, braising, dan olahan bergaya barbecue.",
    },
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
    description: {
      en: "A versatile brisket cut with rich beef flavor. Excellent for slow cooking, braising, smoking, and hearty beef dishes.",
      id: "Potongan brisket serbaguna dengan cita rasa daging sapi yang kaya. Sangat cocok untuk slow cooking, braising, smoking, dan berbagai hidangan daging sapi yang kaya rasa.",
    },
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
    description: {
      en: "A lean and versatile beef cut suitable for roasting, slicing, stewing, and a variety of everyday preparations.",
      id: "Potongan daging sapi yang lean dan serbaguna, cocok untuk roasting, slicing, stewing, dan berbagai olahan sehari-hari.",
    },
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
    description: {
      en: "A lean beef cut with a firm texture and clean beef flavor. Suitable for roasting, slicing, and various cooked beef dishes.",
      id: "Potongan daging sapi lean dengan tekstur yang padat dan cita rasa daging sapi yang clean. Cocok untuk roasting, slicing, dan berbagai hidangan daging sapi yang dimasak.",
    },
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
    description: {
      en: "A flavorful cut with connective tissue that becomes tender through slow cooking. Excellent for soups, stews, and braised dishes.",
      id: "Potongan daging sapi bercita rasa kaya dengan jaringan ikat yang menjadi lembut melalui slow cooking. Sangat cocok untuk sup, stew, dan hidangan braised.",
    },
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
    description: {
      en: "A lean beef cut with a firm texture and clean flavor. Suitable for roasting, slicing, and slow-cooked preparations.",
      id: "Potongan daging sapi lean dengan tekstur yang padat dan cita rasa yang clean. Cocok untuk roasting, slicing, dan olahan slow-cooked.",
    },
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
    description: {
      en: "A flavorful beef cut known for its rich marbling and tender, juicy texture. U.S. Shortplate is ideal for grilling, yakiniku, Korean BBQ, and other high-heat cooking methods.",
      id: "Potongan daging sapi dengan cita rasa kaya yang dikenal dengan marbling melimpah serta tekstur lembut dan juicy. U.S. Shortplate ideal untuk grilling, yakiniku, Korean BBQ, dan metode memasak dengan suhu tinggi lainnya.",
    },
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
    description: {
      en: "Thinly sliced beef prepared for yakiniku-style cooking, offering a tender texture and rich, savory flavor. Perfect for quick grilling and enjoying with Japanese-style dipping sauces.",
      id: "Daging sapi yang diiris tipis dan disiapkan untuk masakan bergaya yakiniku, dengan tekstur lembut dan cita rasa gurih yang kaya. Sempurna untuk grilling cepat dan dinikmati dengan saus cocol bergaya Jepang.",
    },
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
    description: {
      en: "A rich and gelatinous beef cut known for its deep flavor. Best enjoyed in soups, broths, stews, and slow-cooked dishes.",
      id: "Potongan buntut sapi yang kaya dan mengandung banyak gelatin, dikenal dengan cita rasanya yang kuat. Paling nikmat untuk sup, kaldu, stew, dan hidangan yang dimasak perlahan.",
    },
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
    description: {
      en: "A flavorful oxtail cut ideal for slow cooking. Excellent for soups, broths, stews, and traditional comfort dishes.",
      id: "Potongan buntut sapi bercita rasa kaya yang ideal untuk slow cooking. Sangat cocok untuk sup, kaldu, stew, dan hidangan comfort food tradisional.",
    },
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
    description: {
      en: "A flavorful beef rib cut suitable for grilling, roasting, barbecue, and slow cooking.",
      id: "Potongan iga sapi bercita rasa kaya yang cocok untuk grilling, roasting, barbecue, dan slow cooking.",
    },
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
    description: {
      en: "A rich and flavorful beef rib cut. Excellent for braising, slow cooking, grilling, and barbecue-style preparations.",
      id: "Potongan iga sapi dengan cita rasa yang kaya dan kuat. Sangat cocok untuk braising, slow cooking, grilling, dan olahan bergaya barbecue.",
    },
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
    description: {
      en: "Thinly sliced beef prepared for shabu-shabu and hot pot dishes. Quick to cook and perfect for dipping into flavorful broths.",
      id: "Daging sapi yang diiris tipis dan disiapkan untuk shabu-shabu serta hidangan hot pot. Cepat matang dan cocok untuk dicelupkan ke dalam kuah yang kaya rasa.",
    },
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
    description: {
      en: "Convenient minced beef suitable for burgers, meatballs, sauces, fillings, and a wide variety of everyday recipes.",
      id: "Daging sapi giling praktis yang cocok untuk burger, bakso, saus, isian, dan berbagai resep sehari-hari.",
    },
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
    description: {
      en: "Finely minced tenderloin offering a lean texture with the delicate flavor of premium beef. Ideal for burgers, meatballs, meat sauces, and a variety of everyday dishes.",
      id: "Tenderloin yang digiling halus dengan tekstur lean dan cita rasa daging premium yang lembut. Ideal untuk burger, bakso, saus daging, dan berbagai hidangan sehari-hari.",
    },
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
    description: {
      en: "Conveniently cut beef cubes with a satisfying texture and rich beef flavor. Perfect for stews, soups, stir-fries, skewers, and other hearty dishes.",
      id: "Potongan daging sapi berbentuk cube yang praktis dengan tekstur memuaskan dan cita rasa daging sapi yang kaya. Cocok untuk stew, sup, tumisan, sate, dan berbagai hidangan yang kaya rasa.",
    },
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
    description: {
      en: "Beef lung suitable for traditional preparations and various Indonesian-style dishes.",
      id: "Paru sapi yang cocok untuk berbagai olahan tradisional dan hidangan bergaya Indonesia.",
    },
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
    description: {
      en: "Beef prepared in a practical cut suitable for rendang and other slow-cooked dishes.",
      id: "Daging sapi yang dipotong praktis dan cocok untuk rendang serta berbagai hidangan yang dimasak perlahan.",
    },
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
    description: {
      en: "Beef prepared for semur and other slow-cooked dishes, offering a convenient option for traditional home cooking.",
      id: "Daging sapi yang disiapkan untuk semur dan berbagai hidangan slow-cooked lainnya, menjadi pilihan praktis untuk masakan rumahan tradisional.",
    },
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
    description: {
      en: "Beef tendon and skin cut commonly used in traditional Indonesian soups, stews, and savory dishes.",
      id: "Potongan tendon dan kulit sapi yang umum digunakan dalam sup tradisional Indonesia, stew, dan berbagai hidangan gurih.",
    },
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
    description: {
      en: "Convenient smoked beef slices suitable for sandwiches, breakfast dishes, catering, and quick meals.",
      id: "Irisan smoked beef praktis yang cocok untuk sandwich, hidangan sarapan, catering, dan makanan cepat saji.",
    },
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
    description: {
      en: "Long beef sausage franks suitable for hot dogs, grilling, pan-frying, and casual meals.",
      id: "Beef sausage franks berukuran panjang yang cocok untuk hot dog, grilling, pan-frying, dan hidangan santai.",
    },
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
    description: {
      en: "Convenient beef sausage franks suitable for grilling, pan-frying, hot dogs, and everyday meals.",
      id: "Beef sausage franks praktis yang cocok untuk grilling, pan-frying, hot dog, dan hidangan sehari-hari.",
    },
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
    description: {
      en: "Compact beef sausage franks that are easy to prepare and suitable for breakfast, snacks, hot dogs, and casual meals.",
      id: "Beef sausage franks berukuran compact yang mudah disiapkan dan cocok untuk sarapan, camilan, hot dog, dan hidangan santai.",
    },
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
    description: {
      en: "Pre-sliced beef pastrami offering a convenient smoky and savory option for sandwiches, burgers, salads, and quick meals.",
      id: "Beef pastrami yang sudah diiris, menawarkan pilihan praktis dengan cita rasa smoky dan gurih untuk sandwich, burger, salad, dan makanan cepat saji.",
    },
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
    description: {
      en: "Premium salmon fillet with a rich, buttery texture. Ideal for pan-searing, grilling, baking, and various seafood dishes.",
      id: "Fillet salmon premium dengan tekstur kaya dan buttery. Ideal untuk pan-searing, grilling, baking, dan berbagai hidangan seafood.",
    },
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
    description: {
      en: "Whole salmon suitable for roasting, grilling, baking, and preparing large-format seafood dishes.",
      id: "Salmon utuh yang cocok untuk roasting, grilling, baking, dan menyiapkan hidangan seafood dalam porsi besar.",
    },
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
    description: {
      en: "Whole lamb carcass suitable for various cuts and culinary preparations, offering versatility for restaurants and professional kitchens.",
      id: "Karkas domba utuh yang cocok untuk berbagai potongan dan olahan kuliner, menawarkan fleksibilitas untuk restoran dan dapur profesional.",
    },
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
    description: {
      en: "Classic frozen French fries that are easy to prepare and ideal as a side dish, snack, or accompaniment to burgers and steaks.",
      id: "French fries frozen klasik yang mudah disiapkan dan ideal sebagai side dish, camilan, atau pendamping burger dan steak.",
    },
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
    description: {
      en: "Frozen whole duck suitable for roasting, frying, braising, and various Asian-style culinary preparations.",
      id: "Bebek utuh frozen yang cocok untuk roasting, frying, braising, dan berbagai olahan kuliner bergaya Asia.",
    },
  },
];