"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = ["en", "ar"];

  function switchLocale(lang: string) {
    if (!pathname) return;

    // Replace the current locale with the new one
    const segments = pathname.split("/").filter(Boolean);
    const currentLocale = segments[0];

    if (languages.includes(currentLocale)) {
      segments[0] = lang; // Replace locale
    } else {
      segments.unshift(lang); // Add locale if missing
    }

    const newPath = "/" + segments.join("/");
    router.push(newPath);
    setOpen(false);
  }

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 transition"
      >
        {locale.toUpperCase()}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-20 bg-white border rounded shadow-lg z-50">
          {languages
            .filter((lang) => lang !== locale)
            .map((lang) => (
              <button
                key={lang}
                onClick={() => switchLocale(lang)}
                className="block w-full text-left px-3 py-2 hover:bg-gray-100"
              >
                {lang.toUpperCase()}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
