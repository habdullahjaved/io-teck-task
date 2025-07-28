import { BASE_URL, DEFAULT_LOCALE } from "./config";

export function buildUrl(path: string, locale: string) {
  const trimmedPath = path.replace(/^\/|\/$/g, "");
  if (locale === DEFAULT_LOCALE) {
    return `${BASE_URL}/${trimmedPath}`.replace(/\/+$/, "");
  } else {
    return `${BASE_URL}/${locale}/${trimmedPath}`.replace(/\/+$/, "");
  }
}
