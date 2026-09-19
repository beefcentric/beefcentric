import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main
      className="
        h-screen
        overflow-y-auto
        snap-y
        snap-mandatory
      "
    >
      {/* Hero dengan background kayu */}
      <div
        className="
          bg-[url('/images/bg-ivory.jpg')]
          bg-cover
          bg-center
        "
      >
        <Hero />
      </div>

      <AboutPreview />
      <ContactCTA />
    </main>
  );
}