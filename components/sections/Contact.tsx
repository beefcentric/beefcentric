"use client";

import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/language";

export default function ContactPage() {
  const { t } = useLanguage();

  // =====================================================
  // FORM DATA
  // =====================================================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");


  // =====================================================
  // HANDLE INPUT
  // =====================================================
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // =====================================================
  // HANDLE FORM SUBMIT
  // =====================================================
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();


      // =================================================
      // ERROR FROM API
      // =================================================
      if (!response.ok) {
        throw new Error(
          result.error || "Failed to send message."
        );
      }


      // =================================================
      // SUCCESS
      // =================================================
      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });


    } catch (error) {

      console.error("Contact form error:", error);

      setStatus("error");


    } finally {

      setIsSending(false);

    }
  };


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
          CONTACT HERO
      ===================================================== */}
      <section
        className="
          relative
          w-full
          px-8
          pt-[50px]
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
            src="/images/banner/contact-banner.jpg"
            alt="Contact Beef Centric"
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

          {/* Contact Us */}
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
              {t.contact.title}
            </h1>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}
      <section
        className="
          bg-transparent
          px-8
          pt-4
          pb-20
        "
      >

        <div
          className="
            max-w-6xl
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-16
          "
        >

          {/* =================================================
              LEFT - CONTACT INFORMATION
          ================================================= */}
          <div
            className="
              font-[family-name:var(--font-plus-jakarta)]
              text-[#1D1D1D]
            "
          >

            {/* =================================================
                ADDRESS
            ================================================= */}
            <div
              className="
                pb-8
                border-b
                border-[#1D1D1D]/10
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-5
                "
              >

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#A31E21]
                  "
                >

                  <MapPin
                    size={22}
                    strokeWidth={2}
                    className="text-[#E9E3D5]"
                  />

                </div>

                <h2 className="text-xl font-bold">
                  {t.contact.address}
                </h2>

              </div>


              <p
                className="
                  mt-6
                  max-w-md
                  text-sm
                  leading-7
                  text-[#1D1D1D]
                "
              >
                Summarecon Boulevard Barat Blok GBVA No. 3,
                Cibanon, Kec. Sukaraja, Kabupaten Bogor,
                Jawa Barat 16711
              </p>

            </div>


            {/* =================================================
                WHATSAPP
            ================================================= */}
            <div
              className="
                py-8
                border-b
                border-[#1D1D1D]/10
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-5
                "
              >

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#A31E21]
                  "
                >

                  <Phone
                    size={22}
                    strokeWidth={2}
                    className="text-[#E9E3D5]"
                  />

                </div>

                <h2 className="text-xl font-bold">
                  {t.contact.whatsapp}
                </h2>

              </div>


              <div
                className="
                  mt-6
                  space-y-2
                  text-sm
                "
              >

                <a
                  href="https://wa.me/6281947677811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    block
                    text-[#1D1D1D]
                    underline
                    underline-offset-2
                    hover:text-[#A31E21]
                    transition-colors
                  "
                >
                  +62 819-4767-7811
                </a>

                <a
                  href="https://wa.me/6287714910116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    block
                    text-[#1D1D1D]
                    underline
                    underline-offset-2
                    hover:text-[#A31E21]
                    transition-colors
                  "
                >
                  +62 877-1491-0116
                </a>

              </div>

            </div>


            {/* =================================================
                EMAIL
            ================================================= */}
            <div className="pt-8">

              <div
                className="
                  flex
                  items-center
                  gap-5
                "
              >

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#A31E21]
                  "
                >

                  <Mail
                    size={22}
                    strokeWidth={2}
                    className="text-[#E9E3D5]"
                  />

                </div>

                <h2 className="text-xl font-bold">
                  {t.contact.emailTitle}
                </h2>

              </div>


              <a
                href="mailto:info@beefcentric.co.id"
                className="
                  block
                  mt-6
                  text-sm
                  text-[#1D1D1D]
                  underline
                  underline-offset-2
                  hover:text-[#A31E21]
                  transition-colors
                "
              >
                info@beefcentric.co.id
              </a>

            </div>

          </div>


          {/* =================================================
              RIGHT - CONTACT FORM
          ================================================= */}
          <form
            onSubmit={handleSubmit}
            className="
              font-[family-name:var(--font-plus-jakarta)]
            "
          >

            {/* =================================================
                NAME + EMAIL
            ================================================= */}
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-5
              "
            >

              {/* NAME */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.contact.name}
                required
                className="
                  w-full
                  h-14
                  px-5
                  rounded-lg
                  bg-[#F8F7F5]/70
                  border
                  border-[#1D1D1D]/10
                  font-[family-name:var(--font-plus-jakarta)]
                  text-[#1D1D1D]
                  placeholder:text-[#1D1D1D]/40
                  outline-none
                  focus:border-[#A31E21]
                  transition-colors
                "
              />


              {/* EMAIL */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.contact.email}
                required
                className="
                  w-full
                  h-14
                  px-5
                  rounded-lg
                  bg-[#F8F7F5]/70
                  border
                  border-[#1D1D1D]/10
                  font-[family-name:var(--font-plus-jakarta)]
                  text-[#1D1D1D]
                  placeholder:text-[#1D1D1D]/40
                  outline-none
                  focus:border-[#A31E21]
                  transition-colors
                "
              />

            </div>


            {/* =================================================
                SUBJECT
            ================================================= */}
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder={t.contact.subject}
              className="
                mt-5
                w-full
                h-14
                px-5
                rounded-lg
                bg-[#F8F7F5]/70
                border
                border-[#1D1D1D]/10
                font-[family-name:var(--font-plus-jakarta)]
                text-[#1D1D1D]
                placeholder:text-[#1D1D1D]/40
                outline-none
                focus:border-[#A31E21]
                transition-colors
              "
            />


            {/* =================================================
                MESSAGE
            ================================================= */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.contact.message}
              required
              rows={6}
              className="
                mt-5
                w-full
                px-5
                py-4
                rounded-lg
                bg-[#F8F7F5]/70
                border
                border-[#1D1D1D]/10
                font-[family-name:var(--font-plus-jakarta)]
                text-[#1D1D1D]
                placeholder:text-[#1D1D1D]/40
                outline-none
                resize-none
                focus:border-[#A31E21]
                transition-colors
              "
            />


            {/* =================================================
                SEND BUTTON
            ================================================= */}
            <button
              type="submit"
              disabled={isSending}
              className="
                mt-6
                px-10
                h-14
                rounded-lg
                bg-[#A31E21]
                text-[#E9E3D5]
                font-[family-name:var(--font-plus-jakarta)]
                font-bold
                hover:bg-[#8F1A1C]
                disabled:opacity-60
                disabled:cursor-not-allowed
                transition-colors
              "
            >
              {isSending
                ? t.contact.sending
                : t.contact.send}
            </button>


            {/* =================================================
                SUCCESS MESSAGE
            ================================================= */}
            {status === "success" && (
              <p
                className="
                  mt-4
                  font-[family-name:var(--font-plus-jakarta)]
                  text-sm
                  font-medium
                  text-green-700
                "
              >
                {t.contact.success}
              </p>
            )}


            {/* =================================================
                ERROR MESSAGE
            ================================================= */}
            {status === "error" && (
              <p
                className="
                  mt-4
                  font-[family-name:var(--font-plus-jakarta)]
                  text-sm
                  font-medium
                  text-[#A31E21]
                "
              >
                {t.contact.error}
              </p>
            )}

          </form>

        </div>

      </section>


      {/* =====================================================
          GOOGLE MAP
      ===================================================== */}
      <section
        className="
          px-8
          pb-24
        "
      >

        <div className="max-w-6xl mx-auto">

          <div
            className="
              relative
              w-full
              h-[400px]
              overflow-hidden
              rounded-xl
            "
          >

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.226697080604!2d106.83610739999999!3d-6.618735099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5e1118555a%3A0x28eb6b2278e5aeb2!2sB'Steak%20Grill%20%26%20Pancake!5e0!3m2!1sen!2sid!4v1786680611990!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </section>

    </main>
  );
}