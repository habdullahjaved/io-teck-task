"use client";

import { useParams } from "next/navigation";
import { useServices } from "@/hooks/useServices";
import { useLocale } from "next-intl";

export default function ServiceDetail() {
  const { slug } = useParams();
  const locale = useLocale();
  const isRTL = locale === "ar";
  const services = useServices();
  const service = services.find((s) => s.slug === slug);

  if (!service)
    return <p className="p-6 text-center text-lg">Service not found</p>;

  return (
    <section
      className={`py-12 px-6 max-w-5xl mx-auto ${
        isRTL ? "rtl text-right" : "ltr text-left"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Header Section */}
      <div className="mb-10">
        <button
          onClick={() => history.back()}
          className="text-sm text-gray-500 hover:underline mb-4 block"
        >
          {isRTL ? "← رجوع" : "← Back"}
        </button>
        <h1 className="text-4xl font-bold mb-4 text-[#4b2515]">
          {service.title}
        </h1>
        <p className="text-lg text-[#4b2515] opacity-80 max-w-3xl">
          {service.description}
        </p>
      </div>

      {/* Content Sections */}
      {service.content && (
        <div className="space-y-12">
          {service.content.map((section, index) => (
            <div
              key={index}
              className={`${
                isRTL
                  ? "pr-5 border-r-4 border-l-0"
                  : "pl-5 border-l-4 border-r-0"
              } border-[#4b2515]`}
            >
              <h2 className="text-2xl font-semibold mb-3 text-[#4b2515]">
                {section.heading}
              </h2>
              <ul
                className={`list-disc space-y-2 text-gray-700 ${
                  isRTL ? "mr-5" : "ml-5"
                }`}
              >
                {section.body.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Footer Note */}
      <div className="mt-16 text-center text-[#4b2515] leading-relaxed text-base">
        <p>
          {isRTL ? (
            <>
              في <strong>مكتب المحاماة</strong>، نسعى لتقديم أفضل الخدمات
              القانونية لضمان حقوقك وتقديم حلول قانونية فعالة. <br />
              <span className="text-amber-600 font-semibold">
                تواصل معنا اليوم
              </span>{" "}
              للحصول على استشارة قانونية متخصصة وشاملة.
            </>
          ) : (
            <>
              At <strong>Law Firm</strong>, we aim to provide the best legal
              services to ensure your rights and offer effective legal
              solutions. <br />
              <span className="text-amber-600 font-semibold">
                Contact us today
              </span>{" "}
              to receive professional and comprehensive legal consultation.
            </>
          )}
        </p>
      </div>
    </section>
  );
}
