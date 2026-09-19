"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type Language = "en" | "id";

type Translations = {
  header: {
    home: string;
    about: string;
    products: string;
    contact: string;
    search: string;
  };

  hero: {
    orderNow: string;
    viewMore: string;
  };

  aboutPreview: {
  title: string;
  descriptionBefore: string;
  companyName: string;
  descriptionAfter: string;
  learnMore: string;
  };

  contactCTA: {
    title: string;
    description: string;
    contactUs: string;
  };

  about: {
    title: string;
    paragraph1Before: string;
    companyName: string;
    paragraph1After: string;
    paragraph2: string;
    paragraph3: string;
  };

  whyChooseUs: {
    premiumQuality: {
      title: string;
      description: string;
    };
    consistentSupply: {
      title: string;
      description: string;
    };
    coldChainIntegrity: {
      title: string;
      description: string;
    };
    competitiveValue: {
      title: string;
      description: string;
    };
    customerFocusedService: {
      title: string;
      description: string;
    };
    trustedPartnership: {
      title: string;
      description: string;
    };
    mission: string;
  };

  products: {
    title: string;
    topProducts: string;
    subtitle: string;
    productNotFound: string;
    backToProducts: string;
    orderNow: string;
    orderThrough: string;
    showingResultsFor: string;
    noProductMatch: string;
  };

  contact: {
    title: string;
    address: string;
    whatsapp: string;
    emailTitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
};

const translations: Record<Language, Translations> = {
  // =====================================================
  // ENGLISH
  // =====================================================
  en: {
    header: {
      home: "Home",
      about: "About",
      products: "Products",
      contact: "Contact",
      search: "Search...",
    },

    hero: {
      orderNow: "Order Now",
      viewMore: "View More",
    },

    aboutPreview: {
      title: "More Than a Beef Supplier, A Partner You Can Rely On.",
      descriptionBefore:
        "Established in 2022, Beef Centric, a brand of ",
      companyName: "PT Tenteram Sejahtera Abadi",
      descriptionAfter:
        ", is a premium beef distributor serving businesses across Jabodetabek and its surrounding areas. We supply hotels, restaurants, catering companies, and other food service businesses with quality products and reliable service, helping our partners deliver exceptional dining experiences with confidence.",
      learnMore: "Learn More",
    },

    contactCTA: {
      title: "We Are Ready To Deliver What You Need",
      description:
        "Reliable solutions for your wholesale and retail meat needs, backed by quality products and dependable service.",
      contactUs: "Contact Us",
    },

    about: {
      title: "About Us",

      paragraph1Before:
        "Established in 2022, Beef Centric, a brand of ",

      companyName: "PT Tenteram Sejahtera Abadi",

      paragraph1After:
        ", is a premium beef distributor serving businesses across Jabodetabek and its surrounding areas. We supply hotels, restaurants, catering companies, and other food service businesses with quality products and reliable service, helping our partners deliver exceptional dining experiences with confidence.",

      paragraph2:
        "At Beef Centric, we believe every memorable dining experience begins with exceptional ingredients. We specialize in supplying premium imported beef with uncompromising quality, consistency, and reliability to restaurants, hotels, cafés, catering businesses, food service professionals, home cooks, and homemakers across Indonesia.",

      paragraph3:
        "More than simply providing premium products, we strive to become a trusted business partner. Through dependable supply, responsive customer service, and a commitment to long-term relationships, we help our clients operate with confidence and create outstanding culinary experiences every day.",
    },

    whyChooseUs: {
      premiumQuality: {
        title: "Premium Quality",
        description:
          "We carefully source premium imported beef from trusted producers to ensure every product consistently meets the standards of professional kitchens.",
      },

      consistentSupply: {
        title: "Consistent Supply",
        description:
          "We understand that uninterrupted operations depend on reliable inventory. Our commitment is to provide stable product availability whenever you need it.",
      },

      coldChainIntegrity: {
        title: "Cold Chain Integrity",
        description:
          "Every product is handled and distributed through a controlled cold chain system, preserving freshness, safety, and quality from storage to delivery.",
      },

      competitiveValue: {
        title: "Competitive Value",
        description:
          "We believe premium quality should also deliver business value. Our pricing is designed to remain competitive without compromising product standards.",
      },

      customerFocusedService: {
        title: "Customer-Focused Service",
        description:
          "From product consultation to after-sales support, our team is dedicated to providing responsive service and practical solutions tailored to your business needs.",
      },

      trustedPartnership: {
        title: "Trusted Partnership",
        description:
          "We don't measure success by transactions alone. We measure it by the long-term relationships we build—becoming a reliable partner who supports your business growth through consistency, commitment, and trust.",
      },

      mission:
        "Our mission is to become a trusted partner of choice for premium beef supply, delivering quality products and dependable services that create lasting value for every customer. We are committed to providing premium imported beef with consistent quality, maintaining a reliable and sustainable supply chain, and delivering responsive, professional, and personalized service. Through these commitments, we aim to build long-term partnerships founded on trust, integrity, and mutual growth.",
    },

    products: {
      title: "Products",
      topProducts: "Top Products",
      subtitle:
        "Explore Our Most Popular Premium Meat Selection",
      productNotFound: "Product Not Found",
      backToProducts: "Back to Products",
      orderNow: "Order Now",
      orderThrough: "Order this product through:",
      showingResultsFor: "Showing results for",
      noProductMatch: "We couldn't find a product matching",
    },

    contact: {
      title: "Contact Us",
      address: "Address",
      whatsapp: "WhatsApp",
      emailTitle: "Email",
      name: "Name *",
      email: "Email *",
      subject: "Subject",
      message: "Message *",
      send: "Send",
      sending: "Sending...",
      success: "Your message has been sent successfully!",
      error: "Something went wrong. Please try again.",
    },
  },

  // =====================================================
  // INDONESIAN
  // =====================================================
  id: {
    header: {
      home: "Beranda",
      about: "Tentang Kami",
      products: "Produk",
      contact: "Kontak",
      search: "Cari...",
    },

    hero: {
      orderNow: "Pesan Sekarang",
      viewMore: "Lihat Produk",
    },

    aboutPreview: {
      title:
        "Lebih dari Sekadar Pemasok Daging, Mitra yang Dapat Anda Andalkan.",
      descriptionBefore:
        "Didirikan pada tahun 2022, Beef Centric, sebuah brand dari ",
      companyName: "PT Tenteram Sejahtera Abadi",
      descriptionAfter:
        ", merupakan distributor daging premium yang melayani bisnis di wilayah Jabodetabek dan sekitarnya. Kami menyediakan produk berkualitas dan layanan yang dapat diandalkan untuk hotel, restoran, perusahaan katering, serta bisnis food service lainnya, membantu para mitra menghadirkan pengalaman bersantap yang istimewa dengan penuh keyakinan.",
      learnMore: "Selengkapnya",
    },

    contactCTA: {
      title: "Kami Siap Memenuhi Kebutuhan Anda",
      description:
        "Solusi terpercaya untuk kebutuhan daging grosir dan eceran Anda, didukung oleh produk berkualitas dan layanan yang dapat diandalkan.",
      contactUs: "Hubungi Kami",
    },

    about: {
      title: "Tentang Kami",

      paragraph1Before:
        "Didirikan pada tahun 2022, Beef Centric, sebuah brand dari ",

      companyName: "PT Tenteram Sejahtera Abadi",

      paragraph1After:
        ", merupakan distributor daging premium yang melayani bisnis di wilayah Jabodetabek dan sekitarnya. Kami menyediakan produk berkualitas dan layanan yang dapat diandalkan untuk hotel, restoran, perusahaan katering, serta bisnis food service lainnya, membantu para mitra menghadirkan pengalaman bersantap yang istimewa dengan penuh keyakinan.",

      paragraph2:
        "Di Beef Centric, kami percaya bahwa setiap pengalaman bersantap yang berkesan dimulai dari bahan-bahan berkualitas. Kami mengkhususkan diri dalam menyediakan daging sapi impor premium dengan kualitas, konsistensi, dan keandalan yang terjaga untuk restoran, hotel, kafe, bisnis katering, profesional food service, juru masak rumahan, serta ibu rumah tangga di seluruh Indonesia.",

      paragraph3:
        "Lebih dari sekadar menyediakan produk premium, kami berupaya menjadi mitra bisnis yang terpercaya. Melalui pasokan yang dapat diandalkan, layanan pelanggan yang responsif, serta komitmen terhadap hubungan jangka panjang, kami membantu klien menjalankan bisnis dengan percaya diri dan menciptakan pengalaman kuliner yang luar biasa setiap hari.",
    },

    whyChooseUs: {
      premiumQuality: {
        title: "Kualitas Premium",
        description:
          "Kami memilih daging sapi impor premium dari produsen terpercaya untuk memastikan setiap produk secara konsisten memenuhi standar dapur profesional.",
      },

      consistentSupply: {
        title: "Pasokan Konsisten",
        description:
          "Kami memahami bahwa operasional yang tidak terputus bergantung pada ketersediaan stok yang dapat diandalkan. Komitmen kami adalah menyediakan produk secara stabil kapan pun Anda membutuhkannya.",
      },

      coldChainIntegrity: {
        title: "Integritas Rantai Dingin",
        description:
          "Setiap produk ditangani dan didistribusikan melalui sistem rantai dingin yang terkontrol untuk menjaga kesegaran, keamanan, dan kualitas mulai dari penyimpanan hingga pengiriman.",
      },

      competitiveValue: {
        title: "Nilai Kompetitif",
        description:
          "Kami percaya kualitas premium juga harus memberikan nilai bagi bisnis. Harga kami dirancang agar tetap kompetitif tanpa mengorbankan standar produk.",
      },

      customerFocusedService: {
        title: "Layanan Berorientasi Pelanggan",
        description:
          "Mulai dari konsultasi produk hingga layanan purna jual, tim kami berkomitmen memberikan layanan yang responsif dan solusi praktis yang disesuaikan dengan kebutuhan bisnis Anda.",
      },

      trustedPartnership: {
        title: "Kemitraan Terpercaya",
        description:
          "Kami tidak mengukur keberhasilan hanya dari transaksi. Kami mengukurnya melalui hubungan jangka panjang yang kami bangun, menjadi mitra terpercaya yang mendukung pertumbuhan bisnis Anda melalui konsistensi, komitmen, dan kepercayaan.",
      },

      mission:
        "Misi kami adalah menjadi mitra pilihan yang terpercaya dalam penyediaan daging sapi premium, menghadirkan produk berkualitas dan layanan yang dapat diandalkan untuk menciptakan nilai jangka panjang bagi setiap pelanggan. Kami berkomitmen menyediakan daging sapi impor premium dengan kualitas yang konsisten, menjaga rantai pasok yang andal dan berkelanjutan, serta memberikan layanan yang responsif, profesional, dan personal. Melalui komitmen tersebut, kami bertujuan membangun kemitraan jangka panjang yang berlandaskan kepercayaan, integritas, dan pertumbuhan bersama.",
    },

    products: {
      title: "Produk",
      topProducts: "Produk Unggulan",
      subtitle:
        "Jelajahi Pilihan Daging Premium Terpopuler Kami",
      productNotFound: "Produk Tidak Ditemukan",
      backToProducts: "Kembali ke Produk",
      orderNow: "Pesan Sekarang",
      orderThrough: "Pesan produk ini melalui:",
      showingResultsFor: "Menampilkan hasil untuk",
      noProductMatch: "Kami tidak menemukan produk yang sesuai dengan",
    },

    contact: {
      title: "Hubungi Kami",
      address: "Alamat",
      whatsapp: "WhatsApp",
      emailTitle: "Email",
      name: "Nama *",
      email: "Email *",
      subject: "Subjek",
      message: "Pesan *",
      send: "Kirim",
      sending: "Mengirim...",
      success: "Pesan Anda berhasil dikirim!",
      error: "Terjadi kesalahan. Silakan coba lagi.",
    },
  },
};

// =====================================================
// CONTEXT TYPE
// =====================================================

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
};

// =====================================================
// CREATE CONTEXT
// =====================================================

const LanguageContext =
  createContext<LanguageContextType | undefined>(
    undefined
  );

// =====================================================
// PROVIDER
// =====================================================

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] =
    useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((currentLanguage) =>
      currentLanguage === "en" ? "id" : "en"
    );
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// =====================================================
// HOOK
// =====================================================

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}