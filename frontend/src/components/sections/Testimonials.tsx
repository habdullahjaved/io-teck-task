"use client";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const t = useTranslations("Testimonials");
  const locale = useLocale();
  const testimonials = t.raw("items") as {
    name: string;
    designation: string;
    company: string;
    comment: string;
    image: string;
  }[];

  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[current];

  return (
    <section
      className={`bg-[#4E2E20] text-white py-12 px-4 ${
        locale === "ar" ? "text-right" : "text-left"
      }`}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
        <p className="text-sm text-gray-200 mb-8">{t("description")}</p>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="w-48 h-48 flex-shrink-0">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          {/* Comment */}
          <div className="flex-1">
            <p className="italic text-lg mb-6">
              “{currentTestimonial.comment}”
            </p>
            <div>
              <h3 className="font-semibold text-white">
                {currentTestimonial.name}
              </h3>
              <p className="text-sm text-gray-300">
                {currentTestimonial.designation} / {currentTestimonial.company}
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div
          className={`flex ${
            locale === "ar" ? "justify-start" : "justify-end"
          } gap-4 mt-8`}
        >
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20"
          >
            {locale === "ar" ? (
              <ArrowRight className="w-5 h-5" />
            ) : (
              <ArrowLeft className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-white hover:bg-gray-100 text-black"
          >
            {locale === "ar" ? (
              <ArrowLeft className="w-5 h-5" />
            ) : (
              <ArrowRight className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
