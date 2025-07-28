"use client";
import { useLocale as useNextIntlLocale } from "next-intl";

export function useLocale() {
  return useNextIntlLocale(); // it's already a string like 'en' or 'ar'
}
