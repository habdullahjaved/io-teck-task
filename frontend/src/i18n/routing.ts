import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  // Added this to force default locale recognition
  // This make sure en is default and also do not want to add en in urls
  localePrefix: "as-needed",
  localeDetection: true,
});
export const { defaultLocale } = routing;
