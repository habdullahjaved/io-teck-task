import fs from "fs";
import path from "path";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const filePath = path.resolve(process.cwd(), "messages", `${locale}.json`);

  let messages: Record<string, any> = {};

  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    messages = JSON.parse(fileContent);
  } catch (e) {
    console.error(`❌ Failed to load messages from ${filePath}`, e);
  }

  return {
    locale,
    messages,
  };
});
