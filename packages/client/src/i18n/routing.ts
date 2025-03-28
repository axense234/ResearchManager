// Next INTL
import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ro", "fr", "de"],
  defaultLocale: "en",
  localePrefix: "always",
  pathnames: {
    "/": { ro: "/", en: "/", fr: "/", de: "/" },
    "/signin": {
      ro: "/conectare",
      en: "/signin",
      fr: "/connecter",
      de: "/anmeldung",
    },
    "/home": {
      ro: "/acasa",
      en: "/home",
      fr: "/maison",
      de: "/heim",
    },
  },
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
