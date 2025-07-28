"use client";
import Link from "next/link";
import { useLocale } from "next-intl";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const nextLocale = locale === "en" ? "ar" : "en";

  return (
    <Link
      href="/"
      locale={nextLocale}
      className="text-sm font-semibold hover:underline"
    >
      {nextLocale.toUpperCase()}
    </Link>
  );
};

export default LanguageSwitcher;
