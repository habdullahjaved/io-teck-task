"use client";

import { useTranslations } from "next-intl";
import { Facebook, Twitter, Mail } from "lucide-react"; // you can replace with your icons
import FooterSubscribeForm from "./FooterSubscribeForm";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#4E2E20] text-white py-6 mt-[25px]">
      <div className="max-w-7xl mx-auto px-8 flex flex-col gap-6">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Subscribe */}
          {/* <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="px-3 py-2 rounded-md text-black bg-white"
            />
            <button className="bg-[#4b2515] text-white px-4 py-2 rounded-md hover:bg-gray-200 transition">
              {t("subscribe")}
            </button>
          </div> */}
          <FooterSubscribeForm />
          {/* Contacts and Icons */}
          <div className="flex items-center gap-4">
            <span>{t("contacts")}</span>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Twitter" className="hover:text-gray-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-gray-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Mail" className="hover:text-gray-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-400/50" />

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <ul className="flex flex-wrap justify-center md:justify-start gap-6">
            <li>
              <a href="#" className="hover:underline">
                {t("about")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                {t("strategy")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                {t("advantages")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                {t("social")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                {t("services")}
              </a>
            </li>
          </ul>
          <span className="text-gray-300">{t("rights")}</span>
        </div>
      </div>
    </footer>
  );
}
