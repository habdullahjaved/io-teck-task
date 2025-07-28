"use client";

import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <section className="bg-white text-gray-800 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6" style={{ color: "#4b2515" }}>
          {t("title")}
        </h1>
        <p className="text-lg mb-6 text-gray-600">{t("intro")}</p>

        <div className="space-y-6">
          <div>
            <h2
              className="text-2xl font-semibold mb-2"
              style={{ color: "#4b2515" }}
            >
              {t("mission")}
            </h2>
          </div>
          <div>
            <h2
              className="text-2xl font-semibold mb-2"
              style={{ color: "#4b2515" }}
            >
              {t("vision")}
            </h2>
          </div>
          <div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "#4b2515" }}
            >
              {t("valuesTitle", { default: "Our Values" })}
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              {t.raw("values").map((value: string, i: number) => (
                <li key={i}>{value}</li>
              ))}
            </ul>
          </div>
        </div>

        <a
          href="/services"
          className="mt-8 inline-block px-6 py-3 bg-[#4b2515] text-white font-medium rounded-lg hover:bg-[#3a1c10] transition"
        >
          {t("cta.text")}
        </a>
      </div>
    </section>
  );
}
