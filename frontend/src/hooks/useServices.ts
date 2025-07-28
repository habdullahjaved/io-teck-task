import { useLocale } from "next-intl";
import servicesEn from "@/../public/locales/en/services.json";
import servicesAr from "@/../public/locales/ar/services.json";

export type ServiceItem = {
  title: string;
  description: string;
  slug: string;
  content?: {
    heading: string;
    body: string[];
  }[];
};

export function useServices(): ServiceItem[] {
  const locale = useLocale();
  return locale === "ar" ? servicesAr : servicesEn;
}
