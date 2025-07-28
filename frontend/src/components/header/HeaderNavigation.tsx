"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, Search, X, ChevronDown } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import SearchDialog from "./SearchDialog";
import Image from "next/image";
import { servicesData } from "@/data/services";
const services = [
  "legalConsultation",
  "foreignInvestment",
  "contracts",
  "notarization",
  "insurance",
  "defenseAllCases",
  "banksInstitutions",
  "corporateGovernance",
  "companiesLiquidation",
  "internalRegulations",
  "servicesCompanies",
  "arbitration",
  "intellectualProperty",
  "corporateRestructuring",
  "establishCompanies",
  "commercialAgencies",
  "vision2030",
  "estates",
];

export default function HeaderNavigation() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  const navLink = (href: string, label: string) => (
    <Link
      href={`/${locale}${href}`}
      className="hover:text-yellow-400 transition"
    >
      {label}
    </Link>
  );

  const handleServiceClick = (slug: string) => {
    router.push(`/${locale}/services/${slug}`);
    setServicesOpen(false);
  };

  // Close mega menu on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 shadow-sm transition-colors ${
        servicesOpen ? "bg-[#4b2515] text-white" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-bold text-xl">
          <Image src={"/logo.svg"} alt="logo" height={80} width={100} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 relative">
          {navLink("/", t("home"))}
          {navLink("/about-us", t("about"))}

          {/* Mega Menu */}
          <div className="relative" ref={megaMenuRef}>
            <button
              onClick={() => setServicesOpen((p) => !p)}
              className="flex items-center gap-1 hover:text-yellow-400 transition"
            >
              {t("services")}
              <ChevronDown
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[900px] p-6 rounded bg-[#4b2515] text-white shadow-xl grid grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-x-8 gap-y-3 z-50">
                {servicesData.map((service) => (
                  <button
                    key={service.slug}
                    className="text-left hover:text-yellow-300 transition"
                    onClick={() => handleServiceClick(service.slug)}
                  >
                    {service.title[locale as "en" | "ar"]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {navLink("/team", t("team"))}
          {navLink("/blogs", t("blog"))}
          {navLink("/contact-us", t("contact"))}

          {/* Search */}
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className="p-1 hover:text-yellow-400"
          >
            <Search className="w-5 h-5" />
          </button>

          <LanguageToggle />

          <Link
            href={`/${locale}/book`}
            className="rounded border border-[#4b2515] px-3 py-1 text-[#4b2515] hover:bg-[#4b2515] hover:text-white transition"
          >
            {t("book")}
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-1"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white px-4 py-3 space-y-2">
          {navLink("/", t("home"))}
          {navLink("/about", t("about"))}

          <details className="group">
            <summary className="cursor-pointer">{t("services")}</summary>
            <div className="pl-3 mt-1 grid grid-cols-2 gap-2">
              {servicesData.map((service) => (
                <button
                  key={service.slug}
                  className="text-left hover:text-yellow-300 transition"
                  onClick={() => handleServiceClick(service.slug)}
                >
                  {service.title[locale as "en" | "ar"]}
                </button>
              ))}
            </div>
          </details>

          {navLink("/contact", t("contact"))}
          <button
            onClick={() => setSearchOpen(true)}
            className="block flex items-center gap-2"
          >
            <Search className="w-4 h-4" /> {t("searchPlaceholder")}
          </button>
          <LanguageToggle />
          <Link
            href={`/${locale}/book`}
            className="block rounded border border-[#4b2515] px-3 py-1 text-[#4b2515] hover:bg-[#4b2515] hover:text-white transition"
          >
            {t("book")}
          </Link>
        </div>
      )}

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
