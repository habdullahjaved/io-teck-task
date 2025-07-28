"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLocale } from "@/hooks/useLocale";
// import { getMessages } from "next-intl/server";
import { useMessages, useTranslations } from "next-intl";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/${locale}/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        placeholder={t("search_placeholder")}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded px-3 py-1 text-sm"
      />
    </form>
  );
};

export default SearchBar;
