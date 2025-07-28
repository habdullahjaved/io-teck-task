"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-white text-gray-800 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6" style={{ color: "#4b2515" }}>
          {t("title")}
        </h1>
        <p className="text-lg text-gray-600 mb-8">{t("description")}</p>

        <div className="mb-10 text-gray-700 space-y-1">
          <p>
            <strong>{t("address")}</strong>
          </p>
          <p>{t("phone")}</p>
          <p>{t("email")}</p>
          <p>{t("workingHours")}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-6 rounded-lg shadow-md"
        >
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "#4b2515" }}
          >
            {t("formTitle")}
          </h2>
          <input
            type="text"
            placeholder={t("formFields.name")}
            className="w-full mb-3 p-3 border border-gray-300 rounded focus:outline-none focus:border-[#4b2515]"
          />
          <input
            type="email"
            placeholder={t("formFields.email")}
            className="w-full mb-3 p-3 border border-gray-300 rounded focus:outline-none focus:border-[#4b2515]"
          />
          <textarea
            placeholder={t("formFields.message")}
            className="w-full mb-3 p-3 border border-gray-300 rounded focus:outline-none focus:border-[#4b2515]"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="bg-[#4b2515] px-5 py-2 rounded text-white font-semibold hover:bg-[#3a1c10] transition"
          >
            {t("formFields.submit")}
          </button>
          {submitted && (
            <p className="mt-3 text-green-600">{t("successMessage")}</p>
          )}
        </form>
      </div>
    </section>
  );
}
