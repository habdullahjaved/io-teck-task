// hooks/useSearch.ts
import { useLocale } from "next-intl";
import servicesEn from "@/../public/locales/en/services.json";
import servicesAr from "@/../public/locales/ar/services.json";
import teamEn from "@/../public/locales/en/team.json";
import teamAr from "@/../public/locales/ar/team.json";

export type SearchResult = {
  type: "service" | "team";
  title: string;
  description?: string;
  slug: string;
};

export function useSearch() {
  const locale = useLocale();
  const services = locale === "ar" ? servicesAr : servicesEn;
  const team = locale === "ar" ? teamAr : teamEn;

  const search = (query: string): SearchResult[] => {
    if (!query.trim()) return [];

    const q = query.toLowerCase();

    const serviceResults: SearchResult[] = services
      .filter((s) => s.title.toLowerCase().includes(q))
      .map((s) => ({
        type: "service" as const, // <--- Explicit literal type
        title: s.title,
        description: s.description,
        slug: `/services/${s.slug}`,
      }));

    const teamResults: SearchResult[] = team
      .filter(
        (t) =>
          t.name.toLowerCase().includes(q) || t.role.toLowerCase().includes(q)
      )
      .map((t) => ({
        type: "team" as const, // <--- Explicit literal type
        title: t.name,
        description: t.role,
        slug: `/team/${t.slug}`,
      }));

    return [...serviceResults, ...teamResults];
  };

  return { search };
}
