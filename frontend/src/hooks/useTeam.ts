// hooks/useTeam.ts
import { useLocale } from "next-intl";
import teamEn from "@/../public/locales/en/team.json";
import teamAr from "@/../public/locales/ar/team.json";

export type TeamItem = {
  name: string;
  role: string;
  slug: string;
  bio?: string;
  image?: string;
  keywords?: string[];
};

export function useTeam(): TeamItem[] {
  const locale = useLocale();
  return locale === "ar" ? (teamAr as TeamItem[]) : (teamEn as TeamItem[]);
}
