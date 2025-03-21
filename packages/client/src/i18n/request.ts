// Next INTL
import { getRequestConfig } from "next-intl/server";
// Available locales
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    messages: (await import(`../../messages/${locale || "en"}.json`)).default,
    defaultTranslationValues: {},
    locale,
  };
});
