import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  let messages: Record<string, any> = {};

  try {
    // ✅ Use dynamic import instead of fs
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch (e) {
    console.error(`❌ Failed to load messages for locale "${locale}"`, e);
  }

  return {
    locale,
    messages,
  };
});
